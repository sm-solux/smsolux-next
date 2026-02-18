import { FolderGit2, BookOpen, Presentation, Users } from "lucide-react";

export const activities = [
    {
        icon: <FolderGit2 size={20} />,
        key: "project",
        title: "IT 프로젝트",
        desc: "학기 단위로 팀을 꾸려 매주 회의하며 프로젝트를 진행하고, 방학 말 발표회를 개최합니다.",
        accent: "text-[#8CE0F4]",
        accentBg: "bg-[#8CE0F4]/10",
        accentBorder: "border-[#8CE0F4]/20",
    },
    {
        icon: <BookOpen size={20} />,
        key: "study",
        title: "자유 스터디",
        desc: "누구든 원하는 스터디를 개설할 수 있으며, 필요 시 인터넷 강의를 일부 지원합니다.",
        accent: "text-[#ade6d2]",
        accentBg: "bg-[#ade6d2]/10",
        accentBorder: "border-[#ade6d2]/20",
    },
    {
        icon: <Presentation size={20} />,
        key: "seminar",
        title: "분야별 세미나",
        desc: "학기 당 3회, 협업 툴부터 다양한 IT 분야까지 구름에듀 플랫폼에서 비대면으로 진행됩니다.",
        accent: "text-[#a6c9d8]",
        accentBg: "bg-[#a6c9d8]/10",
        accentBorder: "border-[#a6c9d8]/20",
    },
    {
        icon: <Users size={20} />,
        key: "networking",
        title: "OB·부원 네트워킹",
        desc: "OB 멘토링, 연합 해커톤, 초청 강의 등 기수별 행사로 선후배 간 네트워킹을 이어갑니다.",
        accent: "text-[#a1b3dd]",
        accentBg: "bg-[#a1b3dd]/10",
        accentBorder: "border-[#a1b3dd]/20",
    },
];

export const stats = [
    { value: "31st", label: "Generation" },
    { value: "500+", label: "Alumni" },
    { value: "100+", label: "Projects" },
];