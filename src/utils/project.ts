import { Project } from "@/types/project";
import { resolveSupabaseImageUrl } from "@/lib/storage";

type RawProject = {
    id?: number;
    generation: number;
    year: number;
    term: string;
    title: string;
    team_name: string;
    desc: string;
    award?: string | null;
    category: Project["category"];
    stacks?: string[] | null;
    image?: string | null;
    link?: string | null;
};

type GroupedArchive = {
    gen: number;
    year: number;
    semesters: Record<string, RawProject[]>;
};

const AWARD_ORDER: Record<string, number> = {
    "대상": 0,
    "최우수상": 1,
    "우수상": 2,
    "장려상": 3,
};

const getAwardRank = (award: string): number => {
    for (const [key, rank] of Object.entries(AWARD_ORDER)) {
        if (award.includes(key)) return rank;
    }
    return 99;
};

export const transformData = (flatData: RawProject[]) => {
    const groupedByGen = flatData.reduce<Record<number, GroupedArchive>>((acc, project) => {
        const { generation, year, term } = project;
        if (!acc[generation]) {
            acc[generation] = { gen: generation, year, semesters: {} };
        }

        if (!acc[generation].semesters[term]) {
            acc[generation].semesters[term] = [];
        }

        acc[generation].semesters[term].push(project);
        return acc;
    }, {});

    return Object.values(groupedByGen)
        .sort((a, b) => b.gen - a.gen)
        .map((group) => ({
            gen: group.gen,
            year: group.year,
            semesters: Object.keys(group.semesters)
                .sort()
                .reverse()
                .map((term) => ({
                    term,
                    projects: group.semesters[term]
                        .map((p): Project => ({
                            title: p.title,
                            teamName: p.team_name,
                            desc: p.desc,
                            award: p.award || "",
                            category: p.category,
                            stacks: p.stacks || [],
                            image: resolveSupabaseImageUrl(p.image, {
                                bucket: "project-thumbnail",
                            }),
                            link: p.link || "",
                        }))
                        .sort((a: Project, b: Project) =>
                            getAwardRank(a.award ?? "") - getAwardRank(b.award ?? "")
                        ),
                })),
        }));
};
