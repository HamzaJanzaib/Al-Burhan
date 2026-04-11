"use client";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "@/hooks/useLocalePath";

const AnnouncementBar = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const localePath = useLocalePath();
  const containerRef = useRef(null);
  const isHovered = useRef(false);

  const x = useMotionValue(0);
  const baseVelocity = -40;

  useAnimationFrame((_, delta) => {
    if (containerRef.current && !isHovered.current) {
      x.set(x.get() + (baseVelocity * delta) / 1000);
      const width = containerRef.current.scrollWidth / 2;
      if (x.get() <= -width) x.set(0);
    }
  });

  const xTransform = useTransform(x, (latest) => `${latest}px`);

  const announcements = [
    {
      text: (
        <>
          {t("announcement_quran")} —{" "}
          <a
            href={localePath("/enroll")}
            className="font-bold pl-1 underline text-secondary transition cursor-pointer"
          >
            {t("enroll_now")}
          </a>
        </>
      ),
    },
    {
      text: (
        <>
          {t("announcement_trial")}{" "}
          <a
            href={localePath("/enroll")}
            className="font-bold underline pl-1 text-secondary transition cursor-pointer"
          >
            {t("claim_offer")}
          </a>
        </>
      ),
    },
    {
      text: (
        <>
          {t("announcement_certified")} —{" "}
          <a
            href={localePath("/enroll")}
            className="font-bold underline pl-1 text-secondary transition cursor-pointer"
          >
            {t("enroll_now")}
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="overflow-hidden bg-(--color-primary) flex text-xs text-gray-700 border-b border-gray-200 cursor-pointer">
      <motion.div
        ref={containerRef}
        className="whitespace-nowrap flex items-center relative"
        style={{ x: xTransform }}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {[...announcements, ...announcements].map((item, i) => (
          <motion.div
            key={i}
            className="relative mx-6 md:mx-12 flex items-center text-primary-foreground md:text-sm text-xs group px-4 py-1 rounded-md overflow-hidden"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === i && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[0, 1, 2].map((r) => (
                  <motion.span
                    key={r}
                    className="absolute inset-[3px] rounded-md border border-white/20"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0.6, 0.2, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1.4,
                      delay: r * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
            <span className="relative z-10">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
