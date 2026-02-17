import { Trophy } from "lucide-react";

export const TechBadge = ({ stack }: { stack: string }) => (
    <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-white/70 bg-white/5 border border-white/10 rounded-md">
        {stack}
    </span>
);

export const AwardBadge = ({ rank }: { rank: string }) => {
    let color = "bg-gray-500";
    if (rank === "대상") color = "bg-gradient-to-r from-yellow-400 to-orange-500";
    if (rank === "최우수상") color = "bg-gradient-to-r from-slate-300 to-slate-400";
    if (rank === "우수상") color = "bg-gradient-to-r from-amber-600 to-amber-700";

    return (
        <div className={`absolute top-4 right-4 ${color} text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10`}>
            <Trophy size={12} className="fill-black/20 stroke-black" />
            {rank}
        </div>
    );
};

export const CategoryBadge = ({ category }: { category: string }) => (
    <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-md border border-[#8CE0F4]/30 text-[#8CE0F4] text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
        {category}
    </div>
);