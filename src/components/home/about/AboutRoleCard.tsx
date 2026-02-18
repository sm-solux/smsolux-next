"use client";

import React from "react";
import { motion } from "framer-motion";
import { Role } from "./constants";

interface RoleCardProps {
    role: Role;
    delay?: number;
    isSmall?: boolean;
}

export function FloatingRoleCard({ role }: { role: Role }) {
    return (
        <motion.div
            animate={{ y: role.yOffset }}
            transition={{ duration: 6 + (role.delay || 0), repeat: Infinity, ease: "easeInOut", delay: role.delay }}
            className={`${role.position} bg-[#1A1B1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform duration-300 z-10`}
        >
            <RoleIcon role={role} size="large" />
            <div className="whitespace-nowrap">
                <div className="text-sm text-gray-400 font-medium">{role.sub}</div>
                <div className="text-lg font-bold text-white">{role.title}</div>
            </div>
        </motion.div>
    );
}

export function StaticRoleCard({ role, isSmall, delay }: RoleCardProps) {
    if (isSmall) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className={`bg-[#1A1B1E]/80 backdrop-blur-md border ${role.border} rounded-2xl p-4 flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-transform duration-300`}
            >
                <RoleIcon role={role} size="small" />
                <div className="whitespace-nowrap">
                    <div className="text-xs text-gray-500 tracking-wider">{role.sub}</div>
                    <div className={`text-base font-bold ${role.color}`}>{role.title}</div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-[#1A1B1E] border ${role.border} rounded-2xl p-5 flex items-start gap-5`}
        >
            <RoleIcon role={role} size="large" />
            <div>
                <div className="text-xs text-gray-500 tracking-wider mb-0.5">{role.sub}</div>
                <div className={`text-lg font-bold ${role.color} mb-1`}>{role.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed break-keep">{role.desc}</div>
            </div>
        </motion.div>
    );
}

function RoleIcon({ role, size }: { role: Role, size: 'small' | 'large' }) {
    const iconSize = size === 'small' ? 'w-5 h-5' : 'w-6 h-6';
    const containerSize = size === 'small' ? 'w-11 h-11' : 'w-12 h-12';

    return (
        <div className={`${containerSize} rounded-xl ${role.bg} flex-shrink-0 flex items-center justify-center ${role.color}`}>
            <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={role.iconPath} />
            </svg>
        </div>
    );
}
