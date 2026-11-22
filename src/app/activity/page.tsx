import type { Metadata } from 'next';
import ActivitiesClient from './ActivitiesClient';
import { supabase } from '@/lib/supabase';
import { normalizeActivityRecord } from '@/lib/activity';

export const metadata: Metadata = {
    title: 'Activities - Solux',
    description: '솔룩스의 1년 활동 내용 소개',
};

// 관리자가 저장하면 revalidatePath로 바로 갱신된다. 시간 값은 그 호출이
// 실패했을 때를 대비한 안전망이다.
export const revalidate = 3600;

export default async function ActivityPage() {
    const { data: activities, error } = await supabase
        .from('activities')
        .select('*')
        .order('order', { ascending: true }); // Ensure 'order' column exists or use created_at

    if (error) {
        console.error("DB Error:", error);
        // Optional: Render error state
    }

    const formattedActivities = (activities ?? []).map(normalizeActivityRecord);

    return <ActivitiesClient initialActivities={formattedActivities} />;
}
