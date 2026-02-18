"use client";

import React from "react";
import { FooterLink } from "@/types/layout";
import { LucideIcon, Mail, Instagram, Github, Linkedin, MessageCircle, Link as LinkIcon } from "lucide-react";

const FooterStyles: { [key: string]: { icon: LucideIcon, hover: string } } = {
    email: { icon: Mail, hover: "hover:text-white" },
    instagram: { icon: Instagram, hover: "hover:text-pink-500" },
    kakao: { icon: MessageCircle, hover: "hover:text-yellow-400" },
    github: { icon: Github, hover: "hover:text-white" },
    linkedin: { icon: Linkedin, hover: "hover:text-blue-500" }
};

interface FooterProps {
    initialLinks?: FooterLink[];
}

export default function Footer({ initialLinks = [] }: FooterProps) {
    return (
        <footer className="bg-[#0F1012] w-full border-t border-white/5 py-8">
            <div className="container mx-auto px-6 md:px-10 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-gray-500 text-xs">
                        &copy; 2026 SOLUX. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Sookmyung Women's University Programming Club
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {initialLinks.map((link) => {
                        const style = FooterStyles[link.key] || { icon: LinkIcon, hover: "hover:text-primary" };
                        const Icon = style.icon;

                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                target={link.url.startsWith('mailto') ? undefined : "_blank"}
                                rel={link.url.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                className={`text-gray-400 transition-all duration-300 ${style.hover} hover:-translate-y-1`}
                                aria-label={link.label}
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>

            </div>
        </footer>
    );
}
