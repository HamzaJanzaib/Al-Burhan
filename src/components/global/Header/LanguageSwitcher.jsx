"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCode, setHoveredCode] = useState(null);

  const languages = [
    { code: "en", label: "English", display: "EN" },
    { code: "ur", label: "اردو", display: "اردو" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // 3D Dropdown Variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      rotateX: -15,
      y: 10,
      scale: 0.95,
      transformPerspective: 1000,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      rotateX: -10,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-50 group">
      {/* Attractive Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-background/10 backdrop-blur-lg border border-primary/20 hover:border-primary/50 hover:bg-background/20 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] cursor-pointer relative overflow-hidden active:scale-95"
      >
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: [1, 1.1, 1],
          }}
          transition={{
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          }}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary"
        >
          <Globe size={14} />
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>

        <span className="text-sm font-bold text-primary uppercase tracking-wider relative">
          {currentLang.display}
        </span>

        <ChevronDown
          size={14}
          className={`text-primary/70 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Advanced 3D Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ transformOrigin: "top right" }}
              className="absolute right-0 mt-4 w-44 bg-background/95 backdrop-blur-2xl border border-primary/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden p-1.5 z-50"
            >
              <div className="relative space-y-1">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredCode(lang.code)}
                    onMouseLeave={() => setHoveredCode(null)}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer z-10 ${
                      currentLang.code === lang.code
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{lang.label}</span>

                    {currentLang.code === lang.code && (
                      <motion.div
                        layoutId="active-check"
                        className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-sm"
                      >
                        <Check size={12} strokeWidth={3} />
                      </motion.div>
                    )}

                    {/* Sliding Highlight Pill */}
                    {(hoveredCode === lang.code ||
                      currentLang.code === lang.code) && (
                      <motion.div
                        layoutId="lang-highlight"
                        className={`absolute inset-0 rounded-xl z-0 border ${
                          currentLang.code === lang.code
                            ? "bg-primary/5 border-primary/10"
                            : "bg-gray-50/80 border-transparent"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Gold Bottom Accent */}
              <div className="h-0.5 bg-linear-to-r from-primary/20 via-secondary to-primary/20 mt-1 opacity-50"></div>
            </motion.div>

            {/* Premium backdrop for closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[-1] cursor-default"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
