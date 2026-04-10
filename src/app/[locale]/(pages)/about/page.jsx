"use client";
import { motion } from "motion/react";
import { BookOpen, Users, Globe, Award, Star, Heart } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Students Enrolled", value: "5,000+", icon: <Users size={24} /> },
  { label: "Expert Tutors", value: "50+", icon: <Star size={24} /> },
  { label: "Countries Reached", value: "30+", icon: <Globe size={24} /> },
  { label: "Courses Offered", value: "6+", icon: <BookOpen size={24} /> },
];

const values = [
  { icon: <Heart size={20} />, title: "Passion for Quran", desc: "We teach with love, patience, and deep reverence for the Holy Quran." },
  { icon: <Award size={20} />, title: "Certified Excellence", desc: "Our tutors are Hafiz and Alim-certified with years of teaching experience." },
  { icon: <Globe size={20} />, title: "Global Reach", desc: "Connecting students worldwide with authentic Islamic education from home." },
  { icon: <BookOpen size={20} />, title: "Structured Curriculum", desc: "From Qaida to Tajweed — a clear path designed for every stage of learning." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">

      {/* Hero */}
      <section className="relative py-28 px-6 text-center bg-linear-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-primary leading-tight mb-6"
          >
            About <span className="text-secondary">AL Burhan</span> Quran Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            AL Burhan Quran Academy is a leading online Islamic education institute dedicated to
            spreading the light of the Holy Quran to every corner of the world. We blend
            authentic Islamic knowledge with modern teaching methods.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                {s.icon}
              </div>
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="text-muted-foreground mt-3">Principles that guide every class we teach</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Begin Learning?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of students learning Quran from certified tutors worldwide.</p>
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
          >
            Enroll Now <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
