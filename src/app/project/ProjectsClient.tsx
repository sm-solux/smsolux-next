"use client";

import { GenerationSection } from "./Section";
import { GenerationArchive } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectsClientProps {
    initialArchives: GenerationArchive[];
}

export default function ProjectsClient({ initialArchives }: ProjectsClientProps) {
    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-6 md:px-10 pt-32 pb-20 max-w-7xl">
                <div className="mb-24 space-y-6 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight"
                    >
                        Made in{" "}
                        <span className="text-transparent bg-clip-text bg-primary">
                            SOLUX
                        </span>
                    </motion.h1>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed break-keep mx-auto md:mx-0"
                        >
                            솔룩스의 한 학기를 마무리하는 최종 발표회에서 <br className="hidden lg:block" /> 가장 빛났던 아이디어들을 소개합니다.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex justify-center md:justify-start pt-2 lg:pt-0"
                        >
                            <Link
                                href="https://solux.tistory.com/category"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 text-white/70 hover:text-[#8CE0F4] text-xs md:text-sm font-medium transition-colors duration-200"
                            >
                                더 많은 기록 보기
                                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
                            </Link>
                        </motion.div>
                    </div>

                    <div>

                    </div>
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