import { supabase } from '@/lib/supabase';
import ProjectsClient from './ProjectsClient';
import { Project } from '@/types/project';

import { transformData } from '@/utils/project';

export const revalidate = 0;

export default async function ProjectsPage() {
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        .order('generation', { ascending: false });

    if (error) {
        console.error("DB Error:", error);
        return <div className="text-white text-center py-20">데이터를 불러오는데 실패했습니다.</div>;
    }
    const formattedArchives = transformData(projects || []);

    return <ProjectsClient initialArchives={formattedArchives} />;
}