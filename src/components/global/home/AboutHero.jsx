"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, PlayCircle, Star, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageEffect = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.8, delay: 0.2, ease: "backOut" } 
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-white flex items-center overflow-hidden px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="z-10"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 border border-primary/20 bg-primary/5 w-fit px-4 py-1.5 rounded-full mb-6">
            <Star size={14} className="text-secondary fill-secondary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Learn · Recite · Memorize
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Illuminate Your Heart <br /> 
            with the <span className="text-primary italic font-serif">Quran</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-md mb-10 leading-relaxed">
            Join AL Burhan Quran Academy for world-class online Islamic education. 
            Connect with expert tutors and master Tajweed from the comfort of your home.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
            <Link href="/enroll">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/20 group cursor-pointer">
                Get Started
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
            
            <Link href="/service">
              <button className="flex items-center gap-2 text-slate-700 font-semibold hover:text-primary transition-colors cursor-pointer">
                <BookOpen size={24} className="text-secondary" />
                View Courses
              </button>
            </Link>
          </motion.div>

          {/* Stats/Social Proof */}
          <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-8">
            <div>
              <h3 className="text-4xl font-bold text-slate-900">5k+</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-tight">Active Students</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3 bg-primary/5 p-2 pr-6 rounded-full">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="user" 
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-primary">Certified Tutors</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <div className="relative">
          {/* Main Large Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageEffect}
            className="relative z-0 rounded-[40px] overflow-hidden shadow-2xl aspect-4/5 lg:aspect-square"
          >
            <Image 
              src="/al-burhan/images/1.png"
              alt="Quran Academy Hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Smaller Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 lg:-left-20 z-20 bg-white p-6 rounded-3xl border border-slate-100 shadow-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enrollment</p>
              <p className="text-lg font-bold text-slate-900">Open for 2024</p>
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;