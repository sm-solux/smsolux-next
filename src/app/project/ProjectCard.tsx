import { AwardBadge, CategoryBadge, TechBadge } from "./Badge";
import { Code, ExternalLink, Users, ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative bg-[#16171A] border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/20"
        >
            {project.award && <AwardBadge rank={project.award} />}
            <CategoryBadge category={project.category} />

            <div className="h-40 md:h-44 w-full relative overflow-hidden bg-gray-900">
                {project.image ? (
                    <>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </>
                ) : (
                    <div
                        className={`w-full h-full bg-gradient-to-br ${project.category === "Web" ? "from-slate-800 to-gray-800" :
                            project.category === "App" ? "from-slate-800 to-gray-800" :
                                "from-gray-800 to-stone-800"
                            } relative`}
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Code className="text-white/10 w-12 h-12" />
                        </div>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium flex items-center gap-2">
                        프로젝트 보러가기 <ArrowUpRight size={14} />
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-1.5">
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-white/90 transition-colors truncate pr-2">
                        {project.title}
                    </h4>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <Users size={12} />
                    <span>{project.teamName}</span>
                </div>

                <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mb-4 md:mb-6 leading-relaxed h-8 md:h-10">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.stacks.map((stack) => (
                        <TechBadge key={stack} stack={stack} />
                    ))}
                </div>
            </div>
        </a>
    );
};