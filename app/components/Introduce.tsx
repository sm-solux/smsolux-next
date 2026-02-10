"use client";

import React from "react";

export default function Introduce({ isSummary = false, className }: { isSummary?: boolean; className?: string }) {
    return (
        <section className={`relative w-full py-24 bg-[#0F1012] border-t border-white/5 overflow-hidden ${isSummary ? "min-h-screen flex flex-col justify-center" : "min-h-screen"} ${className}`}>

            {/* 배경 데코레이션 (은은한 빛) */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-24 h-full flex flex-col justify-center relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center justify-between h-full">

                    {/* Left: Stats & Visuals (비대칭 그리드 레이아웃) */}
                    <div className="w-full lg:w-5/12">
                        <div className="grid grid-cols-2 gap-4">
                            {/* 큰 카드: Alumni */}
                            <div className="col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all duration-500">
                                <div className="w-16 h-16 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <span className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">500+</span>
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Alumni Network</span>
                            </div>

                            {/* 작은 카드 1: Generation */}
                            <div className="bg-[#1A1B1E] border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center hover:-translate-y-1 transition-transform duration-300">
                                <span className="text-3xl font-bold text-primary mb-1">31st</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Generation</span>
                            </div>

                            {/* 작은 카드 2: Projects */}
                            <div className="bg-[#1A1B1E] border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center hover:-translate-y-1 transition-transform duration-300 delay-75">
                                <span className="text-3xl font-bold text-purple-400 mb-1">100+</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Projects</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase border-b border-primary/30 pb-1">About SOLUX</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                From <span className="text-gray-500 line-through decoration-primary/50">Linux</span> to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ade6d2] via-[#a6c9d8] to-[#a1b3dd]">Limitless Possibilities.</span>
                            </h2>
                        </div>

                        {/* Text Description */}
                        <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                            <p>
                                <strong className="text-white">SOLUX</strong>는 숙명여대 유일의 중앙 코딩 동아리로,
                                소프트웨어학부의 리눅스 학회에서 출발해 이제는 웹, 인공지능, 빅데이터 등 <strong className="text-white">IT 전 분야를 아우르는 혁신의 장</strong>이 되었습니다.
                            </p>
                            <p>
                                단순히 코드를 작성하는 것을 넘어, 서로의 지식을 공유하고 함께 성장하는 문화를 만듭니다.
                                전공자와 비전공자의 경계를 허물고, 여러분의 상상을 실행 가능한 기술로 구현하세요.
                            </p>
                        </div>

                        {/* Terminal Code Block Design */}
                        <div className="w-full bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden mt-6 group">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
                                <div className="flex gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                                </div>
                                <div className="ml-4 text-xs text-gray-500 font-mono">bash — 80x24</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm md:text-base space-y-2">
                                <div className="flex">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-300">git commit -m <span className="text-yellow-300">"Be the Change"</span></span>
                                </div>
                                <div className="text-gray-500 pl-4 text-xs md:text-sm">
                                    [main 2f8b3d1] Be the Change<br />
                                    &nbsp;1 file changed, 100+ contributors added
                                </div>

                                <div className="flex pt-2">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-300 animate-pulse">_</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}