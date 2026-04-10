import { Outfit, Geist_Mono } from "next/font/google";
import "../globals.css";
import { languages } from "@/i18n/setting";
import { AppProvider } from "@/context/providers/AppProvider";
import { ServicesProvider } from "@/context/ServicesContext";
import { HeaderProvider } from "@/context/HeaderContext";
import Header from "@/components/global/Header/Header";
import Footer from "@/components/global/Footer/Footer";
import { Toaster } from "@/components/global/sonner";
import PageLoader from "@/components/global/PageLoader";

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
      <body suppressHydrationWarning>
        <AppProvider>
          <ServicesProvider>
            <HeaderProvider>
              <div className="max-w-screen overflow-x-hidden">
                <PageLoader />
                <Header />
                <main className="max-w-screen overflow-x-hidden pt-24 bg-background min-h-screen">
                  {children}
                </main>
                <Footer />
                <Toaster />
              </div>
            </HeaderProvider>
          </ServicesProvider>
        </AppProvider>
      </body>
    </html>
  );
}
