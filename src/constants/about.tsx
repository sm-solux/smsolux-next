import { FolderGit2, BookOpen, Presentation, Users } from "lucide-react";

export const activities = [
    {
        icon: <FolderGit2 size={20} />,
        key: "project",
        title: "프로젝트",
        desc: "학기 단위로 팀을 구성하여, 매주 스터디와 회의를 통해 프로젝트를 진행합니다. 학기 말에는 프로젝트 발표회를 개최합니다.",
        accent: "text-[#8CE0F4]",
        accentBg: "bg-[#8CE0F4]/10",
        accentBorder: "border-[#8CE0F4]/20",
    },
    {
        icon: <Users size={20} />,
        key: "networking",
        title: "스타터",
        desc: "스타터는 웹 개발 입문자를 위한 과정입니다. 기초 학습부터 실전 협업 프로젝트까지 단계적으로 경험하며 프로젝트에 소프트랜딩할 수 있도록 설계된 솔룩스만의 차별화된 비기너 트랙입니다.",
        accent: "text-[#a1b3dd]",
        accentBg: "bg-[#a1b3dd]/10",
        accentBorder: "border-[#a1b3dd]/20",
    },
    {
        icon: <BookOpen size={20} />,
        key: "study",
        title: "발표회",
        desc: "매 프로젝트의 중후반부에는 각각 기획발표회와 최종발표회를 진행합니다. 질의응답과 피드백을 나누며 프로젝트의 방향을 다듬고, 완성도를 평가합니다.",
        accent: "text-[#ade6d2]",
        accentBg: "bg-[#ade6d2]/10",
        accentBorder: "border-[#ade6d2]/20",
    },
    {
        icon: <Presentation size={20} />,
        key: "seminar",
        title: "세미나",
        desc: "파트별 필수 세미나부터 선택 세미나까지. 협업 툴부터 다양한 IT 분야까지 구름에듀 플랫폼에서 비대면으로 진행됩니다.",
        accent: "text-[#a6c9d8]",
        accentBg: "bg-[#a6c9d8]/10",
        accentBorder: "border-[#a6c9d8]/20",
    },
];

export const stats = [
    { value: "31st", label: "Generation" },
    { value: "500+", label: "Alumni" },
    { value: "100+", label: "Projects" },
];

export const reviews = [
    {
        name: "김**",
        gen: "29기",
        part: "Planner",
        content: "팀장의 책임과 역량이 프로젝트에 미치는 영향을 깨달았어요.",
    },
    {
        name: "이**",
        gen: "29기",
        part: "Planner",
        content: "게임 기획자로서의 확신을 얻었어요.",
    },
    {
        name: "이**",
        gen: "29기",
        part: "Designer",
        content: "기획과 UX 플로우에 대한 여러 가지 의견을 덧붙이며, 완전히 다른 사람들의 생각을 들어보고 협업할 수 있는 기회를 얻었어요.",
    },
    {
        name: "김**",
        gen: "29기",
        part: "Frontend Developer",
        content: "서비스 개발에 흥미가 있는 저학년이나 프로젝트 경험이 필요한 고학년에게 좋은 기회를 제공하는 동아리라고 생각해요.",
    },
    {
        name: "한**",
        gen: "29기",
        part: "Backend Developer",
        content: "열정적인 부원분들에게 에너지와 동기부여를 받아, 시도하고 싶은 걸 실행으로 옮기기에 아주 좋은 동아리예요.",
    },
    {
        name: "최**",
        gen: "29기",
        part: "Game Developer",
        content: "일년 간 2번의 프로젝트를 진행하며 더욱 빨리 성장할 수 있었어요.",
    },
    {
        name: "백**",
        gen: "30기",
        part: "Backend Developer",
        content: "여러 세미나를 통해 프로젝트에서 더 체계적이고, 명확한 개발을 진행할 수 있었어요.",
    },
    {
        name: "최**",
        gen: "30기",
        part: "Planner",
        content: "숙명인과의 유대감으로 똘똘 뭉친 솔룩스에서, 팔로워십을 갖춘 리더가 될 수 있게 변화했어요.",
    },
    {
        name: "송**",
        gen: "30기",
        part: "Frontend Developer",
        content: "다양한 언어를 도구삼아 프로젝트를 모두 성공적으로 마무리했다는 자신감을 얻었어요.",
    },
    {
        name: "문**",
        gen: "30기",
        part: "Backend Developer",
        content: "개발 시작 전, 고려 사항을 미리 파악하고 개발하는 것의 중요성을 깨달았어요.",
    },
    {
        name: "홍**",
        gen: "30기",
        part: "Backend Developer",
        content: "팀원들에게 생각을 공유하고 의견을 경청하는 과정에서 방식과 태도를 배웠어요.",
    },
    {
        name: "박**",
        gen: "30기",
        part: "Game Developer",
        content: "솔룩스에서 두 번의 게임 프로젝트를 진행하며 게임 개발에 대한 흥미를 느꼈어요.",
    },
    {
        name: "박**",
        gen: "30기",
        part: "Planner",
        content: "기획자와 디자이너의 역할이 명확하게 구분되어 있는 솔룩스에서, 체계적인 협업을 경험하며 많은 것들을 배웠어요.",
    },
    {
        name: "김**",
        gen: "30기",
        part: "Frontend Developer",
        content: "다양한 프레임워크로 프로젝트를 진행하며 함께 개발하는 즐거움을 배웠어요.",
    },
];
