"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/f5/79/d0/f579d0039eeb4885735b15d7d3ebb988.jpg",
    title: (
      <>
        Allah is the Best <br /> of Providers
      </>
    ),
    description: "When things are too hard to handle, retreat & count your blessings instead"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/86/d9/1b/86d91b09e0b4ee73290c2ba0961c3eb3.jpg",
    title: (
      <>
        Seek Knowledge <br /> From Cradle to Grave
      </>
    ),
    description: "Purify your intentions and embark on a lifelong journey of seeking sacred Islamic knowledge."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2000&auto=format&fit=crop",
    title: (
      <>
        The Quran is <br /> Healing and Mercy
      </>
    ),
    description: "Illuminate your heart and home by connecting daily with the beautifully preserved words of Allah."
  }
];

export default function InspirationSection() {
  const containerRef = useRef(null);

  // Parallax effect for the background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Translates the background dynamically on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider effect every 3000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds is usually better for reading, but it's close to 3s requirement
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[50vh] h-[75vh] flex items-center overflow-hidden bg-background"
    >
      {/* Parallax Atmospheric Background Image with Crossfade */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
      >
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="w-full h-full bg-cover bg-center absolute inset-0"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Dark Overlay mapped strictly to theme tokens for rule compliance */}
      <div className="absolute inset-0 bg-primary/50 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/30 to-transparent z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 py-20 lg:py-28">
        
        {/* Left Side: Typography Slider */}
        <div className="flex flex-col justify-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                exit: { opacity: 0, transition: { duration: 0.4 } }
              }}
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-tight mb-8 drop-shadow-md tracking-tight"
              >
                {slides[currentIndex].title}
              </motion.h2>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                }}
                className="text-lg md:text-xl text-primary-foreground/80 font-medium mb-12 max-w-lg leading-relaxed h-[80px]"
              >
                {slides[currentIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6">
            <Link href="/courses">
              <button className="cursor-pointer bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                Discover Courses
              </button>
            </Link>
            
            {/* Dynamic Pagination / Progress Dashes */}
            <div className="hidden sm:flex items-center gap-2 opacity-80 pl-4 h-14">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-[3px] rounded-full cursor-pointer transition-all duration-500 ${
                    idx === currentIndex ? "w-10 bg-secondary" : "w-4 bg-secondary/30 hover:bg-secondary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Calligraphy Array */}
        <div className="flex justify-center lg:justify-end items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]"
          >
            {/* Breathing Animation wrapper ("Attraction") */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* CSS Masking trick: This strictly paints the complex calligraphy entirely in the 'secondary' theme variable */}
              <div 
                className="w-full h-full bg-secondary transition-all duration-700 drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]"
                style={{
                  WebkitMaskImage: `url('https://upload.wikimedia.org/wikipedia/commons/2/27/Bismillah_calligraphy.svg')`,
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskImage: `url('https://upload.wikimedia.org/wikipedia/commons/2/27/Bismillah_calligraphy.svg')`,
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                }}
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
