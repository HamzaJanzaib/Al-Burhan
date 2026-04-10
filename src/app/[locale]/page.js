import { getServerTranslation } from "@/i18n/server";
import HeroSection from "@/components/global/home/AboutHero";
import TestimonialsSection from "@/components/global/home/testimonial";
import AboutStatsSection from "@/components/global/home/opportunitiesSec";
import LearningNewsSection from "@/components/global/home/LearningNews";
import Link from "next/link";
import { ChevronRight, BookOpen, Star, ShieldCheck, Heart } from "lucide-react";

export default async function Home({ params }) {
  const { locale } = await params;
  const { t } = await getServerTranslation(locale);

  const homeServices = [
    { title: "Tajweed Al-Quran", desc: "Master the rules of proper pronunciation.", icon: <Star className="text-secondary" /> },
    { title: "Quran Reading", desc: "Fluent recitation from the very basics.", icon: <BookOpen className="text-secondary" /> },
    { title: "Hifz Program", desc: "Guided memorization with structured revision.", icon: <Heart className="text-secondary" /> },
    { title: "Islamic Studies", desc: "Deepen your knowledge of Fiqh and Hadith.", icon: <ShieldCheck className="text-secondary" /> },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Services Overview */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Nurturing the <span className="text-primary italic">Soul</span> <br /> through Divine Knowledge
              </h2>
            </div>
            <Link href="/service">
              <button className="px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 group shadow-sm hover:shadow-xl">
                Explore All Courses <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service, i) => (
              <div key={i} className="group p-10 rounded-[40px] border border-slate-100 bg-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-sm hover:shadow-[0_30px_60px_rgba(13,92,92,0.15)] cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed group-hover:text-white/80 transition-colors font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Stats Section */}
      <AboutStatsSection />

      {/* 4. Latest News Section */}
      <LearningNewsSection />

      {/* 5. Testimonials */}
      <TestimonialsSection />

      {/* 6. Global CTA */}
      <section className="py-28 bg-primary px-6 relative overflow-hidden">
        <div className="absolute inset-0  -z-10" />
        {/* Subtle pattern or gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-secondary/10 to-transparent -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">
            Begin Your Spiritual <br /> Journey with <span className="text-secondary">AL Burhan</span>
          </h2>
          <p className="text-white/80 text-xl mb-14 max-w-2xl mx-auto font-medium">
            Experience the peace and wisdom of the Quran with expert guidance. 
            Start today with a free trial class and see the difference in your recitation and understanding.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/enroll">
              <button className="px-12 py-6 rounded-full bg-secondary text-primary font-black text-xl shadow-2xl shadow-black/30 hover:scale-105 active:scale-95 transition-all duration-300">
                Book Free Trial Class
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
