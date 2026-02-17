"use client";

import { GenerationSection } from "./Section";
import { GenerationArchive } from "@/types/project";
import { motion } from "framer-motion";

interface ProjectsClientProps {
    initialArchives: GenerationArchive[];
}

export default function ProjectsClient({ initialArchives }: ProjectsClientProps) {
    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-6 md:px-20 pt-32 pb-20 max-w-6xl">
                <div className="mb-24 space-y-6 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                        Project&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd] drop-shadow-[0_0_30px_rgba(140,224,244,0.3)]">
                            Highlights
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-md md:text-lg max-w-2xl leading-relaxed break-keep mx-auto md:mx-0"
                    >
                        솔룩스를 대표하는 수상 프로젝트들을 확인해보세요.
                    </motion.p>
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