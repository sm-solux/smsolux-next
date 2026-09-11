import { unstable_cache } from "next/cache";
import { supabase } from "@/lib/supabase";

/**
 * 사이트 전역 설정.
 *
 * 푸터는 루트 레이아웃에 있어서 모든 페이지가 이 값을 읽는다. 1년에 두세 번
 * 바뀌는 값이라 캐시해 두고, 관리자가 저장할 때 태그로 무효화한다. 캐시가
 * 없으면 사이트 전체가 매 요청마다 DB 를 한 번 더 왕복하게 된다.
 */
export const SITE_SETTINGS_CACHE_TAG = "site-settings";

export const SITE_SETTING_KEYS = {
  kakaoOpenChatUrl: "kakao_open_chat_url",
} as const;

export type SiteSettings = Record<string, string>;

const readSiteSettings = unstable_cache(
  async (): Promise<SiteSettings> => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("key, value");

    if (error) {
      // 설정을 못 읽어도 화면은 떠야 한다. 호출하는 쪽이 기본값으로 넘어간다.
      console.error("사이트 설정 조회 실패:", error.message);
      return {};
    }

    return Object.fromEntries(
      (data ?? [])
        .filter((row) => typeof row.value === "string" && row.value.trim())
        .map((row) => [row.key, row.value.trim()])
    );
  },
  ["site-settings"],
  {
    tags: [SITE_SETTINGS_CACHE_TAG],
    revalidate: 3600,
  }
);

export async function getSiteSettings() {
  return readSiteSettings();
}
