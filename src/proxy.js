import { NextResponse } from "next/server";
import { languages, fallbackLng } from "./i18n/setting";

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = fallbackLng;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // e.g. incoming is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/favicon.ico` and all public static assets
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|al-burhan).*)"],
};
