"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "react-feather";
import { motion, AnimatePresence } from "motion/react";
import "../../../i18n";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "/images/english-flag-image.png" }, // Ensure these paths exist
    { code: "fr", label: "Français", flag: "/images/spanish-flag-image.png" }, // Using existing asset path
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--light-bg)] transition shadow-sm cursor-pointer"
      >
        <Globe size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white border border-[var(--light-border)] rounded-xl shadow-lg overflow-hidden"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-[var(--more-light-bg)] cursor-pointer ${
                    currentLang.code === lang.code
                      ? "bg-[var(--light-bg)] text-[var(--color-primary)] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{lang.label}</span>
                  </div>
                  {currentLang.code === lang.code && (
                    <Check
                      size={16}
                      className="text-[var(--color-secondary)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
