"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, MapPin } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";
import { useTranslation } from "react-i18next";
import { useServices } from "@/context/ServicesContext";

const DesktopNav = () => {
  const { t } = useTranslation();
  const { activeDropdown, setActiveDropdown } = useHeader();
  const { gridServices } = useServices();

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", duration: 0.4 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="hidden lg:flex items-center h-full">
      <div className="bg-gray-100 rounded-full p-1 flex space-x-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative h-full flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onMouseEnter={() => item.subItems && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.subItems ? (
              <>
                <button
                  className={`flex items-center px-5 py-2.5 font-medium transition-colors rounded-full relative ${
                    activeDropdown === index
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <span>{item.name}</span>
                  <motion.span
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`ml-1 ${
                      activeDropdown === index ? "text-blue-500" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white shadow-xl rounded-lg z-50 overflow-hidden border border-gray-100"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="h-1 bg-linear-to-r from-blue-400 to-green-500 w-full"></div>
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            target={
                              sub.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              sub.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group rounded-md"
                          >
                            {sub.icon && (
                              <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform">
                                {sub.icon}
                              </span>
                            )}
                            <span>{sub.name}</span>
                            <ChevronRight
                              size={14}
                              className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            />
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
                className="flex items-center px-5 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
              >
                <span>{item.name}</span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;
