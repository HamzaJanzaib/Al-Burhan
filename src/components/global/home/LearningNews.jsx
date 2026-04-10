"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ArrowRight, Calendar, BookOpen, Bell } from "lucide-react";
import Link from "next/link";

const quranNews = [
  {
    id: 1,
    date: "OCT 12, 2024",
    title: "New Weekend Hifz Intensive starting next month.",
    category: "Admissions",
    href: "/service/hifz",
  },
  {
    id: 2,
    date: "OCT 20, 2024",
    title: "Mastering Tajweed: A workshop for parents and students.",
    category: "Workshops",
    href: "/service/tajweed",
  },
  {
    id: 3,
    date: "NOV 05, 2024",
    title: "New Advanced Arabic Grammar module added to curriculum.",
    category: "Updates",
    href: "/service/arabic",
  },
  {
    id: 4,
    date: "NOV 12, 2024",
    title: "Ramadan 2025: Early Bird enrollment now open.",
    category: "Guides",
    href: "/enroll",
  },
];

export default function LearningNewsSection() {
  const [hoveredId, setHoveredId] = useState(1);

  return (
    <section className="bg-primary/5 py-24 px-6 md:px-20 font-sans selection:bg-secondary/30 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-secondary" />
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                Latest Updates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              News from <span className="text-primary italic">AL Burhan</span>
            </h2>
          </motion.div>

          <Link href="/enroll">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-background border border-slate-100 text-primary font-bold shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer"
            >
              Learn More{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </motion.button>
          </Link>
        </div>

        {/* News Items List */}
        <div className="grid gap-4">
          {quranNews.map((item) => {
            const isActive = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                className={`relative group cursor-pointer rounded-[32px] border transition-all duration-500
                  ${
                    isActive
                      ? "bg-background border-primary/10 shadow-[0_20px_50px_rgba(13,92,92,0.1)] py-10 px-8"
                      : "bg-background/40 border-transparent hover:border-slate-200 py-8 px-8"
                  }`}
                layout
              >
                {/* Active selection dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-secondary rounded-r-full"
                  />
                )}

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
                    <div
                      className={`flex items-center gap-2 text-sm font-bold tracking-wider transition-colors duration-300 ${isActive ? "text-secondary" : "text-slate-400"}`}
                    >
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <div className="h-4 w-px bg-slate-200 hidden md:block" />
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-slate-800"}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isActive ? "bg-secondary/20 text-secondary" : "bg-slate-100 text-slate-500"}`}
                    >
                      {item.category}
                    </span>

                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="arrow"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                        >
                          <Link href={item.href}>
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all">
                              <ArrowRight size={20} />
                            </div>
                          </Link>
                        </motion.div>
                      ) : (
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-primary/20 group-hover:text-primary transition-all">
                          <Plus size={20} />
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
