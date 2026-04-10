"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

// Niche features of the Quran Academy
const features = [
  "Certified Native Tutors",
  "1-on-1 Interactive Classes",
  "Focus on Proper Tajweed",
  "Flexible Global Timings",
  "Specialized Hifz Programs",
  "Female Tutors Available",
];

export default function MarqueeSection() {
  // We duplicate the array multiple times to ensure a seamless infinite scroll
  // The animation will translate from 0% to -50%, so we need enough content that 50% covers the screen width several times.
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <section className="relative w-full py-6 md:py-8 bg-primary overflow-hidden flex items-center border-y border-white/5 shadow-2xl group cursor-pointer">
      {/* Decorative gradient overlays to fade the edges seamlessly */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-full overflow-hidden">
        {/* The motion container handles the infinite scroll */}
        {/* We use hover:[animation-play-state:paused] to pause when the mouse enters */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, // Nice slow continuous scroll
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap w-fit group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((feature, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 mx-8 md:mx-16 group/item"
            >
              {/* Star Icon serving as a bullet point */}
              <Sparkles
                size={24}
                className="text-secondary mr-4 opacity-80 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300 transform group-hover/item:rotate-12"
              />
              {/* Feature Text */}
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground opacity-90 group-hover/item:opacity-100 group-hover/item:text-secondary drop-shadow-sm transition-colors duration-300 tracking-wide uppercase">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
    </section>
  );
}
