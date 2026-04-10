"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { User, LogOut, Calendar } from "react-feather";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ChevronRight, Phone } from "lucide-react";

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

  // Shaking animation for book button
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
          <motion.div
            variants={shakeAnimation}
            animate="shake"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/enroll"
              className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) hover:from-(--hover-primary)  text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all flex items-center"
            >
              <span>{t("enroll_now")}</span>
              <ChevronRight size={18} className="ml-.5" />
            </Link>
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/book">
            <motion.div className="relative inline-block">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  custom={i}
                  className="absolute inset-0 rounded-tr-2xl rounded-bl-2xl border-2 border-(--color-accent)"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={rippleControls}
                />
              ))}
              <motion.button
                animate={shakeControls}
                className="relative z-10 px-3 py-2 font-semibold text-white bg-linear-to-r from-(--color-secondary) to-(--color-accent) rounded-tr-2xl rounded-bl-2xl shadow-md cursor-pointer"
              >
                {t("book_now")}
              </motion.button>
            </motion.div>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="relative w-11 h-11 flex items-center justify-center rounded-full bg-[var(--color-secondary)] text-white font-bold text-lg shadow-md border-2 border-white overflow-hidden">
                {(() => {
                  if (typeof window !== "undefined" && user?.id) {
                    const storedImg = localStorage.getItem(
                      `profile_image_${user.id}`,
                    );
                    if (storedImg)
                      return (
                        <img
                          src={storedImg}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      );
                  }
                  return getFirstLetter();
                })()}
              </div>
            </motion.div>

            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-[var(--light-border)] overflow-hidden z-50"
                >
                  <div
                    className="px-5 py-4 border-b border-gray-100 relative bg-cover bg-center"
                    style={{
                      backgroundImage: (() => {
                        if (typeof window !== "undefined" && user?.id) {
                          const banner = localStorage.getItem(
                            `banner_image_${user.id}`,
                          );
                          return banner ? `url(${banner})` : undefined;
                        }
                      })(),
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10">
                      <p className="font-bold text-white">
                        {user.first_name} {user.last_name}
                      </p>
                      <p className="text-xs truncate text-gray-200">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="py-2">
                    <Link
                      href="/profile"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-[var(--more-light-bg)] hover:text-[var(--color-primary)] transition"
                    >
                      {t("profile.view_profile")}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition cursor-pointer"
                    >
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
