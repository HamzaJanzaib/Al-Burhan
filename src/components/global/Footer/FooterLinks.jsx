"use client";
import React from "react";
import Link from "next/link";
import { useFooter } from "@/context/FooterContext";
import { useLocalePath } from "@/hooks/useLocalePath";

const FooterLinks = () => {
  const { t } = useFooter();
  const localePath = useLocalePath();

  return (
    <>
      {/* ⚡ Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b-2 border-white/60 inline-block">
          {t("footer.quickLinks_title")}
        </h4>
        <ul className="space-y-3">
          {t("footer.quickLinks", { returnObjects: true }).map((item, i) => (
            <li key={i}>
              <Link
                href={localePath(`/${item.toLowerCase().replace(/\s+/g, "-")}`)}
                className="group flex items-center space-x-2 text-gray-400 hover:text-(--color-accent) transition-all cursor-pointer"
              >
                <span className="block w-0 group-hover:w-2 h-0.5 bg-(--color-accent) transition-all duration-300"></span>
                <span>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🧼 Our Services */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b-2 border-white/60 inline-block">
          {t("footer.services_title")}
        </h4>
        <ul className="space-y-3">
          {t("footer.services", { returnObjects: true }).map((service, i) => (
            <li key={i}>
              <Link
                href="#"
                className="group flex items-center space-x-2 text-gray-400 hover:text-(--color-accent) transition-all cursor-pointer"
              >
                <span className="block w-0 group-hover:w-2 h-0.5 bg-(--color-accent) transition-all duration-300"></span>
                <span>{service}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
