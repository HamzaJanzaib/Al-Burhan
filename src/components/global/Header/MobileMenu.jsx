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
  Mail,
  ChevronRight,
} from "lucide-react";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useServices } from "@/context/ServicesContext";

const MobileMenu = () => {
  const { t, i18n } = useTranslation();
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

  const isRTL = i18n.dir() === "rtl";

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
      name: t("nav.contact"),
      href: "/contact",
      icon: <Mail size={18} />,
    },
  ];

  // Motion variants for staggered entry
  const menuVariants = {
    hidden: { x: isRTL ? "-100%" : "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      x: isRTL ? "-100%" : "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isRTL ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
      <div className="flex lg:hidden items-center gap-3">
        <LanguageSwitcher />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center cursor-pointer p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          {mobileMenuOpen ? (
            <X size={26} className="text-primary" />
          ) : (
            <Menu size={26} className="text-primary" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} w-full md:w-[400px] h-screen z-50 flex flex-col bg-background/95 backdrop-blur-xl border-l border-primary/10`}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {/* Top gradient accent */}
              <div className="h-1.5 bg-linear-to-r from-primary via-secondary to-primary/80"></div>

              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-background/50">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/5 p-1 rounded-full border border-primary/10 shadow-sm">
                      <Image
                        src="/al-burhan/Logo/WEBP/logo-primary.webp"
                        alt="AL Burhan Logo"
                        width={40}
                        height={40}
                        sizes="(max-width: 768px) 100vw, 40px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-primary text-sm leading-tight">
                        AL Burhan
                      </span>
                      <span className="text-[10px] text-gray-500 tracking-wider font-medium">
                        QURAN ACADEMY
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-gray-50 hover:bg-primary/10 text-gray-500 hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide flex flex-col">
                <nav className="flex flex-col space-y-1 mb-8">
                  {navItems.map((item, i) => {
                    const hasSubMenu =
                      item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedMobileItem === item.name;

                    return (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        className="flex flex-col"
                      >
                        {hasSubMenu ? (
                          <>
                            <button
                              onClick={() =>
                                setExpandedMobileItem(
                                  isExpanded ? null : item.name,
                                )
                              }
                              className={`py-3.5 px-4 rounded-xl text-[15px] font-semibold transition-all flex items-center justify-between group w-full text-left outline-none cursor-pointer ${
                                isExpanded
                                  ? "bg-primary/10 text-primary border border-primary/20"
                                  : "text-gray-700 hover:bg-gray-50 border border-transparent"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {item.icon && (
                                  <span className="text-secondary">
                                    {item.icon}
                                  </span>
                                )}
                                {item.name}
                              </span>
                              <div
                                className={`p-1.5 rounded-md transition-colors ${isExpanded ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400 group-hover:bg-primary/5 group-hover:text-primary"}`}
                              >
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </div>
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-1 ml-4 pl-3 border-l-2 border-primary/10 py-1 space-y-1 relative">
                                    {item.subItems.map((sub, sIdx) => (
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
                                        className="relative group py-2.5 px-3 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors flex items-center gap-3 overflow-hidden"
                                      >
                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                                        {sub.icon && (
                                          <span className="text-primary/60 group-hover:text-primary transition-colors p-1.5 bg-gray-50 group-hover:bg-background rounded-md border border-gray-100 group-hover:border-primary/20 shadow-sm">
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
                            className="py-3.5 px-4 rounded-xl text-[15px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary transition-all flex items-center justify-between group active:scale-95 outline-none border border-transparent hover:border-gray-100 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              {item.icon && (
                                <span className="text-primary/70">
                                  {item.icon}
                                </span>
                              )}
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <motion.div variants={itemVariants} className="space-y-4">
                    {isLoggedIn ? (
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/80 border-2 border-white text-white flex items-center justify-center font-bold text-xl shadow-md">
                            {getFirstLetter()}
                          </div>
                          <div className="overflow-hidden">
                            <p className="font-bold text-gray-900 truncate flex items-center gap-1.5">
                              {user?.first_name} {user?.last_name}
                              <span className="flex items-center justify-center w-4 h-4 bg-secondary/20 rounded-full">
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                              </span>
                            </p>
                            <p className="text-[11px] text-gray-500 truncate font-medium">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 relative z-10">
                          <Link
                            href="/profile"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <button className="w-full py-2.5 rounded-xl bg-background border border-gray-200 text-gray-700 font-semibold text-xs hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95">
                              <User size={14} /> {t("profile.view_profile")}
                            </button>
                          </Link>
                          <Link
                            href="/book"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <button className="w-full py-2.5 rounded-xl bg-primary text-white font-semibold text-xs shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5 active:scale-95">
                              <Calendar size={14} /> {t("book_now")}
                            </button>
                          </Link>
                        </div>
                        <button
                          onClick={() => {
                            handleLogout();
                            setMobileMenuOpen(false);
                          }}
                          className="w-full mt-2.5 py-2 text-red-500 font-medium text-xs hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <LogOut size={14} /> {t("profile.logout")}
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col relative z-20">
                        <motion.div
                          variants={shakeAnimation}
                          animate="shake"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            href="/enroll"
                            onClick={() => setMobileMenuOpen(false)}
                            className="relative group bg-linear-to-r from-primary via-primary/90 to-primary text-white px-6 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-between text-base overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                            <span className="relative z-10 flex items-center gap-2">
                              <span className="bg-background/20 p-1.5 rounded-lg backdrop-blur-sm">
                                <Calendar size={18} />
                              </span>
                              {t("enroll_now")}
                            </span>
                            <span className="relative z-10 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-background group-hover:text-primary transition-colors">
                              <ChevronRight
                                size={18}
                                className={isRTL ? "rotate-180" : ""}
                              />
                            </span>
                          </Link>
                        </motion.div>
                        <p className="text-center text-[11px] text-gray-500 mt-3 font-medium">
                          Start your Quran journey today with expert academic
                          tutors.
                        </p>
                      </div>
                    )}
                  </motion.div>
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
