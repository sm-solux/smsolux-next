"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutVisual() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 border border-white/10 rounded-full"
            />
            {[0, 60, -60].map((deg) => (
                <div
                    key={deg}
                    className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                    style={{ transform: `rotate(${deg}deg)` }}
                />
            ))}
        </div>
    );
}
