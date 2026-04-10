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
      content:
        "Al-Burhan Quran Academy has completely transformed my understanding of the Quran. The tutors are patient and the Tajweed lessons are exceptionally clear.",
      author: "Ahmed Hassan",
      role: "Student, Tajweed Course",
      rating: 5,
    },
    {
      id: 2,
      title: "Perfect for Busy Professionals",
      content:
        "As someone with a tight schedule, the flexible timings offered here are a blessing. I can now recite the Quran with much more confidence thanks to my amazing teacher.",
      author: "Sara Ibrahim",
      role: "Professional, Nazra Course",
      rating: 5,
    },
    {
      id: 3,
      title: "Highly Qualified & Dedicated Teachers",
      content:
        "The level of expertise the teachers have is remarkable. They don't just teach recitation; they inspire a deeper spiritual connection with the Holy Book.",
      author: "Omar Khalid",
      role: "Hifz Student",
      rating: 5,
    },
    {
      id: 4,
      title: "Engaging Lessons for Children",
      content:
        "My kids absolutely love their classes! The teachers use creative methods to keep them engaged, making Quran learning their favorite part of the day.",
      author: "Fatima Malik",
      role: "Parent",
      rating: 5,
    },
    {
      id: 5,
      title: "Global Reach, Personal Touch",
      content:
        "Even though I'm in the UK, the time zones are handled perfectly. It feels like a one-on-one session right in my living room. Truly impressive service.",
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
    <section className="relative w-full bg-background py-12 px-6 lg:px-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Animated floating icons/shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-primary/10 hidden lg:block"
      >
        <Star size={40} />
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-secondary/10 hidden lg:block"
      >
        <Quote size={60} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <Star size={14} className="text-secondary fill-secondary animate-pulse" />
            <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">
              Blessed Community
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Voices of <span className="text-primary italic">Transformation</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Join thousands of students who have embarked on a journey of clarity, 
            connection, and Quranic excellence.
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
                y: -15,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className={`group relative p-10 rounded-[40px] shadow-sm flex flex-col justify-between border border-slate-100 bg-background transition-all duration-500 hover:shadow-[0_40px_80px_rgba(13,92,92,0.12)] hover:bg-primary hover:border-primary cursor-pointer overflow-hidden ${
                index < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              {/* Card Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <Quote
                  size={48}
                  className="mb-8 opacity-10 text-primary group-hover:text-secondary group-hover:opacity-100 transition-all duration-500 transform group-hover:-rotate-12"
                />

                <h3 className="text-2xl font-bold mb-5 text-slate-900 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed mb-10 text-slate-500 group-hover:text-white/80 transition-colors duration-300 font-medium italic">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-xl group-hover:border-secondary transition-all duration-300 transform group-hover:scale-110">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${item.id + 10}`}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-base leading-none text-slate-900 group-hover:text-white transition-colors duration-300">
                      {item.author}
                    </p>
                    <p className="text-xs mt-2 text-primary font-bold uppercase tracking-wider group-hover:text-secondary transition-colors duration-300">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 bg-primary/5 p-2 rounded-full px-3 group-hover:bg-white/10 transition-colors duration-300">
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
                        className="fill-secondary text-secondary"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
