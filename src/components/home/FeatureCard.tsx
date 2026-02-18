"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    accent?: string;
    index?: number;
}

export default function FeatureCard({ icon, title, desc, accent = "text-[#8CE0F4]", index = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
        >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#8CE0F4]/5 via-transparent to-transparent pointer-events-none" />

            <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 ${accent} group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            <h3 className="text-white font-bold text-base mb-2 tracking-tight">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed break-keep">{desc}</p>
        </motion.div>
    );
}
