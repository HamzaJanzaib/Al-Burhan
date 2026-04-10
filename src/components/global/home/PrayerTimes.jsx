"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sunrise, Sun, CloudSun, Sunset, Moon, Star } from "lucide-react";

export default function PrayerTimes() {
  const prayers = [
    { name: "Fajr", icon: Sunrise, time: "3:24 AM", iqamah: "4:15 AM", id: 1 },
    { name: "Zuhr", icon: Sun, time: "01:09 PM", iqamah: "1:30 PM", id: 2 },
    { name: "Asr", icon: CloudSun, time: "6:29 PM", iqamah: "7:30 PM", id: 3 },
    { name: "Magrib", icon: Sunset, time: "9:01 PM", iqamah: "9:01 PM", id: 4 },
    { name: "Isha", icon: Moon, time: "10:10 PM", iqamah: "10:45 PM", id: 5 },
    { name: "Jummah", icon: Star, time: "01:10 PM", iqamah: "02:45 PM", id: 6 },
  ];

  return (
    <section className="w-full bg-background relative z-20 overflow-hidden">
      <div className="w-full xl:max-w-340 mx-auto px-4 lg:px-8">
        {/* Container for the hanging banners */}
        <div className="flex flex-wrap gap-1 lg:flex-nowrap justify-center w-full pb-20 pt-0 relative">
          
          {/* Base horizontal line representing the top ceiling connecting all banners */}
          <div className="absolute top-0 left-0 w-full h-px bg-border z-0" />
          
          {prayers.map((prayer) => (
             <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PrayerCard({ prayer }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = prayer.icon;

  return (
    <div 
      className="relative h-[250px] w-[50%] md:w-[33.333%] lg:w-full min-w-[140px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        The Hanging Banner. 
        Negative margin (-mr-[1px]) avoids double thickness borders between adjacent sibling cards.
      */}
      <motion.div 
        initial={false}
        animate={{ 
          height: isHovered ? "280px" : "220px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`absolute top-0 left-0 right-0 rounded-b-[70px] flex flex-col items-center pt-8 cursor-pointer overflow-hidden border border-t-0 transition-colors duration-400 lg:-mr-px
          ${isHovered 
            ? 'bg-primary border-primary z-50' 
            : 'bg-background border-border z-10'
          }
        `}
      >
        {/* Subtle Geometric Pattern for Active Hover State */}
        <AnimatePresence>
          {isHovered && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.15 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.4 }}
               className="absolute inset-0 pointer-events-none mix-blend-overlay"
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
               }}
             />
          )}
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center w-full h-full">
           <Icon size={38} strokeWidth={1.5} className="mb-4 transition-colors duration-300 text-secondary" />
           
           <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-2 transition-colors duration-300 ${isHovered ? 'text-primary-foreground' : 'text-primary'}`}>
             {prayer.name}
           </h3>
           
           <p className={`text-base md:text-lg font-black tracking-wider mb-0.5 transition-colors duration-300 ${isHovered ? 'text-primary-foreground' : 'text-foreground'}`}>
             {prayer.time}
           </p>
           
           <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-auto transition-colors duration-300 ${isHovered ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
             Iqamah: {prayer.iqamah}
           </p>

           <div className="mt-6 mb-6">
              <motion.div 
                animate={{ scale: isHovered ? 1.2 : 1 }}
                className="w-3.5 h-3.5 rounded-full border-[3px] border-secondary bg-transparent ring-4 ring-transparent transition-all duration-300 group-hover:ring-secondary/20" 
              />
           </div>
        </div>
      </motion.div>
    </div>
  )
}
