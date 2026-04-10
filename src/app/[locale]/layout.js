import { Outfit, Geist_Mono } from "next/font/google";
import "../globals.css";
import { languages } from "@/i18n/setting";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AL Burhan",
  description: "AL Burhan provides expert services...",
  icons: { icon: "/favicon.ico" },
};

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  
  // Set direction based on locale (Urdu is RTL)
  const dir = locale === "ur" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
