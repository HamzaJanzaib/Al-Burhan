"use client";
import { motion } from "motion/react";
import { CheckCircle, Award, Star, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  { num: "01", title: "Internalizing Intention", desc: "Setting a pure spiritual intention and understanding the rewards of preserving the Quran." },
  { num: "02", title: "Initial Assessment", desc: "Detailed evaluation of current reading level and memorization capacity." },
  { num: "03", title: "Structured Memorization", desc: "Surah-by-Surah learning with personalized daily targets tailored to your pace." },
  { num: "04", title: "Revision (Daur)", desc: "Systematic revision of old parts to ensure long-term retention in the heart." },
  { num: "05", title: "Testing & Consolidation", desc: "Periodic oral examinations to verify the strength of your memorization." },
  { num: "06", title: "Certification", desc: "Comprehensive final assessment and receipt of your Hifz completion certificate." },
];

export default function HifzPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden pb-20">
      
      {/* Premium Banner Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Hifz Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d5c5c]/40 via-[#0d5c5c]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6"
          >
            <Heart size={14} className="text-secondary fill-secondary" />
            Spiritual Achievement
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-4 drop-shadow-2xl"
          >
            Hifz Al-Quran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto mb-10"
          >
            Become a Hafiz of the Holy Quran. Our structured program ensures you memorize 
            and retain every Ayah for life with specialized revision techniques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/enroll" className="px-10 py-4 rounded-full bg-secondary text-primary font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
              Start Memorizing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-primary mb-8 border-l-4 border-secondary pl-4 uppercase tracking-tight">The Memorization Path</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all cursor-pointer"
                >
                  <span className="block text-4xl font-black text-[#0d5c5c]/10 group-hover:text-secondary/20 transition-colors mb-4">{step.num}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[40px] bg-[#0d5c5c] text-white relative overflow-hidden">
              <h3 className="text-2xl font-black mb-8 relative z-10">Program Benefits</h3>
              <ul className="space-y-6 relative z-10">
                {["Personalized Revision Plans", "Tajweed Integration", "Spiritual Counseling", "Progress Visualization", "Ijazah upon Completion"].map(item => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle size={20} className="text-secondary shrink-0" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[40px] border-2 border-slate-100 bg-slate-50/50">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6"> <ShieldCheck size={32} /> </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Guarantee</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed"> Our Hifz program is taught by certified Huffaz with years of experience in helping students achieve their goals. </p>
              <Link href="/enroll" className="inline-flex items-center gap-2 font-black text-primary hover:text-secondary transition-colors group"> Book Assessment <span>→</span> </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
         <div className="max-w-4xl mx-auto rounded-[40px] bg-linear-to-br from-[#0d5c5c] to-black p-12 text-center text-white shadow-2xl">
           <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Carry the Quran in Your Heart</h2>
           <p className="text-white/70 mb-10 max-w-lg mx-auto font-medium">Join our global community of Huffaz and start your memorization journey today.</p>
           <Link href="/enroll" className="inline-block px-10 py-5 rounded-full bg-secondary text-primary font-black text-lg hover:scale-105 transition-all">Enroll Today</Link>
         </div>
      </section>
    </div>
  );
}
