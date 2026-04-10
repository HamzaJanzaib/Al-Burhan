"use client";
import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import { FOOTER_SOCIALS, FOOTER_LINKS } from "../components/constants/index";

const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
  const { t } = useTranslation();

  const value = {
    t,
    socials: FOOTER_SOCIALS,
    links: FOOTER_LINKS,
  };

  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};
