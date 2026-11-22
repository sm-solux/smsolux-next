import type { Metadata } from 'next';
import RecruitClient from './RecruitClient';
import { getPublicActiveRecruitments, getPublicFaqs } from '@/lib/public-data';
import { getKstWallClockISOString } from '@/utils/date';

export const metadata: Metadata = {
    title: 'Recruit - Solux',
    description: '솔룩스 신입 부원 모집 안내 및 자주 묻는 질문',
};

// 모집 공고는 시작·마감 시각이 지나면 저장 없이도 화면이 바뀌어야 한다.
// 그래서 다른 페이지보다 짧게 1분마다 다시 만든다. 마감 직후 최대 1분까지는
// 이전 화면이 보일 수 있다.
export const revalidate = 60;

export default async function RecruitPage() {
    let faqs;
    let recruitments;

    try {
        [faqs, recruitments] = await Promise.all([
            getPublicFaqs(),
            getPublicActiveRecruitments(),
        ]);
    } catch (error) {
        console.error("DB Error:", error);
        return (
            <div className="text-white text-center py-20">
                <p className="text-red-500 font-bold mb-2">데이터를 불러오는데 실패했습니다.</p>
                <p className="text-sm text-gray-400">
                    {error instanceof Error ? error.message : String(error)}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    (팁: Supabase에서 테이블의 RLS 정책을 확인해보세요.)
                </p>
            </div>
        );
    }

    // 공개 중인 공고는 시작일 최신순으로 캐시돼 있다. 지금 기간 안에 있는 첫 공고를 고른다.
    // 저장값은 한국 시각을 UTC 형식으로 담고 있어 같은 기준의 현재 시각과 비교한다.
    const now = Date.parse(getKstWallClockISOString());
    const activeRecruitment =
        recruitments.find(
            (recruitment) =>
                Date.parse(recruitment.start_date) <= now &&
                Date.parse(recruitment.end_date) > now
        ) ?? null;

    return (
        <RecruitClient
            initialFaqs={faqs}
            activeRecruitment={activeRecruitment}
        />
    );
}
