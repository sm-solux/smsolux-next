"use client";

import React from "react";
import { motion } from "framer-motion";
import { reviews } from "@/constants/about";
import { Quote } from "lucide-react";

export default function Review({ className }: { className?: string }) {
    const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

    return (
        <section className={`relative w-full min-h-screen py-24 bg-[#0F1012] border-t border-white/5 overflow-hidden flex flex-col justify-center ${className}`}>
            <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10 mb-12 flex-shrink-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <span className="text-[#8CE0F4] text-xs font-bold tracking-widest uppercase border-b border-[#8CE0F4]/30 pb-1">
                        SOLUX Reviews
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                        솔룩스와 함께한 <br />
                        부원들의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd]">진솔한 이야기</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 px-3 w-max"
                    animate={{
                        x: "-50%"
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 300,
                        ease: "linear",
                    }}
                >
                    {duplicatedReviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[280px] md:w-[350px] p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#8CE0F4]/10 group-hover:text-[#8CE0F4]/20 transition-colors" />

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 break-keep min-h-[80px]">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ade6d2]/20 to-[#a1b3dd]/20 border border-white/10 flex items-center justify-center text-xs font-bold text-white/70">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-bold text-sm md:text-base">{review.name}</span>
                                        <span className="text-xs text-gray-500">{review.gen}</span>
                                    </div>
                                    <div className="text-[#8CE0F4] text-xs md:text-sm font-medium">{review.part}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 배경 데코레이션 */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#ade6d2]/5 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#a1b3dd]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
        </section>
    );
}