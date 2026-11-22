import type { Metadata } from 'next';
import RecruitClient from './RecruitClient';
import { supabase } from '@/lib/supabase';
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
    const now = getKstWallClockISOString();
    const [faqsResult, recruitmentsResult] = await Promise.all([
        supabase.from('faqs').select('*').order('id', { ascending: true }),
        supabase
            .from('recruitments')
            .select('*')
            .eq('is_active', true)
            .lte('start_date', now)
            .gt('end_date', now)
            .order('start_date', { ascending: false })
            .limit(1)
            .maybeSingle()
    ]);

    const pageError = faqsResult.error || recruitmentsResult.error;

    if (pageError) {
        console.error("DB Error:", pageError);
        return (
            <div className="text-white text-center py-20">
                <p className="text-red-500 font-bold mb-2">데이터를 불러오는데 실패했습니다.</p>
                <p className="text-sm text-gray-400">{pageError.message}</p>
                <p className="text-xs text-gray-500 mt-2">
                    (팁: Supabase에서 테이블의 RLS 정책을 확인해보세요.)
                </p>
            </div>
        );
    }

    return (
        <RecruitClient
            initialFaqs={faqsResult.data || []}
            activeRecruitment={recruitmentsResult.data}
        />
    );
}
