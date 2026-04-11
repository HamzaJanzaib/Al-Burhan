"use client";

import { usePathname } from "next/navigation";
import { languages, fallbackLng } from "@/i18n/setting";

/**
 * Returns the active locale extracted from the current URL pathname.
 * Falls back to the default locale if none is found.
 */
export function useLocale() {
  const pathname = usePathname();
  const found = languages.find(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );
  return found ?? fallbackLng;
}

/**
 * Prepends the current locale to a given path.
 * e.g. "/about" → "/en/about"
 */
export function useLocalePath() {
  const locale = useLocale();
  return (path) => {
    if (!path || path === "/") return `/${locale}`;
    if (path.startsWith(`/${locale}`)) return path; // already localized
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };
}
