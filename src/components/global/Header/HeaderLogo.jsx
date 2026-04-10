"use client";
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex-1 flex justify-start cursor-pointer">
      <Link href="/" className="flex items-center space-x-[.5rem]">
        <div className="relative flex items-center">
          <div className="relative w-16 md:w-20 h-16 md:h-20 shrink-0">
            <Image
              src="/al-burhan/Logo/WEBP/logo-primary.webp"
              alt="AL Burhan Academy Logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain drop-shadow-md select-none"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-md sm:text-lg md:text-md font-bold text-(--color-primary)">
              AL Burhan
            </h1>
            <p className="text-[.5rem] sm:text-xs md:text-[.7rem] text-(--color-secondary)">
              Online Quran Academy
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
