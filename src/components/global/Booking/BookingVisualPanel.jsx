"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, CheckCircle } from "lucide-react";

import {
  BOOKING_BENEFITS,
  BOOKING_ANIMATIONS,
} from "../../../constants/bookingConstants";

const BookingVisualPanel = () => {
  return (
    <div className="hidden lg:flex lg:w-5/12 relative bg-primary text-white p-12 flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/al-burhan/images/Banner.png"
          alt="AL Burhan Academy Banner"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/70 to-primary/90" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={BOOKING_ANIMATIONS.text}
        className="relative z-10"
      >
        <div className="mb-4 inline-flex items-center gap-2 bg-background/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          <Star size={16} className="text-secondary fill-secondary" />
          <span className="text-sm font-semibold tracking-wide">
            Elite Quranic Academy
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Start Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-secondary">
            Quranic Journey
          </span>{" "}
          Today.
        </h1>
        <p className="text-lg text-white/70 leading-relaxed max-w-md">
          Master the Holy Quran and Arabic language with our structured,
          personalized tutoring programs.
        </p>
      </motion.div>

      <motion.div
        {...BOOKING_ANIMATIONS.fadeUp}
        className="relative z-10 space-y-6"
      >
        <div className="space-y-4">
          {BOOKING_BENEFITS.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/50">
                <CheckCircle size={14} className="text-secondary" />
              </div>
              <span className="font-medium text-white/80">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 mt-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold bg-background/10 px-2 py-0.5 rounded text-white border border-white/5">
              +500 Happy Students
            </span>
          </div>
          <p className="text-sm italic text-white/60">
            "The personalized attention and flexible timing made it possible for
            me to master Tajweed while working full-time. Verily, a blessing!"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingVisualPanel;
