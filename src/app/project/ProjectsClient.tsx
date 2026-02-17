"use client";

import { GenerationSection } from "./Section";
import { GenerationArchive } from "@/types/project";

interface ProjectsClientProps {
    initialArchives: GenerationArchive[];
}

export default function ProjectsClient({ initialArchives }: ProjectsClientProps) {
    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-10 md:px-20 pt-30 md:pt-30 pb-10 max-w-6xl">
                <div className="mb-20 md:mb-28 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-[-0.02em]">
                        Project&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            Highlights
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed break-keep">
                        솔룩스를 대표하는 수상 프로젝트들을 모았습니다.
                    </p>
                </div>

                <div className="relative border-l border-white/10 space-y-12 md:space-y-20">
                    {initialArchives.map((archive) => (
                        <GenerationSection key={archive.gen} archive={archive} />
                    ))}
                </div>
            </div>
        </main>
    );
}