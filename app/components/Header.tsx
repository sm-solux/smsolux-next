"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "PROJECT", href: "/project" },
        { name: "ACTIVITY", href: "/activity" },
        { name: "RECRUIT", href: "/recruit" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${isScrolled
                ? "bg-background/80 backdrop-blur-md py-4"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between flex-nowrap">
                <Link href="/" className="group flex items-center gap-2 shrink-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold text-gray-300 hover:text-primary hover:scale-105 transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden text-white p-2 hover:text-primary transition-colors shrink-0"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute mx-auto px-4 md:px-8 top-16 left-0 w-full bg-[#0F1012] border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col py-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-4 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all border-l-2 border-transparent hover:border-[#8CE0F4]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}