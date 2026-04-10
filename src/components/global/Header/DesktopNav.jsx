"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import { useServices } from "@/context/ServicesContext";

const DesktopNav = () => {
  const { t, i18n } = useTranslation();
  const { activeDropdown, setActiveDropdown } = useHeader();
  const { gridServices } = useServices();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isRTL = i18n.dir() === "rtl";

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    {
      name: t("nav.services"),
      href: "/service",
      subItems: gridServices.map((service) => ({
        name: service.title,
        href: service.href,
        icon: service.icon,
        description: service.description,
      })),
    },
    {
      name: t("nav.online_classes"),
      href: "/enroll",
      icon: <MapPin size={18} />,
    },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.reviews"), href: "/reviews" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setHoveredIndex(null);
  };

  return (
    <nav className="hidden lg:flex items-center h-full ml-8 mr-4">
      <ul className="flex items-center gap-1 relative">
        {navItems.map((item, index) => {
          const isActive = activeDropdown === index || hoveredIndex === index;

          return (
            <li
              key={item.name}
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full relative z-10 ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                <span>{item.name}</span>
                {item.subItems && (
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Shared Layout Highlight */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary/5 rounded-full z-0 pointer-events-none border border-primary/10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Modern Megamenu Dropdown */}
              <AnimatePresence>
                {activeDropdown === index && item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute top-full ${
                      isRTL ? "right-0" : "left-0"
                    } mt-1 pt-2 z-50`}
                  >
                    <div className="w-[500px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
                      {/* Dropdown Header Accent */}
                      <div className="h-1.5 bg-linear-to-r from-primary via-secondary to-primary/80"></div>
                      
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {item.subItems.map((sub, sIdx) => (
                          <motion.div
                            key={sub.name}
                            initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                          >
                            <Link
                              href={sub.href}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer h-full"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {sub.icon || <Sparkles size={18} />}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors flex items-center">
                                  {sub.name}
                                  <ChevronRight size={12} className={`ml-1 opacity-0 group-hover:opacity-100 transition-all ${isRTL ? 'rotate-180' : ''}`} />
                                </h4>
                                {sub.description && (
                                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 leading-tight">
                                    {sub.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Dropdown Footer CTA */}
                      <div className="bg-gray-50/80 px-6 py-3 flex items-center justify-between border-t border-gray-100">
                        <span className="text-[11px] font-medium text-gray-400 italic">
                          Start your spiritual journey today
                        </span>
                        <Link href="/enroll" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                          Enroll Now <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
