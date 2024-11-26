"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Users, Lock, Globe, Wrench } from "lucide-react";

const FeatureCard = ({ icon: Icon, title }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-[1px] rounded-lg relative group"
    >
        {/* Glow container */}
        <div className="absolute inset-0 bg-white/50 rounded-lg blur-[5px] transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
        
        {/* Top permanent glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-transparent rounded-lg blur-[5px]" />

        {/* Main card content */}
        <div className="relative bg-[#14002A] rounded-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
                <Icon className="w-16 h-16 text-secondary" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-medium text-white">
                {title}
            </h3>
        </div>
    </motion.div>
);

const WhyChooseUs = () => {
    const features = [
        {
            icon: Network,
            title: "Ethereum Blockchain"
        },
        {
            icon: Users,
            title: "Easy to use Platform"
        },
        {
            icon: Lock,
            title: "High Security"
        },
        {
            icon: Globe,
            title: "First and Decentralized"
        },
        {
            icon: Wrench,
            title: "Reliable Support"
        }
    ];

    return (
        <section id="why-choose-us" className="relative py-20 bg-[#14002A]">
            <div className="container relative z-10 px-6 mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="max-w-2xl mx-auto mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
                        Why Choose Us for Your{" "}
                        <span className="text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">
                            Web 3.0 Journey?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        We&apos;re dedicated to guiding you through the complexities of the Web 3.0 landscape with expertise and innovation.
                    </p>
                </motion.div>

                {/* Custom Grid Layout */}
                <div className="grid grid-cols-1 gap-8 md:gap-6">
                    {/* First Row - 2 cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 md:px-32">
                        {features.slice(0, 2).map((feature) => (
                            <FeatureCard 
                                key={feature.title} 
                                {...feature} 
                            />
                        ))}
                    </div>
                    
                    {/* Second Row - 3 cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                        {features.slice(2).map((feature) => (
                            <FeatureCard 
                                key={feature.title} 
                                {...feature} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent"></div>
        </section>
    );
};

export default WhyChooseUs;