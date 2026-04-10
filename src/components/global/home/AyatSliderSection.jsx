"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "O you who have believed, Seek help through patience and prayers.",
    badge: "Al-Baqrah (1) : 153"
  },
  {
    id: 2,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    translation: "And when My servants ask you concerning Me, indeed I am near.",
    badge: "Al-Baqrah (2) : 186"
  },
  {
    id: 3,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship [will be] ease.",
    badge: "Ash-Sharh (94) : 6"
  }
];

export default function AyatSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-background overflow-hidden z-20">
      
      {/* 
        The Dramatic Sweeping Arc Mask
        Replicating the exact curve from the image using a massive scale and border radius.
      */}
      <div 
        className="absolute -top-[5%] -bottom-[5%] -right-[15%] w-full lg:w-[80%] xl:w-[70%] rounded-tl-[300px] lg:rounded-tl-[800px] overflow-hidden z-0 shadow-[-20px_0_60px_rgba(0,0,0,0.05)] bg-slate-50"
      >
        <Image 
          src="https://i.pinimg.com/736x/78/e5/4a/78e54a32fa119aad6b68508f88bd377f.jpg" 
          alt="Islamic Center" 
          fill 
          priority
          className="object-cover object-center lg:object-right transition-transform duration-[30s] hover:scale-110"
        />
      </div>

      <div className="w-full xl:max-w-340 mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          
          {/* Left Column: Heading & Speech Bubble Slider */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Upper Label */}
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              Quranic Verses With Translation
            </motion.h4>

            {/* Main Title Styled strictly using theme primary-foreground/primary */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-8xl font-serif font-black text-foreground lg:text-primary leading-[0.95] mb-16 lg:mb-24 max-w-lg"
            >
              Islamic ayat with <br /> translation
            </motion.h2>

            {/* 
              The Pill Speech Bubble Slider
              Shape: Rounded-full with a tiny sharp 'tail' tip at the top-right.
              Colors: Vibrant green text and solid gold/yellow theme accents.
            */}
            <div className="w-full max-w-xl space-y-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-full rounded-full rounded-tr-[5px] border-[3px] border-secondary bg-secondary/10 px-10 py-16 md:px-16 md:py-10 shadow-xl overflow-hidden group"
              >
                <div className="relative min-h-[200px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center text-center space-y-6"
                    >
                      {/* Arabic Text in vibrant green theme */}
                      <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-emerald-600 drop-shadow-sm">
                        {slides[currentSlide].arabic}
                      </p>
                      
                      {/* English Text in contrast foreground */}
                      <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed max-w-sm">
                        {slides[currentSlide].translation}
                      </p>

                      {/* Surah Badge - Solid Yellow Pill */}
                      <div className="relative overflow-hidden mt-6 bg-secondary text-primary font-black py-3 px-10 rounded-full shadow-[0_5px_15px_rgba(204,255,0,0.4)]">
                        <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest">{slides[currentSlide].badge}</span>
                        {/* Continuous Glare Animation */}
                        <motion.span 
                          animate={{ x: ["-100%", "250%", "250%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" 
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Centered Pagination Dashes */}
              <div className="flex items-center justify-center gap-4">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${
                      currentSlide === idx 
                        ? "w-14 bg-secondary shadow-[0_0_10px_rgba(204,255,0,0.8)]" 
                        : "w-8 bg-secondary/30 hover:bg-secondary/60"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
