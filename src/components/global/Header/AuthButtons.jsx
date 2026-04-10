"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { User, LogOut, Calendar } from "react-feather";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

const AuthButtons = () => {
  const { t } = useTranslation();
  const {
    isLoggedIn,
    user,
    userMenuOpen,
    setUserMenuOpen,
    handleLogout,
    getFirstLetter,
    shakeControls,
    rippleControls,
  } = useHeader();

  useEffect(() => {
    let isMounted = true;
    const animate = async () => {
      while (isMounted && isLoggedIn) {
        for (let i = 0; i < 4; i++) {
          if (!isMounted) return;
          await shakeControls.start({
            rotate: [0, 5, 0, -5, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
          });
        }
        if (!isMounted) return;
        rippleControls.start((i) => ({
          scale: [1, 1.4],
          opacity: [0.5, 0],
          transition: { duration: 1.5, ease: "easeOut", delay: i * 0.3 },
        }));
        await new Promise((res) => setTimeout(res, 4000));
        if (isMounted) {
          rippleControls.set({ scale: 1, opacity: 0 });
        }
      }
    };
    animate();
    return () => {
      isMounted = false;
    };
  }, [isLoggedIn, shakeControls, rippleControls]);

  return (
    <div className="hidden lg:flex items-center space-x-3">
      {!isLoggedIn ? (
        <div className="flex items-center gap-3">
          {/* Primary — Enroll Now CTA */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/enroll"
              className="relative group flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-primary-foreground overflow-hidden shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-linear-to-r from-primary to-primary/80" />
              {/* Shimmer sweep */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

              <Sparkles size={14} className="relative z-10 animate-pulse" />
              <span className="relative z-10">{t("enroll_now")}</span>
              <ChevronRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* Book Now button (logged in) */}
          <Link href="/book">
            <motion.div className="relative inline-block">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  custom={i}
                  className="absolute inset-0 rounded-full border-2 border-secondary/60"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={rippleControls}
                />
              ))}
              <motion.button
                animate={shakeControls}
                className="relative z-10 px-5 py-2.5 font-bold text-sm text-primary-foreground bg-linear-to-r from-primary to-primary/80 rounded-full shadow-md cursor-pointer"
              >
                {t("book_now")}
              </motion.button>
            </motion.div>
          </Link>

          {/* Profile Avatar + Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {/* Pulsing ring */}
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping opacity-60" />
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-primary-foreground font-bold text-base shadow-md border-2 border-white overflow-hidden">
                  {(() => {
                    if (typeof window !== "undefined" && user?.id) {
                      const storedImg = localStorage.getItem(`profile_image_${user.id}`);
                      if (storedImg)
                        return <img src={storedImg} alt="Avatar" className="w-full h-full object-cover" />;
                    }
                    return getFirstLetter();
                  })()}
                </div>
              </div>
            </motion.div>

            {/* Dropdown */}
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="absolute right-0 mt-3 w-60 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-xl border border-gray-100 overflow-hidden z-50"
                >
                  {/* Gradient top bar */}
                  <div className="h-1 bg-linear-to-r from-primary via-secondary to-primary/80" />

                  {/* User Info */}
                  <div
                    className="px-5 py-4 border-b border-gray-100 relative bg-cover bg-center"
                    style={{
                      backgroundImage: (() => {
                        if (typeof window !== "undefined" && user?.id) {
                          const banner = localStorage.getItem(`banner_image_${user.id}`);
                          return banner ? `url(${banner})` : undefined;
                        }
                      })(),
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/80" />
                    <div className="relative z-10">
                      <p className="font-bold text-primary-foreground text-sm">
                        {user.first_name} {user.last_name}
                      </p>
                      <p className="text-[11px] truncate text-primary-foreground/70 font-medium mt-0.5">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="py-1.5 px-1.5 space-y-0.5">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors"
                    >
                      <User size={15} className="text-primary/60" />
                      {t("profile.view_profile")}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <LogOut size={15} />
                      {t("profile.logout")}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
