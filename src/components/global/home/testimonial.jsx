"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "A Truly Global Learning Experience",
      content: "The tech institute allowed me to connect with developers from different cultures while getting a world-class foundation in software engineering.",
      author: "Ayaan Anas",
      role: "Frontend Developer",
      rating: 5,
    },
    {
      id: 2,
      title: "Education That Builds Confidence",
      content: "The hands-on coding approach helped me grow both technically and personally. I graduated with a portfolio that got me hired.",
      author: "Rayan Imran",
      role: "Full Stack Engineer",
      rating: 5,
    },
    {
      id: 3,
      title: "Industry-Ready Skills",
      content: "The curriculum is updated constantly. I wasn't just learning syntax; I was learning how to solve real business problems.",
      author: "Junaid Ali",
      role: "Backend Dev",
      rating: 5,
    },
    {
      id: 4,
      title: "Supportive Mentors",
      content: "The mentors here don't just teach; they guide. Their industry experience is invaluable for anyone starting out.",
      author: "Salman Ahad",
      role: "UI/UX Designer",
      rating: 5,
    },
    {
      id: 5,
      title: "Life-Changing Opportunity",
      content: "I shifted my career from finance to tech in 6 months. Best decision I ever made for my professional life.",
      author: "Talha Bilal",
      role: "Data Scientist",
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
    <section className="w-full bg-green-50 py-5 md:py-15 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-emerald-500/20 bg-emerald-50 rounded-full mb-4"
          >
            <Star size={14} className="text-emerald-600 fill-emerald-600" />
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Testimonials</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Voices From Our Global Community
          </h2>
        </div>

        {/* Updated Grid: 6 columns total to allow for half-half (3/6) and third (2/6) spacing */}
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
                backgroundColor: "#1a3a32",
                transition: { duration: 0.1 }
              }}
              className={`group relative p-6 rounded-[32px] shadow-sm flex flex-col justify-between border border-slate-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 ${
                // First two cards take 3/6 (half) space
                index < 2 ? "md:col-span-3" : "md:col-span-2" // Others take 2/6 (one third) space
              }`}
            >
              <div>
                <Quote 
                  size={40} 
                  className="mb-6 opacity-20 text-emerald-600 group-hover:text-emerald-400 group-hover:opacity-60 transition-colors duration-300" 
                />
                
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-emerald-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-base leading-relaxed mb-8 text-slate-600 group-hover:text-emerald-50/90 transition-colors duration-300 font-light">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm group-hover:border-emerald-500/30 transition-colors duration-300">
                    <Image 
                      src={`https://i.pravatar.cc/150?u=${item.id + 10}`} 
                      alt={item.author} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none text-slate-900 group-hover:text-white transition-colors duration-300">{item.author}</p>
                    <p className="text-xs mt-1 text-emerald-600 font-medium group-hover:text-emerald-400 transition-colors duration-300">
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
                        className="fill-orange-400 text-orange-400 group-hover:fill-white group-hover:text-white transition-colors duration-300 cursor-pointer" 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;