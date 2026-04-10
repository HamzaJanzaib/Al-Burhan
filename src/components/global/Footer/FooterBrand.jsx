"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaThreads,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { useFooter } from "@/context/FooterContext";

const FooterBrand = () => {
  const { t, socials } = useFooter();

  const getIcon = (name) => {
    switch (name) {
      case "Threads":
        return <FaThreads size={20} />;
      case "Instagram":
        return <FaInstagram size={20} />;
      case "Facebook":
        return <FaFacebook size={20} />;
      case "X":
        return <FaXTwitter size={20} />;
      case "Pinterest":
        return <FaPinterestP size={20} />;
      case "YouTube":
        return <FaYoutube size={20} />;
      case "TikTok":
        return <FaTiktok size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="text-left">
      <Link
        href="/"
        className="inline-block mb-3 group relative cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          {/* Soft Glow Behind Circle */}
          <div className="absolute w-20 h-20 bg-(--color-accent)/25 rounded-full blur-xl animate-pulse-smooth"></div>

          {/* Logo Container */}
          <div className="relative w-40 rounded-full h-40 flex items-center justify-center animate-heartbeat">
            <Image
              src="/al-burhan/Logo/WEBP/logo-primary.webp"
              alt="AL Burhan Quran Academy Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain select-none p-2"
            />
          </div>
        </div>
      </Link>

      <p className="text-gray-400 leading-relaxed mt-3">{t("footer.slogan")}</p>

      {/* Social Icons */}
      <div className="flex space-x-5 mt-6 justify-start">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${item.color} transform hover:scale-110 transition duration-300 cursor-pointer`}
          >
            {getIcon(item.name)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
