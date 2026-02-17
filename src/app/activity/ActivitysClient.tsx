"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    Presentation,
    BookOpen,
    MonitorPlay,
    PartyPopper,
    CalendarDays,
    Star
} from "lucide-react";
import { Activity } from "@/types/activity";

interface ActivitiesClientProps {
    initialActivities: Activity[];
}

const ActivityIcon = ({ title }: { title: string }) => {
    if (title.includes("프로젝트")) return <Rocket size={28} className="text-[#8CE0F4]" />;
    if (title.includes("스타터")) return <Star size={28} className="text-[#ADE6D2]" />;
    if (title.includes("발표회")) return <Presentation size={28} className="text-[#A1B3DD]" />;
    if (title.includes("스터디")) return <BookOpen size={28} className="text-[#A6C9D8]" />;
    if (title.includes("강의")) return <MonitorPlay size={28} className="text-[#8CE0F4]/80" />;
    if (title.includes("오프라인")) return <PartyPopper size={28} className="text-[#ADE6D2]/80" />;
    return <CalendarDays size={28} className="text-white/40" />;
};

export default function ActivitiesClient({ initialActivities }: ActivitiesClientProps) {
    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20 max-w-6xl">
                <div className="mb-24 space-y-6 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight items-center"
                    >
                        What We&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd]">
                            Do
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed break-keep mx-auto md:mx-0"
                    >
                        솔룩스의 1년은 몰입과 성장의 시간으로 가득 차 있습니다.
                    </motion.p>
                </div>

                <div className="relative space-y-24 md:space-y-32">
                    <div className="hidden md:block absolute left-[40px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    {initialActivities.map((activity, idx) => (
                        <motion.div
                            key={activity.id || idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative flex flex-col md:flex-row gap-8 md:gap-12"
                        >
                            <div className="flex-shrink-0 relative z-10">
                                <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-[#1A1C20] border border-white/10 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)]">
                                    <div className="scale-75 md:scale-125">
                                        <ActivityIcon title={activity.title} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-grow pt-2">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    {activity.title}
                                </h3>

                                <div className="text-gray-400 leading-relaxed mb-8 text-base md:text-md whitespace-pre-line break-keep">
                                    {activity.description}
                                </div>

                                {activity.details && activity.details.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {activity.details.map((detail, detailIdx) => (
                                            <div
                                                key={detailIdx}
                                                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                                            >
                                                <h4 className="text-[#8CE0F4] font-bold text-md mb-2">
                                                    {detail.title}
                                                </h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {detail.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
