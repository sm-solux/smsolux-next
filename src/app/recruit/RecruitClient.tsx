"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Faq } from "@/types/recruit";

const coreValues = [
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

interface RecruitClientProps {
    initialFaqs: Faq[];
}

export default function RecruitClient({ initialFaqs }: RecruitClientProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 md:pt-32 pb-20 max-w-6xl">
                <div className="mb-24 space-y-6 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
                    >
                        Join the{" "}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ADE6D2] via-[#A6C9D8] to-[#A1B3DD]">
                            Movement
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed break-keep mx-auto md:mx-0"
                    >
                        상상을 현실로 만드는 여정에 함께하세요.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-36">
                    {coreValues.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm border border-white/10">
                                {value.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                                {value.title}
                            </h3>

                            <p className="text-white/50 leading-relaxed text-sm">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-semibold text-center mb-10"
                    >
                        자주 묻는 질문
                    </motion.h2>

                    <div className="space-y-4">
                        {initialFaqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.04 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-white/20">
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full flex justify-between items-center text-left group"
                                >
                                    <span className="text-base font-medium text-white/90 pr-6 leading-snug">
                                        {faq.question}
                                    </span>

                                    {openIndex === idx ? (
                                        <ChevronUp className="text-white/50 flex-shrink-0 mt-1 transition-colors" />
                                    ) : (
                                        <ChevronDown className="text-white/30 flex-shrink-0 mt-1 transition-colors group-hover:text-white/50" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx
                                        ? "max-h-40 opacity-100 mt-4"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >

                                    <p className="text-white/50 leading-relaxed text-sm">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
}
