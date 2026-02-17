"use client";

import React from "react";
import { Activity } from "@/types/activity";
import { Rocket, Presentation, Trophy, BookOpen, Users, PartyPopper, CalendarDays } from "lucide-react";

const getActivityStyle = (title: string) => {
    if (title.includes("프로젝트")) return {
        icon: <Rocket className="w-6 h-6" />,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    };
    if (title.includes("기획") || title.includes("아이디어")) return {
        icon: <Presentation className="w-6 h-6" />,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    };
    if (title.includes("최종") || title.includes("발표")) return {
        icon: <Trophy className="w-6 h-6" />,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    };
    if (title.includes("스터디")) return {
        icon: <BookOpen className="w-6 h-6" />,
        color: "text-green-400",
        bg: "bg-green-400/10"
    };
    if (title.includes("멘토링") || title.includes("특강")) return {
        icon: <Users className="w-6 h-6" />,
        color: "text-pink-400",
        bg: "bg-pink-400/10"
    };
    if (title.includes("네트워킹") || title.includes("MT") || title.includes("OT")) return {
        icon: <PartyPopper className="w-6 h-6" />,
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    };

    return {
        icon: <CalendarDays className="w-6 h-6" />,
        color: "text-gray-400",
        bg: "bg-gray-400/10"
    };
};

interface ActivitiesProps {
    className?: string;
    activities: Activity[];
}

export default function Activities({ className, activities = [] }: ActivitiesProps) {
    return (
        <section className={`relative w-full py-24 bg-[#0F1012] border-t border-white/5 overflow-hidden ${className}`}>
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto px-6 md:px-24 h-full flex flex-col justify-center relative z-10">
                <div className="mb-16 md:mb-20 text-center md:text-left">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase border-b border-primary/30 pb-1">Our Activities</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                        Grow Together, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">Create Together.</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
                        기획부터 디자인, 개발까지.<br className="md:hidden" />
                        우리는 각자의 전문성을 모아 <span className="text-white font-semibold">하나의 팀</span>으로 움직입니다.<br />
                        상상을 현실로 만드는 모든 과정을 함께 경험하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => {
                        const style = getActivityStyle(activity.title);
                        return (
                            <div
                                key={activity.id}
                                className="group relative bg-[#1A1B1E]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none`} />

                                <div className={`w-12 h-12 rounded-xl ${style.bg} ${style.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {style.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {activity.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}