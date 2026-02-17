import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

import { GenerationArchive, SemesterInfo } from "@/types/project";

export const SemesterSection = ({ semester }: { semester: SemesterInfo }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {semester.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
        </div>
    );
};

export const GenerationSection = ({ archive }: { archive: GenerationArchive }) => {
    console.log(archive)
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-6 md:pl-16"
        >
            <div className="absolute -left-[5px] top-2.5 w-[9px] h-[9px] rounded-full bg-[#8CE0F4] shadow-[0_0_10px_#8CE0F4]" />

            <div className="flex flex-row items-baseline gap-3 mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white flex items-baseline gap-2">
                    {archive.gen}기
                </h2>
                <span className="text-gray-600 font-mono text-xs md:text-sm">{archive.year}</span>
            </div>

            <div className="space-y-8 md:space-y-12">

                <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-4 md:mb-6 flex items-center gap-2">
                    <Calendar size={16} className="text-[#8CE0F4]" />
                    {archive.semesters[0].term}
                </h3>
                {archive.semesters.map((semester, idx) => (
                    <SemesterSection key={idx} semester={semester} />
                ))}
            </div>
        </motion.div>
    );
};