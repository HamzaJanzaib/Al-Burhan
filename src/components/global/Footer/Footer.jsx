"use client";
import React from "react";
import { FooterProvider } from "@/context/FooterContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useHeader } from "@/context/HeaderContext";
import FooterBackground from "./FooterBackground";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const isMobile = useIsMobile();
  const { isScrolled } = useHeader();

  return (
    <FooterProvider>
      <footer className={`relative bg-linear-to-b from-primary/80 via-primary to-black text-primary-foreground ${isMobile ? 'pt-10 pb-6' : 'pt-20 pb-10'} overflow-hidden`}>
        <FooterBackground />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14 ${isMobile ? 'text-center' : ''}`}>
            <FooterBrand />
            <FooterLinks />
            <FooterContact />
          </div>

          <FooterBottom />
        </div>
      </footer>
    </FooterProvider>
  );
}
