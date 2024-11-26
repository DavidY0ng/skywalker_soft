"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, BarChart2, Palette } from "lucide-react";

// Service Item Component
const ServiceItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
    >
        <Icon className="flex-shrink-0 mt-1 w-14 h-14 text-secondary" />
        <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">
                {title}
            </h3>
            <p className="text-lg text-white">
                {description}
            </p>
        </div>
    </motion.div>
);

const WhatWeDo = () => {
    // Services data
    const services = [
        {
            icon: Code2,
            title: "DeFi & Smart Contract",
            description: "Utilize blockchain technology for decentralized finance solutions and automated contract execution.",
            delay: 0
        },
        {
            icon: BarChart2,
            title: "Crypto Exchange",
            description: "Build a secure and scalable cryptocurrency exchange platform.",
            delay: 0.2
        },
        {
            icon: Palette,
            title: "NFT",
            description: "Create unique digital assets using blockchain technology for ownership, provenance, and collectibility.",
            delay: 0.4
        }
    ];

    return (
        <section className="relative py-20 bg-[#14002A]">
            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column - Image */}
                    <div className="justify-center hidden lg:flex lg:justify-start">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute transition duration-1000 rounded-lg -inset-4 bg-gradient-to-r from-purple-600/30 to-teal-600/30 blur-xl opacity-30 group-hover:opacity-40"></div>
                            <Image
                                src="/whatWeDo/1.png"
                                width={600}
                                height={600}
                                alt="Web3 Services"
                                className="relative h-auto max-w-full rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="space-y-12">
                        {/* Main Title and Subtitle */}
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-secondary md:text-5xl">
                                What do we do <span className="text-purple-500">&lt;/&gt;</span>?
                            </h2>
                            <p className="text-xl text-gray-300 md:text-2xl">
                                We are Pioneers in Web3 Innovation, Revolutionizing Your Digital Experience.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="space-y-8">
                            {services.map((service, index) => (
                                <ServiceItem
                                    key={service.title}
                                    {...service}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
        </section>
    );
};

export default WhatWeDo;