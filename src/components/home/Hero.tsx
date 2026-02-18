"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { TextBadge } from "@/components/common/TextBadge";
import { motion } from "framer-motion";

export default function Hero({ className }: { className?: string }) {
    return (
        <section className={`relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F1012] ${className}`}>
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <Sparkles
                            count={200}
                            scale={[10, 10, 10]}
                            size={2}
                            speed={0.4}
                            opacity={0.6}
                            color="#8CE0F4"
                        />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                    </Suspense>
                </Canvas>
            </div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <TextBadge text="Sookmyung Programming Club" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-3"
                >
                    <span
                        className="block text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
                        style={{
                            textShadow: "0 0 40px rgba(140, 224, 244, 0.4)"
                        }}
                    >
                        SOLUX
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl flex flex-col items-center gap-6"
                >
                    <p className="text-xl md:text-2xl text-white font-bold tracking-tight break-keep bg-clip-text bg-gradient-to-br from-white via-blue-50 to-blue-200">
                        숙명여자대학교 유일 중앙 프로그래밍 동아리
                    </p>

                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <p className="text-lg text-gray-400 font-semilight leading-relaxed break-keep">
                        기획, 디자인, 개발이 <span className="text-white font-medium">한 팀</span>으로 만나
                        <br />
                        아이디어를 실제 서비스로 만들어가는 곳.
                    </p>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-500/50 rounded-full flex justify-center p-1 backdrop-blur-sm">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 bg-primary rounded-full"
                    />
                </div>
            </motion.div>

        </section>
    );
}