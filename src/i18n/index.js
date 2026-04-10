// ...existing code...
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { languages, fallbackLng } from "./setting.js";
import en from "../locales/en.json";
import ur from "../locales/ur.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng:"en",
      lng:"en",
      supportedLngs: languages,
      resources: {
        en: { translation: en },
        ur: { translation: ur },
      },
      interpolation: { escapeValue: false },
    });
}

export default i18n;
// ...existing code...