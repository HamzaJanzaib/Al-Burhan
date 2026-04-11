"use client";
import { motion } from "motion/react";
import { BookOpen, Users, Globe, Award, Star, Heart } from "lucide-react";
import Link from "next/link";
import { useLocalePath } from "@/hooks/useLocalePath";
import AboutStatsSection from "@/components/global/home/opportunitiesSec";
import HeroSection from "@/components/global/home/AboutHero";
import LearningNewsSection from "@/components/global/home/LearningNews";

const values = [
  {
    icon: <Heart size={20} />,
    title: "Passion for Quran",
    desc: "We teach with love, patience, and deep reverence for the Holy Quran.",
  },
  {
    icon: <Award size={20} />,
    title: "Certified Excellence",
    desc: "Our tutors are Hafiz and Alim-certified with years of teaching experience.",
  },
  {
    icon: <Globe size={20} />,
    title: "Global Reach",
    desc: "Connecting students worldwide with authentic Islamic education from home.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Structured Curriculum",
    desc: "From Qaida to Tajweed — a clear path designed for every stage of learning.",
  },
];

export default function AboutPage() {
  const localePath = useLocalePath();
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />

      <AboutStatsSection />

      <section className="py-24 px-6 bg-primary/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Our Core Values
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full" />
            <p className="text-slate-500 mt-6 text-lg font-medium">
              The principles that guide every session and every interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-background rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LearningNewsSection />

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-primary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Begin Your <br /> Blessed Journey?
          </h2>
          <p className="text-white/80 text-lg mb-12 font-medium">
            Join thousands of students across the globe learning the Quran with
            love and precision.
          </p>
          <Link
            href={localePath("/enroll")}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-secondary text-primary font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Enroll Now <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
