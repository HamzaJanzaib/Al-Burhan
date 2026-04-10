export const BOOKING_BENEFITS = [
  "Guided by the Holy Sunnah",
  "100% One-on-One Private Classes",
  "Certified Native Arabic Tutors",
  "Flexible Weekly Scheduling",
  "Structured & Verified Curriculum",
];

export const BOOKING_ANIMATIONS = {
  text: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.6 },
  },
  form: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};
