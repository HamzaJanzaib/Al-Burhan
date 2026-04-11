"use client";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  BookOpen,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLocalePath } from "@/hooks/useLocalePath";

const steps = [
  {
    num: "01",
    title: "Basic Arabic Alphabet",
    desc: "Start from the very beginning by learning the shapes and names of all 28 Arabic letters.",
  },
  {
    num: "02",
    title: "Vowel Signs (Harkat)",
    desc: "Understand how accents like Fatha, Kasra, and Damma change the sounds of letters.",
  },
  {
    num: "03",
    title: "Word Joining Rules",
    desc: "Learn how Arabic letters connect to form words and master compound letter sounds.",
  },
  {
    num: "04",
    title: "Fluency Drills",
    desc: "Practice reading short verses to build speed and accuracy in word recognition.",
  },
  {
    num: "05",
    title: "Full Page Recitation",
    desc: "Advance to reading entire pages with correct pauses and basic flow.",
  },
  {
    num: "06",
    title: "Reading Mastery",
    desc: "A final assessment to ensure you can read any portion of the Quran independently.",
  },
];

export default function ReadingPage() {
  const localePath = useLocalePath();
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Reading Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/40 via-secondary/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6"
          >
            <BookOpen size={14} className="text-primary fill-primary" />
            Start From Basics
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-4 drop-shadow-2xl"
          >
            Quran Reading
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto mb-10"
          >
            The perfect foundation for beginners. Learn to read the Holy Quran
            with perfect accuracy from day one through our patient and
            structured Nurani Qaida specialized program.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={localePath("/enroll?course=Quran Reading (Nazra)")}
              className="px-10 py-4 rounded-full bg-primary text-white font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Book Trial Class
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4 uppercase">
              Fundamental Steps
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[32px] bg-background border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all cursor-pointer"
                >
                  <span className="block text-4xl font-black text-secondary/10 group-hover:text-primary/20 transition-colors mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors mb-2">
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
            <div className="p-10 rounded-[40px] bg-secondary text-primary relative overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-black mb-8 relative z-10">
                Why This Course?
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Step-by-Step Guidance",
                  "Interactive Lessons",
                  "Certified Native Tutors",
                  "Weekly Progress Tracking",
                  "Lifetime Reading Skills",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-bold text-primary/80 group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[40px] border-2 border-slate-100 bg-slate-50/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {" "}
                <GraduationCap size={32} />{" "}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Start Strong
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {" "}
                Our Nazra program ensures that you build a lifetime of correct
                recitation through patient, professional tutoring.{" "}
              </p>
              <Link
                href={localePath("/enroll")}
                className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"
              >
                {" "}
                Enroll Now <span>→</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
