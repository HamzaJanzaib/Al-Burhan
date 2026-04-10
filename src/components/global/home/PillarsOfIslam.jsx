"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaHandPointer,
  FaHandsPraying,
  FaMoon,
  FaSackDollar,
  FaKaaba,
} from "react-icons/fa6";

const pillars = [
  {
    id: 1,
    name: "Shahadah",
    meaning: "(Faith)",
    icon: FaHandPointer,
  },
  {
    id: 2,
    name: "Salah",
    meaning: "(Prayer)",
    icon: FaHandsPraying,
  },
  {
    id: 3,
    name: "Sawm",
    meaning: "(Fasting)",
    icon: FaMoon,
  },
  {
    id: 4,
    name: "Zakat",
    meaning: "(Almsgiving)",
    icon: FaSackDollar,
  },
  {
    id: 5,
    name: "Hajj",
    meaning: "(Pilgrimage)",
    icon: FaKaaba,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PillarsOfIslam() {
  return (
    <section className="relative w-full py-8 lg:py-12 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop"
          alt="Mosque Silhouette"
          fill
          className="object-cover object-bottom"
        />
        {/* Uses theme primary and background colors to ensure contrast and rule compliance */}
        <div className="absolute inset-0 bg-background/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3"
          >
            About Essential
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6"
          >
            Pillars Of Islam
          </motion.h2>
          
          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 max-w-[200px] mx-auto"
          >
            <span className="h-px bg-secondary w-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <span className="h-px bg-secondary w-full" />
          </motion.div>
        </div>

        {/* Pillars Layout */}
        <div className="relative mt-20">
          {/* Connecting SVG Path (Hidden on strictly mobile, fully visible md+) */}
          <div className="absolute top-20 left-[10%] right-[10%] hidden md:block z-0 pointer-events-none">
            <svg
              width="100%"
              height="120px"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              className="overflow-visible"
            >
              {/* Complex wavy line connecting 5 points */}
              <motion.path
                d="M 0,60 C 125,-20 125,140 250,60 C 375,-20 375,140 500,60 C 625,-20 625,140 750,60 C 875,-20 875,140 1000,60"
                fill="none"
                stroke="var(--color-secondary, #ccff00)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Circle Container */}
                <div className="relative w-36 h-36 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-white/20 bg-background/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:border-secondary transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-500" />
                  
                  {/* Icon */}
                  <pillar.icon className="text-4xl lg:text-5xl text-primary-foreground group-hover:text-white transition-colors duration-300 relative z-10 group-hover:-translate-y-1 transform ease-out" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl lg:text-2xl font-serif text-primary-foreground mb-1 group-hover:text-white transition-colors duration-300">
                  {pillar.name}
                </h3>
                <p className="text-secondary font-medium tracking-wide">
                  {pillar.meaning}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
