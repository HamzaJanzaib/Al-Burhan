"use client";
import { motion } from "motion/react";
import {
  BookOpen,
  Heart,
  Languages,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: "tajweed",
    title: "Tajweed Al-Quran",
    desc: "Master the rules of proper Quranic pronunciation and articulation with expert tutors.",
    icon: <Star size={24} />,
    href: "/service/tajweed",
    img: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800",
    color: "from-primary to-primary/80",
    features: [
      "Proper Pronunciation",
      "Articulation Points",
      "Rhythmic Recitation",
    ],
  },
  {
    id: "reading",
    title: "Quran Reading (Nazra)",
    desc: "A solid foundation for beginners to read the Holy Quran with fluency and accuracy.",
    icon: <BookOpen size={24} />,
    href: "/service/reading",
    img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
    color: "from-secondary to-secondary/80",
    features: ["Arabic Alphabet", "Vowel Marks", "Word Fluency"],
  },
  {
    id: "hifz",
    title: "Quran Memorization",
    desc: "Guided Hifz program with systematic revision to help you preserve the Quran in your heart.",
    icon: <Heart size={24} />,
    href: "/service/hifz",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
    color: "from-[#0d5c5c] to-secondary",
    features: ["Memory Techniques", "Revision Routines", "Daily Tracking"],
  },
  {
    id: "studies",
    title: "Islamic Studies",
    desc: "Learn Fiqh, Hadith, Seerah, and Islamic history to live a life aligned with Sunnah.",
    icon: <ShieldCheck size={24} />,
    href: "/service/studies",
    img: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800",
    color: "from-primary/70 to-primary",
    features: ["Fiqh & Sunnah", "Islamic History", "Moral Etiquette"],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    desc: "Unlock the literal meaning of the Quran by mastering the language of revelation.",
    icon: <Languages size={24} />,
    href: "/service/arabic",
    img: "https://images.unsplash.com/photo-1566129850225-bc281f21570d?auto=format&fit=crop&q=80&w=800",
    color: "from-secondary/80 to-primary/60",
    features: [
      "Grammar & Vocab",
      "Quranic Translation",
      "Conversational Skills",
    ],
  },
  {
    id: "kids",
    title: "Quran for Kids",
    desc: "Kid-centric lessons designed to make learning the Quran fun, engaging, and easy.",
    icon: <Sparkles size={24} />,
    href: "/service/kids",
    img: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80&w=800",
    color: "from-secondary to-primary",
    features: ["Visual Learning", "Reward Systems", "Gentle Tutoring"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="Academy Banner"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/60 to-primary/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6"
          >
            <Star size={14} className="text-secondary fill-secondary" />
            Explore Our Blessed Path
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-3 drop-shadow-2xl"
          >
            Our Certified Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-md font-medium max-w-2xl mx-auto"
          >
            Authentic Islamic education designed for modern learners. From
            fundamental Reading to advanced Tajweed and Hifz.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-6 max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Background */}
              <Image
                src={course.img}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/10 to-transparent transition-all duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-background/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:bg-background group-hover:text-secondary transition-all">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-primary-foreground">
                    {course.title}
                  </h3>
                </div>

                <p className="text-white/80 text-sm font-medium mb-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 line-clamp-2">
                  {course.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {course.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-background/10 rounded-full border border-white/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href={course.href}
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:gap-4 transition-all group-hover:text-white"
                >
                  Explore Course{" "}
                  <ChevronRight
                    size={18}
                    className="text-secondary group-hover:text-white"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
