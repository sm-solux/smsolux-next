import type { Metadata } from 'next';
import ActivitiesClient from './ActivitysClient';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Activities - Solux',
    description: '솔룩스의 1년 활동 내용 소개',
};

export const revalidate = 0;

export default async function ActivityPage() {
    const { data: activities, error } = await supabase
        .from('activities')
        .select('*')
        .order('order', { ascending: true }); // Ensure 'order' column exists or use created_at

    if (error) {
        console.error("DB Error:", error);
        // Optional: Render error state
    }

    // Since Supabase might return null for JSON/details if column doesn't match structure, handle safely
    const formattedActivities = activities?.map((activity: any) => ({
        ...activity,
        details: typeof activity.details === 'string'
            ? JSON.parse(activity.details)
            : activity.details // Handle potential stringified JSON
    })) || [];

    return <ActivitiesClient initialActivities={formattedActivities} />;
}
