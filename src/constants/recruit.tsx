import { TrendingUp, Users, ShieldCheck } from "lucide-react";

export const coreValues = [
    {
        title: "성장",
        desc: "지속적이고 꾸준한 노력을 투자하며 팀과 함께 발전하는 성장가능성을 지닌 분",
        icon: <TrendingUp size={40} className="text-[#8CE0F4]" />,
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "연대",
        desc: "프로젝트 중 발생할 수 있는 여러 갈등 상황에서 각자의 입장을 공감, 정리하여 조화로운 해결책을 모색할 수 있는 분",
        icon: <Users size={40} className="text-[#A1B3DD]" />,
        gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
        title: "책임",
        desc: "솔룩스에 높은 우선순위를 두며 각종 행사와 활동에 적극적으로 참여하고 프로젝트를 완주할 수 있는 분",
        icon: <ShieldCheck size={40} className="text-[#ADE6D2]" />,
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
];
