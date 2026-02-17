export type Project = {
    title: string;
    teamName: string;
    desc: string;
    award?: string;
    category: "Web" | "App" | "Game" | "Data" | "Web&Data";
    stacks: string[];
    image?: string;
    link: string;
};

export type SemesterInfo = {
    term: string;
    projects: Project[];
};

export type GenerationArchive = {
    gen: number;
    year: number;
    semesters: SemesterInfo[];
};
