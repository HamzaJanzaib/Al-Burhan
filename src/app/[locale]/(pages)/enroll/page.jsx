"use client";
import { motion } from "motion/react";
import { CheckCircle, Globe, Clock, User, Sparkles, ChevronRight, Star, GraduationCap, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const courses = [
  { title: "Tajweed Al-Quran", href: "/service/tajweed", duration: "3-6 months" },
  { title: "Quran Reading (Nazra)", href: "/service/reading", duration: "2-4 months" },
  { title: "Quran Memorization (Hifz)", href: "/service/hifz", duration: "1-3 years" },
  { title: "Islamic Studies", href: "/service/studies", duration: "Ongoing" },
  { title: "Arabic Language", href: "/service/arabic", duration: "6-12 months" },
  { title: "Quran for Kids", href: "/service/kids", duration: "Flexible" },
];

const highlights = [
  { icon: <User size={20} />, title: "One-on-One", desc: "Private sessions tailored to your pace." },
  { icon: <Clock size={20} />, title: "Flexible Timing", desc: "Choose slots that fit your daily schedule." },
  { icon: <GraduationCap size={20} />, title: "Certified Tutors", desc: "Learn from teachers with Ijazah & experience." },
  { icon: <ShieldCheck size={20} />, title: "Secure Future", desc: "Building a strong spiritual foundation." },
];

function EnrollmentContent() {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      const course = courses.find((c) => c.title === courseParam);
      if (course) setSelectedCourse(course.title);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12">
        <div className="w-20 h-20 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6 shadow-xl">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-black text-primary mb-4">Request Received!</h3>
        <p className="text-slate-500 font-medium mb-8"> Our team will contact you within 24 hours to confirm your free trial class. Get ready for a blessed journey! </p>
        <button onClick={() => setSubmitted(false)} className="px-8 py-3 rounded-xl border-2 border-slate-100 text-slate-500 font-black hover:bg-slate-50 transition-all"> Back to Form </button>
      </motion.div>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
          <input required type="text" placeholder="Ahmed" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 text-slate-900 font-bold focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
          <input required type="text" placeholder="Khan" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 text-slate-900 font-bold focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
        <input required type="email" placeholder="you@example.com" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 text-slate-900 font-bold focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp / Phone</label>
        <input type="tel" placeholder="+1 234 567 8900" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 text-slate-900 font-bold focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Choose Your Path</label>
        <select required value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 text-slate-900 font-bold focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-sm appearance-none cursor-pointer"
        >
          <option value="">— Select a Course —</option>
          {courses.map((c) => (
            <option key={c.href} value={c.title}>{c.title} ({c.duration})</option>
          ))}
        </select>
      </div>

      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
        className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 group"
      >
        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
        Book My Free Trial Class
      </motion.button>
      <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">No payment required • 24h response time</p>
    </motion.form>
  );
}

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left Column: Details */}
      <section className="relative w-full md:w-[45%] lg:w-[40%] bg-primary p-12 lg:p-20 flex flex-col justify-between overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary font-black shadow-lg">B</div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm">AL Burhan Academy</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8"
          >
            Start Your <br /> <span className="text-secondary italic">Blessed</span> Journey
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg font-medium mb-12 max-w-md">
            Join thousands of students globally in mastering the Holy Quran and Islamic sciences through a structured, personalized approach.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-all shadow-xl border border-white/5"> {h.icon} </div>
                <h3 className="text-white font-bold text-sm mb-1">{h.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="relative z-10 pt-12 border-t border-white/10 mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
             {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden"> <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" /> </div>)}
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest italic">Join 500+ Active Students</p>
        </motion.div>
      </section>

      {/* Right Column: Form */}
      <section className="flex-1 p-8 lg:p-20 flex items-center justify-center bg-slate-50/30">
        <div className="w-full max-w-xl">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-800 mb-2">Book Free Trial</h2>
            <p className="text-slate-400 font-medium">Try our teaching style before you commit. Completely free.</p>
          </div>
          
          <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-slate-100 relative">
            <Suspense fallback={<div className="text-center py-20 text-slate-400 font-black animate-pulse">Initializing Academy Portal...</div>}>
              <EnrollmentContent />
            </Suspense>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
             <Star className="text-secondary" size={24} />
             <Heart className="text-secondary" size={24} />
             <ShieldCheck className="text-secondary" size={24} />
             <Globe className="text-secondary" size={24} />
          </div>
        </div>
      </section>
    </div>
  );
}
