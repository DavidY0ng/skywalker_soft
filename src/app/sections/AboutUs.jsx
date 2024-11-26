"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const AboutPoint = ({ title, content }) => (
    <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        <CheckCircle2 className="flex-shrink-0 w-6 h-6 mt-1 text-secondary" />
        <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">
                {title}
            </h3>
            <p className="text-gray-300">
                {content}
            </p>
        </div>
    </motion.div>
);

const AboutUs = () => {
    const points = [
        {
            title: "Our Value",
            content: "As pioneers in transformative solutions, we harness the complete potential of Web3 technology, fostering innovation and enabling growth in the digital sphere."
        },
        {
            title: "Our Vision",
            content: "Our vision is to cultivate a future where Web3 technology acts as a catalyst for global change, fostering innovation, inclusivity, and empowerment across all sectors of society."
        },
        {
            title: "Our Mission",
            content: "We strive to lead the integration and advancement of Web3 technologies, empowering businesses and individuals with innovative solutions that unlock new opportunities, fuel growth, and promote positive societal impact."
        }
    ];

    return (
        <section className="relative py-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/aboutUs/purple-bg.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <div className="absolute inset-0 bg-[#14002A]/90"></div> */}
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        {/* Introduction */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-secondary md:text-5xl">
                                About <span className="text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">Us</span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                We lead the way in combining blockchain and Web3 technologies, envisioning a future where digital advancements benefit everyone. With a commitment to excellence, we empower businesses and individuals with the transformative potential of Web3, fostering growth and driving positive change.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            className="p-6 border-l-4 border-secondary bg-purple-900/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xl italic text-gray-300">
                                "Embrace the limitless possibilities of Web3, where innovation propels us into a boundless digital frontier."
                            </p>
                        </motion.div>

                        {/* Points */}
                        <div className="space-y-8">
                            {points.map((point, index) => (
                                <AboutPoint
                                    key={point.title}
                                    {...point}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="justify-center hidden lg:flex">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute transition duration-1000 rounded-lg -inset-4 bg-gradient-to-r from-purple-600/30 to-teal-600/30 blur-xl opacity-30 group-hover:opacity-40"></div>
                            
                            <Image
                                src="/aboutUs/2.png"  // Replace with your actual image
                                width={600}
                                height={600}
                                alt="About Us"
                                className="relative h-auto max-w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#14002A] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#14002A] to-transparent"></div>
        </section>
    );
};

export default AboutUs;