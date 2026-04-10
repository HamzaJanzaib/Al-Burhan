"use client";
import { createContext, useContext, useState } from "react";
import servicesData from "../components/constants/service";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  ShieldCheck,
  Sparkles,
  Heart,
  Languages,
  Zap,
} from "lucide-react";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper for multi-language title/description
  const getTranslatedServices = () => {
    const lang = i18n.language || "en";
    return servicesData.map((service) => ({
      ...service,
      title: service.title[lang] || service.title.en,
      description: service.description[lang] || service.description.en,
    }));
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const gridServices = [
    {
      id: "tajweed-al-quran",
      title: t("service.tajweed_al_quran.title"),
      description: t("service.tajweed_al_quran.description"),
      image: "/images/tajweed.webp",
      color: "var(--color-primary)",
      accent: "var(--color-primary-light)",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Proper Pronunciation", "Articulation Points", "Rhythmic Recitation"],
      process: [
        t("service.tajweed_al_quran.process_list.introduction"),
        t("service.tajweed_al_quran.process_list.rules"),
        t("service.tajweed_al_quran.process_list.practice"),
        t("service.tajweed_al_quran.process_list.certification"),
      ],
      href: "/service/tajweed",
    },
    {
      id: "quran-reading",
      title: t("service.quran_reading.title"),
      description: t("service.quran_reading.description"),
      image: "/images/reading.webp",
      color: "var(--color-secondary)",
      accent: "var(--color-primary)",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Arabic Alphabet", "Vowel Marks", "Word Fluency"],
      process: [
        t("service.quran_reading.process_list.qaida"),
        t("service.quran_reading.process_list.fluency"),
        t("service.quran_reading.process_list.recitation"),
      ],
      href: "/service/reading",
    },
    {
      id: "quran-memorization",
      title: t("service.quran_memorization.title"),
      description: t("service.quran_memorization.description"),
      image: "/images/hifz.webp",
      color: "var(--color-accent)",
      accent: "var(--color-primary)",
      icon: <Heart className="w-8 h-8" />,
      features: ["Memory Techniques", "Revision Routines", "Spiritual Growth"],
      process: [
        t("service.quran_memorization.process_list.assessment"),
        t("service.quran_memorization.process_list.memorization"),
        t("service.quran_memorization.process_list.revision"),
      ],
      href: "/service/hifz",
    },
    {
      id: "islamic-studies",
      title: t("service.islamic_studies.title"),
      description: t("service.islamic_studies.description"),
      image: "/images/studies.webp",
      color: "var(--color-primary)",
      accent: "var(--color-primary-light)",
      icon: <ShieldCheck className="w-8 h-8" />,
      features: ["Fiqh & Sunnah", "Islamic History", "Moral Etiquette"],
      process: [
        t("service.islamic_studies.process_list.curriculum"),
        t("service.islamic_studies.process_list.sessions"),
        t("service.islamic_studies.process_list.application"),
      ],
      href: "/service/studies",
    },
    {
      id: "arabic-language",
      title: t("service.arabic_language.title"),
      description: t("service.arabic_language.description"),
      image: "/images/arabic.webp",
      color: "var(--color-secondary)",
      accent: "var(--color-primary)",
      icon: <Languages className="w-8 h-8" />,
      features: ["Grammar & Vocabulary", "Conversational Skills", "Literal Understanding"],
      process: [
        t("service.arabic_language.process_list.basics"),
        t("service.arabic_language.process_list.grammar"),
        t("service.arabic_language.process_list.translation"),
      ],
      href: "/service/arabic",
    },
    {
      id: "quran-for-kids",
      title: t("service.quran_for_kids.title"),
      description: t("service.quran_for_kids.description"),
      image: "/images/kids.webp",
      color: "var(--color-accent)",
      accent: "var(--color-primary)",
      icon: <Sparkles className="w-8 h-8" />,
      features: ["Kid-Friendly Tutors", "Educational Games", "Progress Reports"],
      process: [
        t("service.quran_for_kids.process_list.onboarding"),
        t("service.quran_for_kids.process_list.learning"),
        t("service.quran_for_kids.process_list.reward"),
      ],
      href: "/service/kids",
    },
  ];

  const value = {
    services: getTranslatedServices(),
    gridServices,
    selectedService,
    isModalOpen,
    openModal,
    closeModal,
    t,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
};
