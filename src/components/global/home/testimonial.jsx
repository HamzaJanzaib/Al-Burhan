"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Life-Changing Quranic Education",
      content: "Al-Burhan Quran Academy has completely transformed my understanding of the Quran. The tutors are patient and the Tajweed lessons are exceptionally clear.",
      author: "Ahmed Hassan",
      role: "Student, Tajweed Course",
      rating: 5,
    },
    {
      id: 2,
      title: "Perfect for Busy Professionals",
      content: "As someone with a tight schedule, the flexible timings offered here are a blessing. I can now recite the Quran with much more confidence thanks to my amazing teacher.",
      author: "Sara Ibrahim",
      role: "Professional, Nazra Course",
      rating: 5,
    },
    {
      id: 3,
      title: "Highly Qualified & Dedicated Teachers",
      content: "The level of expertise the teachers have is remarkable. They don't just teach recitation; they inspire a deeper spiritual connection with the Holy Book.",
      author: "Omar Khalid",
      role: "Hifz Student",
      rating: 5,
    },
    {
      id: 4,
      title: "Engaging Lessons for Children",
      content: "My kids absolutely love their classes! The teachers use creative methods to keep them engaged, making Quran learning their favorite part of the day.",
      author: "Fatima Malik",
      role: "Parent",
      rating: 5,
    },
    {
      id: 5,
      title: "Global Reach, Personal Touch",
      content: "Even though I'm in the UK, the time zones are handled perfectly. It feels like a one-on-one session right in my living room. Truly impressive service.",
      author: "Zeeshan Khan",
      role: "Intermediate Student",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6 + i * 0.1, 
      },
    }),
  };

  return (
    <section className="w-full bg-primary/5 py-12 md:py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 bg-primary/10 rounded-full mb-4"
          >
            <Star size={14} className="text-secondary fill-secondary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Testimonials</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Voices From Our Blessed Community
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See what our students and parents say about their journey towards Quranic excellence.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                backgroundColor: "#0d5c5c",
                transition: { duration: 0.1 }
              }}
              className={`group relative p-8 rounded-[32px] shadow-sm flex flex-col justify-between border border-slate-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer ${
                index < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div>
                <Quote 
                  size={40} 
                  className="mb-6 opacity-20 text-primary group-hover:text-secondary group-hover:opacity-60 transition-colors duration-300" 
                />
                
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-base leading-relaxed mb-8 text-slate-600 group-hover:text-white/90 transition-colors duration-300 font-light">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm group-hover:border-secondary/30 transition-colors duration-300">
                    <Image 
                      src={`https://i.pravatar.cc/150?u=${item.id + 10}`} 
                      alt={item.author} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none text-slate-900 group-hover:text-white transition-colors duration-300">{item.author}</p>
                    <p className="text-xs mt-1 text-primary font-medium group-hover:text-secondary transition-colors duration-300">
                      {item.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={starVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Star 
                        size={14} 
                        className="fill-secondary text-secondary group-hover:fill-white group-hover:text-white transition-colors duration-300 cursor-pointer" 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;