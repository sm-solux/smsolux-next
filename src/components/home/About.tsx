"use client";

import React from "react";
import { motion } from "framer-motion";

const roles = [
    {
        title: "Planner",
        sub: "Why & What",
        color: "text-[#ade6d2]",
        bg: "bg-[#ade6d2]/15",
        border: "border-[#ade6d2]/20",
        iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        desc: "아이디어를 구체화하고 방향을 설계합니다.",
    },
    {
        title: "Designer",
        sub: "Look & Feel",
        color: "text-[#a6c9d8]",
        bg: "bg-[#a6c9d8]/15",
        border: "border-[#a6c9d8]/20",
        iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        desc: "사용자 경험과 시각적 완성도를 책임집니다.",
    },
    {
        title: "Developer",
        sub: "How to Build",
        color: "text-[#a1b3dd]",
        bg: "bg-[#a1b3dd]/15",
        border: "border-[#a1b3dd]/20",
        iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        desc: "아이디어를 실제로 동작하는 서비스로 구현합니다.",
    },
];

export default function About({ className }: { className?: string }) {
    return (
        <section className={`relative w-full py-24 bg-[#0F1012] border-t border-white/5 overflow-hidden ${className}`}>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ade6d2]/5 rounded-full blur-[130px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="container mx-auto px-6 md:px-8 xl:px-24 h-full flex flex-col justify-center relative z-10">
                <div className="hidden xl:flex flex-row gap-16 items-center justify-between">
                    <div className="w-5/12 relative h-[460px] flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-40 h-40 border border-white/10 rounded-full"
                            />
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-0" />
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-60" />
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent -rotate-60" />
                        </div>

                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#ade6d2]/20 flex items-center justify-center text-[#ade6d2]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 font-medium">Why & What</div>
                                <div className="text-lg font-bold text-white">Planner</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-6 left-0 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#a6c9d8]/20 flex items-center justify-center text-[#a6c9d8]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 font-medium">Look & Feel</div>
                                <div className="text-lg font-bold text-white">Designer</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [-5, 15, -5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-6 right-0 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#a1b3dd]/20 flex items-center justify-center text-[#a1b3dd]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 font-medium">How to Build</div>
                                <div className="text-lg font-bold text-white">Developer</div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-6/12 space-y-8">
                        <TextContent />
                    </div>
                </div>

                <div className="hidden md:flex xl:hidden flex-row gap-8 items-center">
                    <div className="flex-1 flex flex-col gap-3">
                        {roles.map((role, idx) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`bg-[#1A1B1E]/80 backdrop-blur-md border ${role.border} rounded-2xl p-4 flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-transform duration-300`}
                            >
                                <div className={`w-11 h-11 rounded-xl ${role.bg} flex-shrink-0 flex items-center justify-center ${role.color}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={role.iconPath} /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 tracking-wider">{role.sub}</div>
                                    <div className={`text-base font-bold ${role.color}`}>{role.title}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 오른쪽: 텍스트 */}
                    <div className="flex-1 space-y-8">
                        <TextContent />
                    </div>
                </div>

                {/* ── 모바일: 텍스트 위 + 카드 아래 세로 ── */}
                <div className="flex md:hidden flex-col gap-10">
                    <TextContent />
                    <div className="flex flex-col gap-3">
                        {roles.map((role, idx) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`bg-[#1A1B1E] border ${role.border} rounded-2xl p-5 flex items-start gap-5`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${role.bg} flex-shrink-0 flex items-center justify-center ${role.color}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={role.iconPath} /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 tracking-wider mb-0.5">{role.sub}</div>
                                    <div className={`text-lg font-bold ${role.color} mb-1`}>{role.title}</div>
                                    <div className="text-sm text-gray-400 leading-relaxed break-keep">{role.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TextContent() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
            >
                <span className="text-[#8CE0F4] text-xs font-bold tracking-widest uppercase border-b border-[#8CE0F4]/30 pb-1">
                    Who We Are
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                    Beyond Lines of Code,{" "}
                    <br />
                    We Bring{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd]">
                        Ideas to Life.
                    </span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 leading-relaxed text-base md:text-lg"
            >
                <p className="break-keep">
                    <span className="text-[#ade6d2] font-semibold">기획자</span>,
                    <span className="text-[#a6c9d8] font-semibold"> 디자이너</span>,
                    <span className="text-[#a1b3dd] font-semibold"> 개발자</span>가
                    <strong className="text-white"> 한 팀</strong>이 되어
                    <br />
                    상상 속의 아이디어를 실제 돌아가는 프로덕트로 완성합니다.
                </p>
            </motion.div>
        </div>
    );
}