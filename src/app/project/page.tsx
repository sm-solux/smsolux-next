import { supabase } from '@/lib/supabase';
import ProjectsClient from './ProjectsClient';
import { Project } from '@/types/project';

// 데이터 구조 변환 함수 (DB Flat Data -> UI Nested Data)
const transformData = (flatData: any[]) => {
    // 1. 기수별로 그룹화
    const groupedByGen = flatData.reduce((acc, project) => {
        const { generation, year, semester } = project;
        if (!acc[generation]) {
            acc[generation] = { gen: generation, year, semesters: {} };
        }

        // 2. 학기별로 그룹화
        if (!acc[generation].semesters[semester]) {
            acc[generation].semesters[semester] = [];
        }

        acc[generation].semesters[semester].push(project);
        return acc;
    }, {});

    // 3. 배열 형태로 변환 및 정렬
    return Object.values(groupedByGen)
        .sort((a: any, b: any) => b.gen - a.gen)
        .map((group: any) => ({
            gen: group.gen,
            year: group.year,
            semesters: Object.keys(group.semesters)
                .sort()
                .reverse()
                .map((term) => ({
                    term,
                    projects: group.semesters[term].map((p: any): Project => ({
                        title: p.title,
                        teamName: p.team_name, // DB: team_name -> UI: teamName
                        desc: p.desc,
                        award: p.award,
                        category: p.category,
                        stacks: p.stacks || [], // Ensure array
                        image: p.image,
                        link: p.link || "",
                    })),
                })),
        }));
};

export const revalidate = 0; // 페이지를 동적으로 설정 (혹은 ISR 사용 시 60 등)

export default async function ProjectsPage() {
    // DB에서 데이터 긁어오기 (기수 내림차순, 학기 내림차순 등의 정렬은 JS에서 처리하거나 여기서 order 추가)
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        .order('generation', { ascending: false });

    if (error) {
        console.error("DB Error:", error);
        return <div className="text-white text-center py-20">데이터를 불러오는데 실패했습니다.</div>;
    }

    // DB 데이터를 UI에 맞는 형태로 변환
    const formattedArchives = transformData(projects || []);

    // 클라이언트 컴포넌트에 prop으로 전달
    return <ProjectsClient initialArchives={formattedArchives} />;
}