"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content, link, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative p-8 overflow-hidden transition-all duration-300 border rounded-lg group border-secondary/20 bg-purple-900/20 backdrop-blur-sm hover:bg-purple-900/30"
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-secondary/5 group-hover:opacity-100 blur-xl" />

        {/* Content */}
        <div className="relative flex items-center space-x-6">
            <div className="p-4 rounded-lg bg-purple-900/50">
                <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-medium text-secondary">{title}</h3>
                {link ? (
                    <a 
                        href={link} 
                        className="block text-lg text-gray-300 transition-colors hover:text-secondary"
                    >
                        {content}
                    </a>
                ) : (
                    <p className="text-lg text-gray-300 whitespace-pre-line">
                        {content}
                    </p>
                )}
            </div>
        </div>
    </motion.div>
);

const Contact = () => {
    return (
        <section id="contact" className="relative py-40 bg-[#14002A]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" 
                    style={{
                        backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
                        backgroundSize: "100px 100px"
                    }}
                />
            </div>

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
                        Get in <span className="text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        We&apos;d love to hear from you. Here&apos;s how you can reach us.
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-1">
                    <ContactInfo 
                        icon={MapPin}
                        title="Address"
                        content="Wisma Center 147, unit 72, Level 5,&#10;Jalan Ampang, Kuala Lumpur City Center,&#10;50450, Kuala Lumpur"
                        delay={0.4}
                    />
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full filter blur-[128px] opacity-10" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[128px] opacity-10" />
            </div>
        </section>
    );
};

export default Contact;