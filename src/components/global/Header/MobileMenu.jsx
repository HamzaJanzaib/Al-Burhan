"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useServices } from "@/context/ServicesContext";

const MobileMenu = () => {
  const { t } = useTranslation();
  const {
    mobileMenuOpen,
    setMobileMenuOpen,
    expandedMobileItem,
    setExpandedMobileItem,
    isLoggedIn,
    user,
    handleLogout,
    getFirstLetter,
  } = useHeader();
  const { gridServices } = useServices();

  // Shaking animation for request a quote button (matches desktop)
  const shakeAnimation = {
    shake: {
      rotate: [0, -5, 5, -5, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

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

  return (
    <>
      <div className="flex lg:hidden items-center gap-3">
        <LanguageSwitcher />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X size={28} className="text-teal-600" />
          ) : (
            <Menu size={28} className="text-gray-800" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-full md:w-[400px] h-screen z-50 flex flex-col bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/al-burhan/Logo/WEBP/logo-primary.webp"
                      alt="AL Burhan Logo"
                      width={48}
                      height={48}
                      sizes="(max-width: 768px) 100vw, 48px"
                      className="object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-(--color-primary) text-sm">
                        AL Burhan
                      </span>
                      <span className="text-[10px] text-gray-500 tracking-wider">
                        QURAN ACADEMY
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <nav className="flex flex-col space-y-2 mb-8">
                  {navItems.map((item) => {
                    const hasSubMenu =
                      item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedMobileItem === item.name;

                    return (
                      <div key={item.name} className="flex flex-col">
                        {hasSubMenu ? (
                          <>
                            <button
                              onClick={() =>
                                setExpandedMobileItem(
                                  isExpanded ? null : item.name,
                                )
                              }
                              className={`py-3 px-4 rounded-xl text-lg font-medium transition-all flex items-center justify-between group w-full text-left ${
                                isExpanded
                                  ? "bg-(--light-bg) text-(--color-primary)"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {item.name}
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-(--color-primary)" : "text-gray-400"}`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-6 pr-2 py-2 space-y-1">
                                    {item.subItems.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        target={
                                          sub.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          sub.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-2.5 px-4 rounded-lg text-base text-gray-600 hover:text-(--color-primary) hover:bg-(--more-light-bg)/30 transition-colors flex items-center gap-2"
                                      >
                                        {sub.icon && (
                                          <span className="text-blue-500">
                                            {sub.icon}
                                          </span>
                                        )}
                                        <span>{sub.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 px-4 rounded-xl text-lg font-medium text-gray-700 hover:bg-(--light-bg) hover:text-(--color-primary) transition-all flex items-center justify-between group"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>

                <div className="border-t border-gray-100 my-4"></div>

                <div className="space-y-2">
                  {isLoggedIn ? (
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold text-xl shadow-md">
                          {getFirstLetter()}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-bold text-gray-800 truncate">
                            {user?.first_name} {user?.last_name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/profile"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <button className="w-full py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-(--color-primary) hover:text-(--color-primary) transition-colors flex items-center justify-center gap-2">
                            <User size={16} /> {t("profile.view_profile")}
                          </button>
                        </Link>
                        <Link
                          href="/book"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <button className="w-full py-2.5 rounded-xl bg-(--color-primary) text-white font-semibold text-sm shadow-md hover:bg-(--hover-primary) transition-colors flex items-center justify-center gap-2">
                            <Calendar size={16} /> {t("book_now")}
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full mt-3 py-2.5 text-red-500 font-medium text-sm hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <LogOut size={16} /> {t("profile.logout")}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <motion.div
                        variants={shakeAnimation}
                        animate="shake"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/enroll"
                          onClick={() => setMobileMenuOpen(false)}
                          className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) hover:from-(--hover-primary) text-white px-6 py-4 rounded-full font-bold shadow-lg transition-all flex items-center justify-center text-lg space-x-2"
                        >
                          <span>{t("enroll_now")}</span>
                          <ChevronRight size={20} />
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
