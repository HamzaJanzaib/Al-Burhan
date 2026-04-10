"use client";

import { useTranslation as useTranslationNext } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import i18n from "@/i18n";

export function useTranslation() {
  const params = useParams();
  const locale = params?.locale || "en";
  const { t, i18n: i18nInstance } = useTranslationNext();

  useEffect(() => {
    if (i18nInstance.language !== locale) {
      i18nInstance.changeLanguage(locale);
    }
  }, [locale, i18nInstance]);

  return { t, i18n: i18nInstance, locale };
}
