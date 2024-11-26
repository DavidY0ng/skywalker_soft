"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const WorkFlow = () => {
    const workflowSteps = [
        {
            title: "Requirement Analysis",
            content: "We define project scope by analyzing client needs for clear objectives and deliverables."
        },
        {
            title: "Research and Planning",
            content: "We research, evaluate, and plan projects for efficient execution and resource use."
        },
        {
            title: "Design and Architecture",
            content: "We prioritize user experience and scalability in interface design and system architecture."
        },
        {
            title: "Development",
            content: "Developers prioritize collaboration, agile methods for high-quality, scalable solutions."
        },
        {
            title: "Testing and Quality Assurance",
            content: "Testing ensures reliability, fixing defects to meet requirements before deployment."
        },
        {
            title: "Deployment",
            content: "Smooth deployment ensured via testing in production for functionality, performance validation."
        },
        {
            title: "Maintenance and Support",
            content: "We offer ongoing maintenance, promptly addressing issues to maximize software value."
        },
        {
            title: "Optimization and Evolution",
            content: "Continuous optimization ensures competitive software aligned with evolving business needs."
        }
    ];

    return (
        <section id="workflow" className="relative py-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/howWeWork/bg.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <div className="absolute inset-0 bg-[#14002A]/90"></div> */}
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                {/* Section Title */}
                <motion.div 
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-secondary md:text-5xl">
                        How We <span className="text-transparent bg-gradient-to-r from-purple-300 to-secondary bg-clip-text">Work</span>
                    </h2>
                </motion.div>

                {/* Timeline Accordion Container */}
                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[17px] top-0 bottom-0 w-[2px] bg-purple-600/30" />
                        
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {workflowSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* Circle on the timeline */}
                                    <div className="absolute left-0 z-10 transform -translate-x-[-1px]">
                                        <Circle className="w-8 h-8 p-2 bg-purple-900 rounded-full text-secondary"  />
                                    </div>

                                    <AccordionItem 
                                        value={`item-${index}`}
                                        className="ml-12 bg-transparent border-none"
                                    >
                                        <AccordionTrigger className="px-4 py-2 hover:no-underline group">
                                            <span className="text-xl font-medium text-secondary group-hover:text-secondary/80">
                                                {step.title}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 text-lg text-gray-300">
                                            {step.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#14002A] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#14002A] to-transparent"></div>
        </section>
    );
};

export default WorkFlow;