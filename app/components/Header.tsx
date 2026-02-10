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
        { name: "Projects", href: "/projects" },
        { name: "Activity", href: "/activity" },
        { name: "Recruit", href: "/recruit" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md py-4"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-12 flex items-center justify-between flex-nowrap">
                <Link href="/" className="group flex items-center gap-2 shrink-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary hover:scale-105 transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <button className="px-6 py-2 rounded-full bg-primary text-background text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(140,224,244,0.3)]">
                        Join Us
                    </button>
                </nav>

                <button
                    className="md:hidden text-white p-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-gray-200 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-white/10" />
                    <button className="w-full py-4 rounded-xl bg-primary text-background font-bold text-lg hover:brightness-110 transition-all">
                        Join Us
                    </button>
                </div>
            )}
        </header>
    );
}