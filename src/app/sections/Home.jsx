"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePage = () => {
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative flex items-center h-auto min-h-[810px] py-12 lg:py-0">
            {/* Background Image with Purple Gradient Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/home/bg.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Simple gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#14002A] to-transparent" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-6xl">
                            Welcome to the Future:
                            <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">
                                Unleashing Web3 Innovation
                            </span>
                        </h1>
                        <p className="text-xl text-white md:text-2xl">
                            Empowering Your Digital Journey with Cutting-Edge
                            Web3 Solutions
                        </p>
                        {/* CTA button with glow effect */}
                        <div className="flex gap-4">
                            <button
                                onClick={scrollToContact}
                                className="relative px-8 py-3 overflow-hidden text-lg font-medium text-white transition-all duration-500 rounded-lg shadow-lg cursor-pointer group bg-gradient-to-r from-purple-600 to-teal-600"
                            >
                                {/* Glow effect container */}
                                <div className="absolute inset-0 w-0 transition-all duration-500 ease-out bg-white/20 group-hover:w-full" />

                                {/* Button text */}
                                <span className="relative z-10">
                                    Contact Us
                                </span>

                                {/* Button shadow on hover */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image with Purple/Teal Glow */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-[280px] lg:w-auto">
                            {/* Glow Effect */}
                            <div className="absolute transition duration-1000 rounded-lg -inset-4 bg-gradient-to-r from-purple-600/30 to-teal-600/30 blur-xl opacity-30 group-hover:opacity-40"></div>

                            {/* Computer with Centered Image */}
                            <div className="relative">
                                <Image
                                    src="/home/computer.png"
                                    width={600}
                                    height={600}
                                    alt="Web3 Innovation"
                                    className="relative h-auto max-w-full"
                                />

                                {/* Centered Image with Framer Motion Animation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            y: [-20, 0, -20],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Image
                                            src="/home/purple-ethereum.png"
                                            width={120}
                                            height={130}
                                            alt="Centered content"
                                            className="relative h-auto max-w-full w-[60px] lg:w-[120px] translate-x-[-4px] lg:translate-x-[-7px] translate-y-[-40px] lg:translate-y-[-70px]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
