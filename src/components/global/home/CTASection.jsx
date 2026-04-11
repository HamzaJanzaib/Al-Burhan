"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLocalePath } from "@/hooks/useLocalePath";

export default function CTASection() {
  const localePath = useLocalePath();
  
  // Custom offset staggered animations for the avatars
  const avatarVariants = {
    float: (custom) => ({
      y: ["0%", custom.up, "0%"],
      rotate: [0, custom.rot, 0],
      transition: {
        duration: custom.dur,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      }
    })
  };

  const avatars = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/1c/66/50/1c6650256e24dfebed638ff03480b661.jpg",
      className: "absolute top-[10%] left-[5%] md:left-[10%] w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-background/20 shadow-2xl z-20",
      custom: { up: "-15%", rot: 3, dur: 6, delay: 0 },
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/e7/2c/96/e72c966b84f6668a7b92711de68caacb.jpg",
      className: "absolute bottom-[15%] left-[15%] md:left-[22%] w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-[6px] border-background/20 shadow-2xl z-20",
      custom: { up: "-20%", rot: -4, dur: 7, delay: 1.5 },
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/a5/ce/e6/a5cee60fe4b8c1f0ad7980faacfcd63e.jpg",
      className: "absolute top-[5%] md:top-[15%] right-[5%] md:right-[12%] w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-background/20 shadow-2xl z-20",
      custom: { up: "-12%", rot: 5, dur: 5, delay: 0.8 },
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/e5/4e/ff/e54eff3280dce95c24a2d3ebff56ed07.jpg",
      className: "absolute bottom-[10%] right-[10%] md:right-[20%] w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-background/20 shadow-2xl z-20",
      custom: { up: "-18%", rot: -2, dur: 6.5, delay: 2.2 },
    }
  ];

  return (
    <section className="relative w-full py-8 md:py-12 bg-background overflow-hidden z-10">
      <div className="w-full xl:max-w-360 mx-auto px-4 lg:px-8">
        
        {/* The Main Shape Canvas */}
        <div 
          className="relative w-full overflow-hidden 
                     rounded-tl-[20px] rounded-tr-[100px] md:rounded-tr-[250px] 
                     rounded-br-[30px] md:rounded-br-[60px] 
                     rounded-bl-[100px] md:rounded-bl-[250px] 
                     bg-primary py-24 md:py-32 lg:py-40 px-6"
        >
          {/* Subtle Islamic Geometric Overlay Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30zM15 15l30 30m-30 0l30-30' fill='none' stroke='%23ffffff' stroke-width='1' /%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Centralized Typography */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.1] tracking-tight drop-shadow-lg"
            >
              Serving the community, working in partnership
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-medium max-w-2xl"
            >
              We believe that our primary role is to serve the needs of the local community
            </motion.p>

            {/* Premium 'Shining' Button Drop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut", type: "spring" }}
              className="pt-6"
            >
              <Link href={localePath("/join")}>
                <button className="relative overflow-hidden cursor-pointer group bg-secondary text-primary-foreground font-black tracking-wide text-base md:text-lg py-5 px-12 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95">
                  <span className="relative z-10 transition-colors duration-300">Join Our Community</span>
                  
                  {/* The Continuous Sweeping 'Shine/Glare' Effect */}
                  <motion.span 
                    animate={{ x: ["-150%", "250%", "250%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] pointer-events-none z-0" 
                  />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Avatar Logic */}
          {avatars.map((avatar) => (
            <motion.div
              key={avatar.id}
              custom={avatar.custom}
              variants={avatarVariants}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              animate="float"
              className={avatar.className}
            >
              <Image 
                src={avatar.src} 
                alt="Community Member" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 80px, (max-width: 1200px) 120px, 150px"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
