"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function HistorySection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const listItems = [
    "Astonishing Facilities",
    "Helping Communities Leads",
    "Charity Events Schooling Children",
    "Feeding Hungry People"
  ];

  return (
    <section className="relative w-full py-2 lg:py-6 bg-background overflow-hidden">

      <div className="w-full xl:max-w-[85rem] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center mb-4 lg:mb-8"
        >
          {/* Custom Decorative Top Icon */}
          <motion.div variants={fadeInUp} className="mb-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-secondary stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L12 12M12 2A4 4 0 008 6V12M12 2A4 4 0 0116 6V12M8 12H16M4 12V22H20V12" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V22M8 12V22M16 12V22" />
            </svg>
          </motion.div>
          
          <motion.h4 variants={fadeInUp} className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Welcome to the Islamic Center
          </motion.h4>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-[1.1] max-w-2xl px-4">
            Know The Real History of Islam
          </motion.h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Typography & Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col space-y-8"
          >
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed font-medium pr-0 lg:pr-10">
              We established our center entirely on the foundation of spreading authentic Islamic knowledge globally. Our mission is deeply rooted in the preservation of the honorable Sunnah, ensuring that every student has access to certified tutors and life-changing education. Experience a transformative journey of faith, structured to bring you intimately closer to your Creator.
            </motion.p>
            
            <ul className="space-y-4">
              {listItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={fadeInUp}
                  className="flex items-center gap-4 text-foreground font-semibold text-lg"
                >
                  {/* Perfectly themed primary color dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(13,92,92,0.6)]" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeInUp} className="pt-6">
              <Link href="/history">
                {/* 
                  The Dynamic Shine Button
                  Explicit cursor-pointer rule added.
                */}
                <button className="relative  py-4 overflow-hidden cursor-pointer group bg-transparent border-2 border-secondary text-foreground font-bold tracking-wide px-10 rounded-full hover:shadow-[0_10px_30px_rgba(204,255,0,0.2)] transition-shadow duration-300">
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Read Our History</span>
                  
                  {/* Base fill color that slides in */}
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                  
                  {/* The actual sweeping 'Shine' effect */}
                  <span className="absolute top-0 -left-[150%] w-[100%] h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Images & Rotating Badge */}
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-end mt-10 lg:mt-0">
            
            {/* Main Arch Image (Top layer, right side) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[75%] h-[90%] rounded-t-full rounded-b-3xl border-[8px] border-background overflow-hidden relative shadow-2xl z-10 group cursor-pointer"
            >
              <Image 
                src="https://i.pinimg.com/736x/21/18/95/211895ceaa5f00838e9eec8e478ef222.jpg" 
                alt="Boy praying" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Image Attraction: Continuous Shine */}
              <motion.span 
                animate={{ x: ["-150%", "300%", "300%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute top-0 w-[100%] h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none z-20" 
              />
            </motion.div>
            
            {/* Secondary Image (Bottom layer, left overlapping) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 bottom-[5%] w-[55%] aspect-square rounded-[40px] border-[10px] border-background overflow-hidden shadow-2xl z-20 group cursor-pointer"
            >
              <Image 
                src="https://i.pinimg.com/736x/f7/ca/02/f7ca0276f84f3a8fcad605d0ea8d5211.jpg" 
                alt="Quran" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Image Attraction: Continuous Shine */}
              <motion.span 
                animate={{ x: ["-150%", "300%", "300%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                className="absolute top-0 w-[100%] h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none z-20" 
              />
            </motion.div>

            {/* Premium Rotating Sticker Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              className="absolute top-[25%] left-[10%] w-32 h-32 md:w-36 md:h-36 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center z-30 shadow-2xl cursor-default border-4 border-background"
            >
              {/* Continuous mechanical spin */}
              <motion.svg 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                viewBox="0 0 100 100" 
                className="w-full h-full absolute inset-0 text-primary p-2"
              >
                <path id="sticker-text-path" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[12px] font-black uppercase tracking-[0.2em]" fill="currentColor">
                  <textPath href="#sticker-text-path" startOffset="0%">
                    ISLAMIC CENTER • ISLAMIC CENTER • 
                  </textPath>
                </text>
              </motion.svg>
              
              {/* Center Static Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-primary z-40 bg-transparent rounded-full">
                <BookOpen size={28} className="drop-shadow-sm" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
