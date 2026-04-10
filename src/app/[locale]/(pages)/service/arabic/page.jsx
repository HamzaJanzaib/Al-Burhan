"use client";
import { motion } from "motion/react";
import { CheckCircle, Clock, Users, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Arabic Alphabet & Pronunciation", desc: "Master all 28 Arabic letters with their proper sounds and forms." },
  { num: "02", title: "Essential Grammar (Nahw)", desc: "Understand basic Arabic sentence structure, nouns, and verbs." },
  { num: "03", title: "Vocabulary Building", desc: "Learn high-frequency Quranic and Modern Standard Arabic words." },
  { num: "04", title: "Quranic Translation Skills", desc: "Understand the direct meaning of Quranic verses without translation books." },
  { num: "05", title: "Reading & Writing Practice", desc: "Develop the ability to read Arabic texts and write simple sentences." },
  { num: "06", title: "Conversational Arabic", desc: "Practice everyday Arabic conversations to build speaking confidence." },
];

export default function ArabicPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-28 px-6 bg-linear-to-br from-secondary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">Course</span>
            <h1 className="text-5xl font-bold text-primary mb-5 leading-tight">
              Arabic <span className="text-secondary">Language</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Learn Arabic — the language of the Quran. Understand the holy verses directly and communicate in the language of over 400 million people worldwide.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[["Beginner to Advanced", <Users size={16} />], ["Flexible Schedule", <Clock size={16} />], ["Native Speakers", <Star size={16} />]].map(([label, icon]) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <span className="text-secondary">{icon}</span> {label}
                </div>
              ))}
            </div>
            <Link href="/enroll" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-shadow">
              Enroll Now <ChevronRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="w-full md:w-80 bg-card rounded-3xl border border-border p-6 shadow-xl"
          >
            <h3 className="font-bold text-primary text-lg mb-4">What you'll learn</h3>
            <ul className="space-y-3">
              {["Arabic alphabet mastery", "Essential grammar rules", "High-frequency vocabulary", "Quran direct translation", "Reading & writing skills", "Basic conversation"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Course Curriculum</h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-start gap-5 bg-card rounded-2xl p-5 border border-border hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="text-3xl font-black text-primary/20 shrink-0">{step.num}</span>
              <div>
                <h3 className="font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="text-3xl font-bold text-primary mb-4">Speak the Language of the Quran</h2>
        <p className="text-muted-foreground mb-8">Start your Arabic journey today with interactive, live one-on-one sessions.</p>
        <Link href="/enroll" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-shadow">
          Book Free Trial →
        </Link>
      </section>
    </div>
  );
}
