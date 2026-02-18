"use client";

import React from "react";
import { motion } from "framer-motion";
import { Review as ReviewType } from "@/types/home";
import { Quote } from "lucide-react";

interface ReviewPageProps {
    className?: string;
    initialReviews?: ReviewType[];
}

export default function Review({ className, initialReviews = [] }: ReviewPageProps) {
    const duplicatedReviews = [...initialReviews, ...initialReviews, ...initialReviews, ...initialReviews];

    return (
        <section className={`relative w-full min-h-screen py-24 bg-[#0F1012] overflow-hidden flex flex-col justify-center ${className}`}>
            <div className="container mx-auto max-w-7xl px-6 md:px-10 relative z-10 mb-12 flex-shrink-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left space-y-4"
                >
                    <span className="inline-block text-[#8CE0F4] text-xs font-bold tracking-widest uppercase border-b border-[#8CE0F4]/30 pb-1">
                        Where Growth Begins
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.15] tracking-tight">
                        솔룩스와 함께하며 발견한
                        <br />
                        <span className="text-transparent bg-clip-text bg-primary">
                            가능성의 기록
                        </span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed text-base md:text-lg break-keep">
                        솔룩스에서 시작된 도전은 <br className="md:hidden" />
                        <strong className="text-white/80">송이들의 성장</strong>으로 이어집니다.
                    </p>
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
                            className="flex-shrink-0 w-[280px] md:w-[350px] p-6 md:p-8 rounded-3xl bg-[#141518] border border-white/10 hover:border-[#8CE0F4]/30 hover:-translate-y-2 transition-all duration-500 relative group" >
                            <Quote className="absolute top-6 right-6 w-10 h-10 group-hover:rotate-6 text-[#8CE0F4]/20 group-hover:text-[#8CE0F4]/50 transition-all duration-500" />

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 break-keep min-h-[80px]">
                                {review.content}
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
        </section>
    );
}