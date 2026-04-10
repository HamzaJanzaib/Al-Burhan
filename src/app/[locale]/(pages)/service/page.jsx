"use client";
import { motion } from "motion/react";
import { BookOpen, Heart, Languages, ShieldCheck, Sparkles, Star, Clock, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: "tajweed",
    title: "Tajweed Al-Quran",
    desc: "Master the rules of proper Quranic pronunciation and recitation with certified tutors.",
    icon: <Star size={28} />,
    href: "/service/tajweed",
    color: "from-primary to-primary/80",
    features: ["Proper Pronunciation", "Articulation Points", "Rhythmic Recitation"],
  },
  {
    id: "reading",
    title: "Quran Reading (Nazra)",
    desc: "Learn to read the Quran fluently and accurately from the very basics.",
    icon: <BookOpen size={28} />,
    href: "/service/reading",
    color: "from-secondary to-secondary/80",
    features: ["Arabic Alphabet", "Vowel Marks", "Word Fluency"],
  },
  {
    id: "hifz",
    title: "Quran Memorization (Hifz)",
    desc: "A structured program to help students memorize the Holy Quran with daily revision.",
    icon: <Heart size={28} />,
    href: "/service/hifz",
    color: "from-primary to-secondary",
    features: ["Memory Techniques", "Revision Routines", "Spiritual Growth"],
  },
  {
    id: "studies",
    title: "Islamic Studies",
    desc: "Comprehensive courses on Fiqh, Hadith, Seerah, and Islamic History.",
    icon: <ShieldCheck size={28} />,
    href: "/service/studies",
    color: "from-primary/70 to-primary",
    features: ["Fiqh & Sunnah", "Islamic History", "Moral Etiquette"],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    desc: "Learn to speak, read and write Arabic to understand the Quran directly.",
    icon: <Languages size={28} />,
    href: "/service/arabic",
    color: "from-secondary/80 to-primary/60",
    features: ["Grammar & Vocabulary", "Conversational Skills", "Quranic Translation"],
  },
  {
    id: "kids",
    title: "Quran for Kids",
    desc: "Fun and engaging Quran lessons specially designed for young learners.",
    icon: <Sparkles size={28} />,
    href: "/service/kids",
    color: "from-secondary to-primary",
    features: ["Kid-Friendly Tutors", "Educational Games", "Progress Reports"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden bg-linear-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-primary leading-tight mb-6"
          >
            Our <span className="text-secondary">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Explore our wide range of Quran and Islamic education programs — tailored for every age and level.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 bg-linear-to-r ${course.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${course.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-secondary transition-colors"
                >
                  Learn More <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Start Learning Today</h2>
          <p className="text-muted-foreground mb-8">Try a free trial class with one of our expert tutors and experience the difference.</p>
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-shadow"
          >
            Enroll Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
