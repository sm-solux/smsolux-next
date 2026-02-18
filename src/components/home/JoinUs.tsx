"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinUs({ className }: { className?: string }) {
    return (
        <section className={`relative w-full py-20 bg-[#0F1012] border-t border-white/5 overflow-hidden flex items-center justify-center ${className}`}>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
                >
                    Ready to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        Make it Real?
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    상상을 현실로 —<br />
                    아이디어가 <strong className="text-white">기획</strong>을 만나<br />
                    <strong className="text-white">디자인</strong>과 <strong className="text-white">코드</strong>로 완성되는 곳.<br /><br />
                    <span className="font-medium">더 큰 가능성을 연결하는 솔룩스에서, 최고의 팀을 만나보세요.</span>
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="/recruit">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            className="group relative px-8 py-3 bg-white text-black text-md md:text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                지금 지원하기
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </span>
                        </motion.button>
                    </Link>

                    <Link href="/project">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            className="px-8 py-3 bg-transparent border border-white/20 text-white text-md md:text-lg font-medium rounded-full transition-all hover:cursor-pointer"
                        >
                            프로젝트 구경하기
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    );
}