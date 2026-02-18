import type { Metadata } from 'next';
import RecruitClient from './RecruitClient';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Recruit - Solux',
    description: '솔룩스 신입 부원 모집 안내 및 자주 묻는 질문',
};

export const revalidate = 0;

export default async function RecruitPage() {
    const [faqsResult, recruitmentsResult, coreValuesResult] = await Promise.all([
        supabase.from('faqs').select('*').order('id', { ascending: true }),
        supabase.from('recruitments').select('*').eq('is_active', true).order('start_date', { ascending: false }).limit(1),
        supabase.from('recruit_core_values').select('*').order('order_index', { ascending: true })
    ]);

    const faqs = faqsResult.data;
    const error = faqsResult.error;
    const recruitment = recruitmentsResult.data && recruitmentsResult.data.length > 0 ? recruitmentsResult.data[0] : null;
    const coreValues = coreValuesResult.data;

    if (error || coreValuesResult.error) {
        console.error("DB Error:", error || coreValuesResult.error);
        return (
            <div className="text-white text-center py-20">
                <p className="text-red-500 font-bold mb-2">데이터를 불러오는데 실패했습니다.</p>
                <p className="text-sm text-gray-400">{(error || coreValuesResult.error)?.message}</p>
                <p className="text-xs text-gray-500 mt-2">
                    (팁: Supabase에서 테이블의 RLS 정책을 확인해보세요.)
                </p>
            </div>
        );
    }

    return (
        <RecruitClient
            initialFaqs={faqs || []}
            activeRecruitment={recruitment}
            initialCoreValues={coreValues || []}
        />
    );
}
