"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useHeader } from "@/context/HeaderContext";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa6";

const TopInfoBar = () => {
  const { t } = useTranslation();
  const { isScrolled } = useHeader();

  const socialLinks = [
    {
      icon: <FaFacebookF size={12} />,
      href: "https://www.facebook.com/doctorductcanada",
    },
    {
      icon: <FaYoutube size={12} />,
      href: "https://www.youtube.com/@doctorductcanada",
    },
    {
      icon: <FaInstagram size={12} />,
      href: "https://www.instagram.com/doctorductcanada",
    },
    {
      icon: <FaTiktok size={12} />,
      href: "https://www.tiktok.com/@doctorductcanada",
    },
  ];

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#0b315b] text-white py-2 overflow-hidden hidden lg:block"
        >
          <div className="container mx-auto px-6 flex justify-between items-center text-[11px] font-medium uppercase tracking-tight">
            {/* Left: Operating Hours */}
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-white/70" />
              <span className="opacity-90">Mon-Sat: 8AM - 6PM</span>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-[10px] hidden xl:inline">
                FOLLOW US:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-[10px] font-bold"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-1.5 rounded-full bg-white text-[#0b315b] font-extrabold hover:bg-gray-100 transition-all shadow-sm text-[10px]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopInfoBar;
