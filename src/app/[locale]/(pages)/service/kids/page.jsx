"use client";
import { motion } from "motion/react";
import { CheckCircle, Clock, Users, Star, ChevronRight, Smile, Trophy, GamepadIcon } from "lucide-react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Placement Assessment", desc: "A gentle evaluation to understand your child's current knowledge and learning pace." },
  { num: "02", title: "Arabic Alphabet & Noorani Qaida", desc: "Fun-filled sessions introducing the Arabic alphabet through games and stories." },
  { num: "03", title: "Short Surah Memorization", desc: "Memorize short Surahs from Juz Amma using repetition and audio techniques." },
  { num: "04", title: "Basic Tajweed Rules", desc: "Age-appropriate introduction to Tajweed rules through visual aids and cartoons." },
  { num: "05", title: "Progress Reports & Rewards", desc: "Parents receive weekly progress reports and children earn stars and certificates." },
  { num: "06", title: "Completion Certificate", desc: "A special graduation ceremony and certificate for young Quran learners." },
];

const features = [
  { icon: <Smile size={24} />, title: "Fun & Engaging", desc: "Interactive lessons with stories, games, and visual aids designed for kids." },
  { icon: <Users size={24} />, title: "Female Tutors Available", desc: "We offer certified female tutors for young girls and those who prefer a female instructor." },
  { icon: <Trophy size={24} />, title: "Rewards System", desc: "Children earn stars, badges, and certificates to keep them motivated." },
  { icon: <Clock size={24} />, title: "Short Sessions", desc: "Classes are 30-45 minutes long — just right for young attention spans." },
];

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 px-6 bg-linear-to-br from-secondary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
              For Children
            </span>
            <h1 className="text-5xl font-bold text-primary mb-5 leading-tight">
              Quran <span className="text-secondary">for Kids</span> 🌙
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A safe, fun, and nurturing online Quran program designed specially for children aged 4–14.
              Our patient and friendly tutors make learning the Quran an enjoyable adventure.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[["Ages 4–14", <Users size={16} />], ["30-45 min classes", <Clock size={16} />], ["Certified Tutors", <Star size={16} />]].map(([label, icon]) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <span className="text-secondary">{icon}</span> {label}
                </div>
              ))}
            </div>
            <Link href="/enroll" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-shadow">
              Enroll Your Child <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-80 bg-card rounded-3xl border border-border p-6 shadow-xl"
          >
            <h3 className="font-bold text-primary text-lg mb-4">What your child will learn</h3>
            <ul className="space-y-3">
              {["Arabic Alphabet (Qaida)", "Short Surah memorization", "Basic Tajweed rules", "Islamic supplications (Duas)", "Love and respect for Quran", "Graduation certificate"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Kids Love Us */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Kids Love Learning With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-3">
                  {f.icon}
                </div>
                <h3 className="font-bold text-primary mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Kids Program Structure</h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-start gap-5 bg-card rounded-2xl p-5 border border-border hover:border-secondary/30 hover:shadow-md transition-all"
            >
              <span className="text-3xl font-black text-secondary/30 shrink-0">{step.num}</span>
              <div>
                <h3 className="font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-muted/30">
        <h2 className="text-3xl font-bold text-primary mb-4">Give Your Child the Gift of Quran 🎁</h2>
        <p className="text-muted-foreground mb-8">Register for a free trial class today — your child will love it!</p>
        <Link href="/enroll" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-shadow">
          Start Free Trial →
        </Link>
      </section>
    </div>
  );
}
