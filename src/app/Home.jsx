"use client";  // Add this at the top since we're using framer-motion

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <section className="relative flex items-center h-[450px] lg:min-h-[810px]">
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
                        {/* CTA button with purple to teal gradient */}
                        <div className="flex gap-4">
                            <button className="px-8 py-3 text-lg font-medium text-white transition-colors rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 shadow-purple-500/25">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image with Purple/Teal Glow */}
                    <div className="justify-center hidden lg:justify-end md:flex">
                        <div className="relative">
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
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Image
                                            src="/home/purple-ethereum.png"
                                            width={120}
                                            height={130}
                                            alt="Centered content"
                                            className="relative h-auto max-w-full translate-x-[-7px] translate-y-[-70px]"
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