"use client";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  Award,
  Languages,
  Book,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLocalePath } from "@/hooks/useLocalePath";

const steps = [
  {
    num: "01",
    title: "Arabic Alphabet & Sounds",
    desc: "Master all 28 Arabic letters with their proper articulation and written forms.",
  },
  {
    num: "02",
    title: "Essential Grammar Basics",
    desc: "Understand foundational Arabic grammar (Nahw) and sentence structures.",
  },
  {
    num: "03",
    title: "Quranic Vocabulary",
    desc: "Build a strong bank of high-frequency words found throughout the Holy Quran.",
  },
  {
    num: "04",
    title: "Direct Translation Skills",
    desc: "Learn to translate Quranic verses directly from Arabic to understand revelation.",
  },
  {
    num: "05",
    title: "Reading & Writing Drills",
    desc: "Develop the ability to read complex Arabic texts and write essential sentences.",
  },
  {
    num: "06",
    title: "Advanced Comprehension",
    desc: "Achieve the ability to understand lectures and simple conversations in Arabic.",
  },
];

export default function ArabicPage() {
  const localePath = useLocalePath();
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Arabic Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6"
          >
            <Languages size={14} className="text-secondary fill-secondary" />
            Unlock Understanding
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-4 drop-shadow-2xl"
          >
            Arabic Language
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto mb-10"
          >
            Learn the language of revelation. Understand the Holy Quran directly
            without a translator and master the grammar of the most profound
            language on earth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={localePath("/enroll?course=Arabic Language")}
              className="px-10 py-4 rounded-full bg-secondary text-primary font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Enroll in Arabic
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4 uppercase">
              The Linguistic Path
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[32px] bg-background border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all cursor-pointer"
                >
                  <span className="block text-4xl font-black text-primary/10 group-hover:text-secondary/20 transition-colors mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[40px] bg-primary text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-black mb-8 relative z-10">
                Why Learn Arabic?
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Direct Quranic Connection",
                  "Global Communication",
                  "Deep Spiritual Insight",
                  "Native Arabic Tutors",
                  "Structured Grammar Path",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[40px] border-2 border-slate-100 bg-slate-50/50">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                {" "}
                <Book size={32} />{" "}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Native Experts
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                {" "}
                Our native Arabic instructors ensure you learn perfect
                pronunciation and authentic dialect nuances.{" "}
              </p>
              <Link
                href={localePath("/enroll")}
                className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"
              >
                {" "}
                Free Assessment <span>→</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
