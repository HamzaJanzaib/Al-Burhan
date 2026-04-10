"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutAcademy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Image with Offset Frame */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="relative group cursor-pointer w-full max-w-[600px] mx-auto lg:max-w-none"
        >
          {/* Offset Border Frame */}
          {/* This is the interactive frame sitting behind the image */}
          <motion.div 
            className="absolute top-4 -left-4 md:top-8 md:-left-8 w-full h-full border-[6px] border-secondary rounded-sm z-0"
            whileHover={{ x: -12, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Main Image Container */}
          <motion.div 
            className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-sm overflow-hidden shadow-2xl z-10 bg-slate-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop" 
              alt="Grand Mosque Twilight"
              fill
              className="object-cover"
            />
            {/* Subtle overlay to retain beautiful aesthetic contrast */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-primary/0 transition-colors duration-500" />
          </motion.div>
        </motion.div>

        {/* Right Side: Typography & Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col z-10"
        >
          <motion.h4 variants={fadeInUp} className="text-secondary font-bold text-xl mb-3">
            Our Heritage
          </motion.h4>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground font-black mb-6 leading-tight tracking-tight">
            About AL Burhan <br/> Academy
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-1.5 mb-8 max-w-[280px]">
            <span className="h-px bg-secondary/30 w-full" />
            <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
            <span className="h-px bg-secondary/30 w-full" />
          </motion.div>

          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-6 leading-relaxed font-medium">
            We established AL Burhan to bridge the gap between eager learners and authentic Islamic knowledge. Our academy focuses on connecting students worldwide with certified native Arab tutors, ensuring the highest standards of Tajweed, Recitation, and Hifz from the comfort of their homes.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
            Experience a transformative journey of faith through personalized 1-on-1 sessions tailored strictly to your pace, connecting you securely with the profound meanings of the beautifully preserved Quran.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/about">
              <button className="bg-secondary text-primary font-bold uppercase tracking-widest py-4 px-10 rounded-sm flex items-center gap-3 group hover:bg-secondary/90 hover:shadow-[0_10px_20px_rgba(204,255,0,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                READ MORE
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
