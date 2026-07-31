import type { Metadata } from 'next';
import ActivitiesClient from './ActivitiesClient';
import { supabase } from '@/lib/supabase';
import { normalizeActivityRecord } from '@/lib/activity';
import { createClient } from '@/lib/supabase-server';
import { isAdminBypassEnabled, isAdminEmailAllowed } from '@/lib/admin-access';

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

    const supabaseServer = await createClient();
    const {
        data: { user },
    } = await supabaseServer.auth.getUser();

    const canEdit = isAdminBypassEnabled() || isAdminEmailAllowed(user?.email);

    if (error) {
        console.error("DB Error:", error);
        // Optional: Render error state
    }

    const formattedActivities = (activities ?? []).map(normalizeActivityRecord);

    return <ActivitiesClient initialActivities={formattedActivities} canEdit={canEdit} />;
}
