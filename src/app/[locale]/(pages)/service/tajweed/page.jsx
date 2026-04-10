"use client";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  ChevronRight,
  BookOpen,
  Heart,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Introduction to Tajweed",
    desc: "Understand the science of Tajweed and its importance in Quranic recitation.",
  },
  {
    num: "02",
    title: "Makhaarij Al-Huroof",
    desc: "Master the correct articulation points for every Arabic letter.",
  },
  {
    num: "03",
    title: "Rules of Noon & Meem",
    desc: "In-depth study of Ghunnah, Idgham, Ikhfa, and Iqlab rules.",
  },
  {
    num: "04",
    title: "Madd (Prolongation) Rules",
    desc: "Learn all types of Madd and when to apply them correctly.",
  },
  {
    num: "05",
    title: "Guided Live Recitation",
    desc: "Practice full Surahs with real-time tutor feedback and correction.",
  },
  {
    num: "06",
    title: "Oral Assessment & Certificate",
    desc: "Complete a final recitation test and receive your Tajweed certificate.",
  },
];

export default function TajweedPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      {/* Premium Banner Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Tajweed Banner"
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
            <Award size={14} className="text-secondary fill-secondary" />
            Certified Course
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-4 drop-shadow-2xl"
          >
            Tajweed Al-Quran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto mb-10"
          >
            Perfect your pronunciation and recite the Holy Quran with the beauty
            and precision it deserves. Our expert tutors guide you through every
            rule with live, interactive sessions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/enroll?course=Tajweed Al-Quran"
              className="px-10 py-4 rounded-full bg-secondary text-primary font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4">
              Course Curriculum
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

          {/* Sidebar / Outcomes */}
          <div className="space-y-8">
            <div className="p-10 rounded-[40px] bg-primary text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-8 relative z-10">
                Learning Outcomes
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Master 28 Articulation Points",
                  "Apply Ghunnah & Ikhfa",
                  "Perfect Madd Pro-longation",
                  "Oral Assessment & Exam",
                  "Recitation Certification",
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
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Start with a Trial
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Experience the teaching style of our expert tutors with a 3-day
                free trial class. No credit card required.
              </p>
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"
              >
                Book Trial <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
