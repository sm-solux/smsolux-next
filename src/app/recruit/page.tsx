import type { Metadata } from 'next';
import RecruitClient from './RecruitClient';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Recruit - Solux',
    description: '솔룩스 신입 부원 모집 안내 및 자주 묻는 질문',
};

export const revalidate = 0;

export default async function RecruitPage() {
    const { data: faqs, error } = await supabase
        .from('faqs')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error("DB Error:", error);
    }

    return <RecruitClient initialFaqs={faqs || []} />;
}
