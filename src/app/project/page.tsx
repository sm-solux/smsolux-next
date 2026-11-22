import { getPublicProjects } from '@/lib/public-data';
import ProjectsClient from './ProjectsClient';

import { transformData } from '@/utils/project';

// 관리자가 저장하면 updateTag로 바로 갱신된다. 시간 값은 그 호출이
// 실패했을 때를 대비한 안전망이다.
export const revalidate = 3600;

export default async function ProjectsPage() {
    let projects;

    try {
        projects = await getPublicProjects();
    } catch (error) {
        console.error("DB Error:", error);
        return <div className="text-white text-center py-20">데이터를 불러오는데 실패했습니다.</div>;
    }

    const formattedArchives = transformData(projects);

    return <ProjectsClient initialArchives={formattedArchives} />;
}
