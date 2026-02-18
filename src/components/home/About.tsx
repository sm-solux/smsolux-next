"use client";

import React from "react";
import { roles } from "./about/constants";
import { FloatingRoleCard, StaticRoleCard } from "./about/AboutRoleCard";
import { AboutVisual } from "./about/AboutVisual";
import { AboutText } from "./about/AboutText";

export default function About({ className }: { className?: string }) {
    return (
        <section className={`relative w-full py-24 bg-[#0F1012] overflow-hidden ${className}`}>
            <div className="container mx-auto max-w-7xl px-6 md:px-10 h-full flex flex-col justify-center relative z-10">

                {/* Desktop Layout (xl) */}
                <div className="hidden xl:flex flex-row gap-20 items-center justify-between">
                    <div className="flex-1 relative h-[460px] flex flex-col items-center justify-center min-w-[400px]">
                        <AboutVisual />
                        {roles.map((role) => (
                            <FloatingRoleCard key={role.title} role={role} />
                        ))}
                    </div>

                    <div className="shrink-0 flex flex-col items-end text-right max-w-2xl">
                        <AboutText />
                    </div>
                </div>

                <div className="hidden md:flex xl:hidden flex-row gap-12 items-center justify-between">
                    <div className="w-1/2 flex flex-col gap-4">
                        {roles.map((role, idx) => (
                            <StaticRoleCard key={role.title} role={role} isSmall delay={idx * 0.1} />
                        ))}
                    </div>
                    <div className="w-1/2 flex flex-col items-end text-right">
                        <AboutText />
                    </div>
                </div>

                <div className="flex md:hidden flex-col gap-10">
                    <div className="text-right">
                        <AboutText />
                    </div>
                    <div className="flex flex-col gap-3">
                        {roles.map((role, idx) => (
                            <StaticRoleCard key={role.title} role={role} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}