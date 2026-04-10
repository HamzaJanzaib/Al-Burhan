import { getServerTranslation } from "@/i18n/server";
import HeroSection from "@/components/global/home/AboutHero";
import TestimonialsSection from "@/components/global/home/testimonial";
import AboutStatsSection from "@/components/global/home/opportunitiesSec";
import LearningNewsSection from "@/components/global/home/LearningNews";
import PillarsOfIslam from "@/components/global/home/PillarsOfIslam";
import Link from "next/link";
import { ChevronRight, BookOpen, Star, ShieldCheck, Heart } from "lucide-react";

export default async function Home({ params }) {
  const { locale } = await params;
  const { t } = await getServerTranslation(locale);

  const homeServices = [
    {
      title: "Tajweed Al-Quran",
      desc: "Master the rules of proper pronunciation.",
      icon: <Star className="text-secondary" />,
    },
    {
      title: "Quran Reading",
      desc: "Fluent recitation from the very basics.",
      icon: <BookOpen className="text-secondary" />,
    },
    {
      title: "Hifz Program",
      desc: "Guided memorization with structured revision.",
      icon: <Heart className="text-secondary" />,
    },
    {
      title: "Islamic Studies",
      desc: "Deepen your knowledge of Fiqh and Hadith.",
      icon: <ShieldCheck className="text-secondary" />,
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PillarsOfIslam />
      <AboutStatsSection />
      <TestimonialsSection />
    </main>
  );
}
