import { unstable_cache } from "next/cache";
import { supabase } from "@/lib/supabase";

/**
 * 공개 페이지의 데이터 조회.
 *
 * 테이블마다 캐시 태그를 달아 두고, 관리자가 저장·삭제하면 서버 액션이
 * updateTag(tableTag(table))로 그 태그를 즉시 만료시킨다. revalidatePath만
 * 쓰면 저장 직후 첫 방문에 예전 화면이 한 번 나가고 그다음부터 바뀌는데,
 * 태그를 만료시키면 다음 방문이 바로 새 데이터를 받는다.
 *
 * 조회에 실패하면 예외를 던진다. unstable_cache는 예외를 캐시하지 않으므로
 * 일시적인 DB 오류가 한 시간 동안 남지 않는다.
 */

export const tableTag = (table: string) => `table:${table}`;

const REVALIDATE_SECONDS = 3600;

function cachedSelect<T>(table: string, query: () => PromiseLike<{ data: T[] | null; error: { message: string } | null }>) {
  return unstable_cache(
    async () => {
      const { data, error } = await query();

      if (error) {
        throw new Error(`${table} 조회 실패: ${error.message}`);
      }

      return data ?? [];
    },
    ["public-data", table],
    { tags: [tableTag(table)], revalidate: REVALIDATE_SECONDS }
  );
}

export const getPublicReviews = cachedSelect("reviews", () =>
  supabase.from("reviews").select("*")
);

export const getPublicProjects = cachedSelect("projects", () =>
  supabase.from("projects").select("*").order("generation", { ascending: false })
);

export const getPublicActivities = cachedSelect("activities", () =>
  supabase.from("activities").select("*").order("order", { ascending: true })
);

export const getPublicFaqs = cachedSelect("faqs", () =>
  supabase.from("faqs").select("*").order("id", { ascending: true })
);

// 모집 기간 비교는 현재 시각에 따라 달라지므로 캐시에는 공개 중인 공고만 담고,
// 기간 판단은 페이지에서 한다. (recruit 페이지는 1분마다 다시 만들어진다.)
export const getPublicActiveRecruitments = cachedSelect("recruitments", () =>
  supabase
    .from("recruitments")
    .select("*")
    .eq("is_active", true)
    .order("start_date", { ascending: false })
);
