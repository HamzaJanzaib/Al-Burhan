"use client";
import { motion } from "motion/react";
import { CheckCircle, Globe, Clock, User, Sparkles, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courses = [
  { title: "Tajweed Al-Quran", href: "/service/tajweed", duration: "3–6 months" },
  { title: "Quran Reading (Nazra)", href: "/service/reading", duration: "2–4 months" },
  { title: "Quran Memorization (Hifz)", href: "/service/hifz", duration: "1–3 years" },
  { title: "Islamic Studies", href: "/service/studies", duration: "Ongoing" },
  { title: "Arabic Language", href: "/service/arabic", duration: "6–12 months" },
  { title: "Quran for Kids", href: "/service/kids", duration: "Flexible" },
];

const perks = [
  { icon: <Globe size={20} />, title: "100% Online", desc: "Learn from the comfort of your home, anywhere in the world." },
  { icon: <User size={20} />, title: "One-on-One Classes", desc: "Private sessions dedicated fully to your progress and pace." },
  { icon: <Clock size={20} />, title: "Flexible Timing", desc: "Choose class times that fit your daily schedule perfectly." },
  { icon: <Star size={20} />, title: "Free Trial Class", desc: "Try before you commit — your first class is completely free." },
  { icon: <CheckCircle size={20} />, title: "Certified Tutors", desc: "All our teachers hold Ijazah and formal teaching qualifications." },
  { icon: <Sparkles size={20} />, title: "Progress Tracking", desc: "Regular reports and assessments to monitor your improvement." },
];

export default function EnrollPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center bg-linear-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4"
          >
            Start Your Journey
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-primary leading-tight mb-5"
          >
            Enroll in <span className="text-secondary">Online Classes</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Join thousands of students learning Quran and Islamic education online with AL Burhan Academy. Your first class is free.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Why Enroll With Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-3">Book Your Free Trial</h2>
            <p className="text-muted-foreground">Fill in the form below and we'll be in touch within 24 hours.</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-3xl border border-secondary/30 p-10 text-center shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your enrollment request has been received. Our team will contact you within 24 hours to confirm your free trial class.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl border border-border p-8 shadow-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1.5">First Name *</label>
                  <input required type="text" placeholder="e.g. Ahmed"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1.5">Last Name *</label>
                  <input required type="text" placeholder="e.g. Khan"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Email Address *</label>
                <input required type="email" placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">WhatsApp / Phone</label>
                <input type="tel" placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Select Course *</label>
                <select required value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                >
                  <option value="">— Choose a course —</option>
                  {courses.map((c) => (
                    <option key={c.href} value={c.title}>{c.title} ({c.duration})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Any Additional Message</label>
                <textarea rows={3} placeholder="Tell us about your current level or any specific needs..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-lg hover:shadow-primary/30 transition-shadow flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                Book My Free Trial Class
              </motion.button>
              <p className="text-center text-xs text-muted-foreground">No payment required. We'll contact you within 24 hours.</p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">Browse Our Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <motion.div key={c.href} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={c.href}
                className="group flex items-center justify-between p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-sm font-bold text-primary">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.duration}</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
