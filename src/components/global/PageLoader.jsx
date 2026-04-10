"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 2.2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            // Wipe-away exit: two curtains slide out left & right
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-primary overflow-hidden"
        >
          {/* ── Subtle Islamic Geometric Texture ── */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30zM15 15l30 30m-30 0l30-30' fill='none' stroke='%23ffffff' stroke-width='1' /%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* ── Left curtain exit panel ── */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-primary origin-right z-10"
            exit={{
              scaleX: 0,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            }}
          />
          {/* ── Right curtain exit panel ── */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-primary origin-left z-10"
            exit={{
              scaleX: 0,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            }}
          />

          {/* ╔═══════════════════════════════╗
              ║   Central Logo Stage         ║
              ╚═══════════════════════════════╝ */}
          <div className="relative flex flex-col items-center gap-10 z-20">
            {/* ── Animated Glow Halo ── */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl"
            />

            {/* ── Logo Container with breathing scale ── */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.7, 1, 0.96, 1], opacity: 1 }}
              transition={{
                scale: {
                  duration: 2,
                  ease: "easeOut",
                  times: [0, 0.5, 0.75, 1],
                },
                opacity: { duration: 0.6 },
              }}
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-secondary/60"
            >
              <Image
                src="/al-burhan/Logo/PNG/orignal transparent.png"
                alt="AL Burhan Logo"
                fill
                sizes="200px"
                className="object-cover"
                priority
              />
              {/* Sweeping shine effect on the logo */}
              <motion.span
                animate={{ x: ["-160%", "300%"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
                className="absolute top-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] pointer-events-none"
              />
            </motion.div>

            {/* ── Academy name ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="text-secondary font-black text-2xl md:text-3xl tracking-[0.25em] uppercase font-serif drop-shadow">
                AL Burhan
              </span>
              <span className="text-primary-foreground/70 text-xs md:text-sm tracking-[0.35em] uppercase font-medium">
                Quran Academy
              </span>
            </motion.div>

            {/* ── Three pulsing dots as a subtle "loading" indicator ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-secondary"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
