export interface Role {
    title: string;
    sub: string;
    color: string;
    bg: string;
    border: string;
    iconPath: string;
    desc: string;
    yOffset?: number[];
    delay?: number;
    position?: string;
}

export const roles: Role[] = [
    {
        title: "Planner",
        sub: "Why & What",
        color: "text-[#ade6d2]",
        bg: "bg-[#ade6d2]/15",
        border: "border-[#ade6d2]/20",
        iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        desc: "아이디어를 구체화하고 방향을 설계합니다.",
        yOffset: [-10, 10, -10],
        delay: 0,
        position: "absolute top-6 left-1/2 -translate-x-1/2",
    },
    {
        title: "Designer",
        sub: "Look & Feel",
        color: "text-[#a6c9d8]",
        bg: "bg-[#a6c9d8]/15",
        border: "border-[#a6c9d8]/20",
        iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        desc: "사용자 경험과 시각적 완성도를 책임집니다.",
        yOffset: [10, -10, 10],
        delay: 1,
        position: "absolute bottom-6 left-0",
    },
    {
        title: "Developer",
        sub: "How to Build",
        color: "text-[#a1b3dd]",
        bg: "bg-[#a1b3dd]/15",
        border: "border-[#a1b3dd]/20",
        iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        desc: "아이디어를 실제로 동작하는 서비스로 구현합니다.",
        yOffset: [-5, 15, -5],
        delay: 2,
        position: "absolute bottom-6 right-0",
    },
];
