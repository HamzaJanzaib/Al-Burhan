"use client";
import { motion } from "motion/react";
import { CheckCircle, Clock, Users, Star, Sparkles, Heart, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  { num: "01", title: "Fun with Arabic Letters", desc: "Interactive alphabet learning using storytelling and colorful visuals designed for kids." },
  { num: "02", title: "Basic Qaida Mastery", desc: "Patiently building the foundation of Quranic reading through engaging, short lessons." },
  { num: "03", title: "Short Surah Memorization", desc: "Helping kids memorize beautiful short Surahs with perfect pronunciation from an early age." },
  { num: "04", title: "Islamic Manners (Akhlaq)", desc: "Teaching basic Sunnah prayers and daily Islamic etiquette in a fun environment." },
  { num: "05", title: "Interactive Quiz Games", desc: "Testing knowledge through educational games that keep children excited about learning." },
  { num: "06", title: "Kid's Certification", desc: "Celebrating progress with colorful certificates and positive reinforcement." },
];

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Kids Course Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/40 via-secondary/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-primary text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Fun & Engaging
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary leading-tight mb-4 drop-shadow-2xl"
          >
            Quran for Kids
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary/70 text-md font-bold max-w-2xl mx-auto mb-10"
          >
            A playful and gentle introduction to the Holy Quran. We make learning a joyful 
            experience for your little ones through storytelling, games, and patient tutoring.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/enroll?course=Quran for Kids" className="px-10 py-4 rounded-full bg-primary text-white font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
              Book Trial for Kids
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4 uppercase">The Kid's Path</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all cursor-pointer"
                >
                  <span className="block text-4xl font-black text-secondary/10 group-hover:text-primary/20 transition-colors mb-4">{step.num}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[40px] bg-linear-to-br from-[#0d5c5c] to-[#0a4545] text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-black mb-8 relative z-10">Kid's Benefits</h3>
              <ul className="space-y-6 relative z-10">
                {["Patient & Loving Tutors", "Educational Visual Aids", "Progress Incentives", "Flexible timings for school", "Secure Parental Tracking"].map(item => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle size={20} className="text-secondary shrink-0" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[40px] border-2 border-slate-100 bg-slate-50/50">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6"> <GraduationCap size={32} /> </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Secure Future</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium"> We prioritize your child's emotional and spiritual growth through patient and certified Islamic educators. </p>
              <Link href="/enroll" className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"> Start for Free <span>→</span> </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
