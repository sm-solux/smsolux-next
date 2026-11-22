import type { Metadata } from 'next';
import ActivitiesClient from './ActivitiesClient';
import { getPublicActivities } from '@/lib/public-data';
import { normalizeActivityRecord } from '@/lib/activity';

export const metadata: Metadata = {
    title: 'Activities - Solux',
    description: '솔룩스의 1년 활동 내용 소개',
};

// 관리자가 저장하면 updateTag로 바로 갱신된다. 시간 값은 그 호출이
// 실패했을 때를 대비한 안전망이다.
export const revalidate = 3600;

export default async function ActivityPage() {
    const activities = await getPublicActivities().catch((error) => {
        console.error("DB Error:", error);
        return [];
    });

    const formattedActivities = activities.map(normalizeActivityRecord);

    return <ActivitiesClient initialActivities={formattedActivities} />;
}
