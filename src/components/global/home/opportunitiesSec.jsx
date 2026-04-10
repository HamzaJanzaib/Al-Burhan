"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { CheckCircle, Award, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";

const Counter = ({ value, suffix = "%" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="text-6xl font-black tracking-tighter text-secondary"
    >
      0{suffix}
    </span>
  );
};

const AboutStatsSection = () => {
  const containerRef = useRef(null);

  // Parallax Effect for Images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imgYReverse = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background py-24 px-6 lg:px-16 overflow-hidden"
    >
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] -z-0" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        {/* Left Column - Visuals & Stats */}
        <div className="space-y-12">
          <motion.div
            style={{ y: imgY }}
            variants={itemVariants}
            className="relative group"
          >
            {/* Interactive Frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[40px] -z-10 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700" />
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[40px] shadow-2xl border border-white">
              <Image
                src="/al-burhan/Logo/WEBP/al-burhan-full.webp"
                alt="Student Reciting"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-primary/10 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-secondary tracking-widest uppercase">
                    Verified
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Certified Tutors
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-12 pt-4">
            {[
              {
                val: 98,
                suffix: "%",
                text: "Student satisfaction rate in our Hifz and Tajweed programs.",
              },
              {
                val: 1200,
                suffix: "+",
                text: "Students who have successfully completed their Quran course.",
              },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="group">
                <div className="flex flex-col">
                  <Counter value={stat.val} suffix={stat.suffix} />
                  <div className="w-full h-2 bg-slate-100 mt-4 relative rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `100%` }}
                      transition={{
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.5 + i * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="absolute h-full bg-linear-to-r from-primary to-primary/60 rounded-full shadow-[0_0_15px_rgba(13,92,92,0.3)]"
                    />
                  </div>
                </div>
                <p className="mt-5 text-slate-500 text-sm leading-relaxed font-medium">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col space-y-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-black uppercase tracking-[0.2em] text-primary">
              <Sparkles size={14} className="text-secondary animate-pulse" />
              Excellence in Education
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Empowering the{" "}
              <span className="text-primary italic">Next Generation</span> of
              Huffaz.
            </h2>

            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              We go beyond recitation. We instill the values of the Quran into
              the hearts of our students, building a legacy of faith and
              character.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Personalized 1-on-1 sessions tailored to your pace.",
                "Ijazah certified tutors from across the globe.",
                "Innovative tracking system for all family members.",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-bold"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-secondary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{ y: imgYReverse }}
            variants={itemVariants}
            className="relative pt-10"
          >
            <Link href="/enroll">
              <motion.div
                whileHover={{ scale: 0.98, rotate: -1 }}
                className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 group"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src="/al-burhan/Logo/WEBP/al-burhan-full.webp"
                  alt="Join Us"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay CTA */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-linear-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-xl">
                      Start Your Trial Today
                    </p>
                    <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStatsSection;
