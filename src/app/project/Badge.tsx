import { Trophy } from "lucide-react";

export const TechBadge = ({ stack }: { stack: string }) => (
    <span className="text-[11px] font-medium text-white/50">
        {stack}
    </span>
);


export const AwardBadge = ({ rank }: { rank: string }) => {
    let tone = "text-white/70 bg-white/5 border-white/10";

    if (rank === "대상")
        tone = "text-white/90 bg-white/10 border-white/20";
    if (rank === "최우수상")
        tone = "text-white/80 bg-white/7 border-white/15";
    if (rank === "우수상")
        tone = "text-white/75 bg-white/5 border-white/10";

    return (
        <div
            className={`absolute top-4 right-4 z-20 text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-md border backdrop-blur-sm ${tone}`}
        >
            {rank}
        </div>
    );
};



export const CategoryBadge = ({ category }: { category: string }) => (
    <div className="absolute top-4 left-4 z-20 text-[11px] font-medium tracking-wide text-white px-2.5 py-1 rounded-md">
        {category}
    </div>
);

