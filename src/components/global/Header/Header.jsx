"use client";
import { HeaderProvider, useHeader } from "../../../context/HeaderContext";
import HeaderLogo from "./HeaderLogo";
import DesktopNav from "./DesktopNav";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import AnnouncementBar from "./AnnouncementBar";
import TopInfoBar from "./TopInfoBar";

export default function Header() {
  const { isScrolled } = useHeader();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 shadow-md"
          : "bg-linear-to-r from-white/60 to-teal-50/50 backdrop-blur-lg"
      }`}
    >
      <AnnouncementBar />
      {/* <TopInfoBar /> */}

      <div className="container mx-auto flex items-center px-2 lg:px-6 h-20">
        <HeaderLogo />
        <DesktopNav />

        <div className="flex-1 flex justify-end items-center gap-3">
          <AuthButtons />
          {/* <div className="hidden lg:block">
            <LanguageSwitcher />
          </div> */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
