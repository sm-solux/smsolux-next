import { Trophy } from "lucide-react";

export const TechBadge = ({ stack }: { stack: string }) => (
    <span className="text-[11px] font-medium text-white/50">
        {stack}
    </span>
);


export const AwardBadge = ({ rank }: { rank: string }) => {
    return (
        <div
            className="absolute top-4 right-4 z-20 text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-md border backdrop-blur-sm bg-black/60 border-white/30"
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

