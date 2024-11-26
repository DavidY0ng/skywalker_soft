"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Navigation links
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#what-we-do', label: 'What We Do' },
        { href: '#workflow', label: 'How We Do' },
        { href: '#why-choose-us', label: 'Why Choose Us' },
        { href: '#about', label: 'About Us' },
    ];

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Smooth scroll to section
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#14002A]/90 backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <nav className="container px-6 mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Company Name */}
                    <a 
                        href="#home" 
                        onClick={(e) => scrollToSection(e, 'home')}
                        className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text"
                    >
                        Skywalker Soft
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="items-center hidden space-x-8 md:flex">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => scrollToSection(e, href.substring(1))}
                                className="relative group"
                            >
                                <span className="text-gray-300 transition-colors hover:text-secondary">
                                    {label}
                                </span>
                                
                                {activeSection === href.substring(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="p-2 md:hidden">
                                <Menu className="w-6 h-6 text-secondary" />
                            </button>
                        </SheetTrigger>
                        <SheetContent 
                            side="right" 
                            className="w-[300px] bg-[#14002A]/95 backdrop-blur-md border-purple-500/20"
							hideClose
                        >
                            <SheetHeader>
                                <SheetTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">
                                    Navigation
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col mt-10 space-y-6">
                                {navLinks.map(({ href, label }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={(e) => scrollToSection(e, href.substring(1))}
                                        className={`text-lg font-medium transition-colors ${
                                            activeSection === href.substring(1)
                                                ? 'text-secondary'
                                                : 'text-gray-300 hover:text-secondary'
                                        }`}
                                    >
                                        {label}
                                        {activeSection === href.substring(1) && (
                                            <div className="h-0.5 bg-secondary mt-1 w-12" />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Header;