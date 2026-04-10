"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAnimation } from "motion/react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const shakeControls = useAnimation();
  const rippleControls = useAnimation();

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // Body scroll lock
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userData");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Invalid user data in sessionStorage");
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("user_id");
    window.location.href = "/login";
  };

  const getFirstLetter = () => {
    if (!user?.first_name) return "?";
    return user.first_name.charAt(0).toUpperCase();
  };

  const value = {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeDropdown,
    setActiveDropdown,
    expandedMobileItem,
    setExpandedMobileItem,
    userMenuOpen,
    setUserMenuOpen,
    user,
    setUser,
    isLoggedIn: Boolean(user),
    handleLogout,
    getFirstLetter,
    shakeControls,
    rippleControls,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
