"use client";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  ShieldCheck,
  Heart,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Fiqh (Islamic Jurisprudence)",
    desc: "Learn the essential practical rules of worship (Ibadah) and daily Islamic living.",
  },
  {
    num: "02",
    title: "Aqidah (Islamic Creed)",
    desc: "Build a strong foundation of faith and understand the core beliefs of a Muslim.",
  },
  {
    num: "03",
    title: "Sirah (Life of Prophet)",
    desc: "Study the blessed life of Prophet Muhammad (PBUH) as a model for all humanity.",
  },
  {
    num: "04",
    title: "Hadith Studies",
    desc: "Gain insights from the Prophetic traditions and learn how to apply them to modern life.",
  },
  {
    num: "05",
    title: "Islamic History",
    desc: "Explore the rich legacy of Islamic civilization from the golden age to the present.",
  },
  {
    num: "06",
    title: "Character (Akhlaq)",
    desc: "Focus on spiritual purification and developing the noble character of a believer.",
  },
];

export default function IslamicStudiesPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Islamic Studies Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/40 via-primary/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} className="text-secondary fill-secondary" />
            Living the Sunnah
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-4 drop-shadow-2xl"
          >
            Islamic Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto mb-10"
          >
            A comprehensive guide to understanding your faith and building a
            lifestyle aligned with Islamic values through the study of Fiqh,
            Hadith, and Seerah.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/enroll?course=Islamic Studies"
              className="px-10 py-4 rounded-full bg-secondary text-primary font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Join Course
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4 uppercase">
              The Pillars of Knowledge
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
                What We Cover
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Five Pillars Mastery",
                  "Prophetic Character",
                  "Contemporary Islamic Issues",
                  "Family & Social Ethics",
                  "Spititual Growth",
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
                <BookOpen size={32} />{" "}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Complete Education
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                {" "}
                Our Islamic Studies program provides the spiritual and practical
                tools needed to navigate the modern world with faith.{" "}
              </p>
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"
              >
                {" "}
                Free Consultation <span>→</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
