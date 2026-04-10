"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="relative z-50">
      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-primary/20 hover:bg-white/20 hover:border-primary/40 transition-all duration-300 shadow-sm cursor-pointer group"
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Globe size={14} className="text-primary" />
        </div>
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
          {currentLang.display}
        </span>
        <ChevronDown
          size={14}
          className={`text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-40 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl overflow-hidden py-1 z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 cursor-pointer ${
                    currentLang.code === lang.code
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={currentLang.code === lang.code ? "scale-110" : ""}>
                      {lang.label}
                    </span>
                  </div>
                  {currentLang.code === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Check size={12} className="text-white" />
                    </motion.div>
                  )}
                </button>
              ))}
            </motion.div>

            {/* Click-outside backdrop */}
            <div
              className="fixed inset-0 z-[-1] pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
