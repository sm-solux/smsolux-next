"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutText() {
    return (
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
            >
                <span className="inline-block text-[#8CE0F4] text-xs font-bold tracking-widest uppercase border-b border-[#8CE0F4]/30 pb-1">
                    Who We Are
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight break-keep">
                    Beyond Lines of Code,
                    <br />
                    We Bring{" "}
                    <span className="text-transparent bg-clip-text bg-primary">
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
