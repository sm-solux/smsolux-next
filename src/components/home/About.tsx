"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About({ className }: { className?: string }) {
    return (
        <section className={`relative w-full py-24 bg-[#0F1012] border-t border-white/5 overflow-hidden ${className}`}>
            <div className="container mx-auto px-6 md:px-24 h-full flex flex-col justify-center relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center justify-between h-full">
                    <div className="lg:hidden w-full space-y-4">
                        {[
                            { title: "Planner", sub: "Why & What", color: "text-[#ade6d2]", bg: "bg-[#ade6d2]/20", iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                            { title: "Designer", sub: "Look & Feel", color: "text-[#a6c9d8]", bg: "bg-[#a6c9d8]/20", iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
                            { title: "Developer", sub: "How to Build", color: "text-[#a1b3dd]", bg: "bg-[#a1b3dd]/20", iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#1A1B1E] border border-white/10 rounded-2xl p-5 flex items-center gap-4"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 tracking-wider">{item.sub}</div>
                                    <div className="text-lg font-bold text-white">{item.title}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="hidden lg:flex w-full lg:w-5/12 relative h-[400px] md:h-[500px] flex-col items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-40 h-40 border border-white/10 rounded-full"
                            />
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-0"></div>
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-60"></div>
                            <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent -rotate-60"></div>
                        </div>

                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 md:top-10 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
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
                            className="absolute bottom-10 left-0 md:left-4 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
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
                            className="absolute bottom-10 right-0 md:right-4 bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300"
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

                    <div className="w-full lg:w-6/12 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <span className="text-primary text-sm font-bold tracking-widest uppercase border-b border-primary/30 pb-1">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Beyond Lines of Code, <br />
                                We Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd]">Ideas to Life.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-400 leading-relaxed text-base md:text-lg space-y-6"
                        >
                            <p>
                                <span className="text-[#ade6d2] font-semibold">기획자</span>,
                                <span className="text-[#a6c9d8] font-semibold"> 디자이너</span>,
                                <span className="text-[#a1b3dd] font-semibold"> 개발자</span>가
                                <strong className="text-white"> 한 팀</strong>이 되어<br />
                                상상 속의 아이디어를 실제 돌아가는 프로덕트로 완성합니다.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 md:gap-8"
                        >
                            <div className="border-r border-white/10">
                                <span className="block text-2xl font-bold text-white">31st</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Generation</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">500+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Alumni Network</span>
                            </div>

                            <div>
                                <span className="block text-2xl font-bold text-white">100+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Projects</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}