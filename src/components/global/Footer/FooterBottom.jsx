"use client";
import React from "react";
import Link from "next/link";
import { useFooter } from "@/context/FooterContext";

const FooterBottom = () => {
  const { t, links } = useFooter();

  return (
    <div className="pt-6 border-t border-white/40 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm text-center md:text-left">
        © {" "}
        <span className="text-white font-semibold">AL Burhan</span> —{" "}
        {t("footer.bottom_rights")}
        <span className="block pl-2 md:inline text-gray-500">
          {t("footer.bottom_developedBy")}
          <a
            href={links.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700  font-medium hover:underline pl-2"
          >
            {links.developedBy}
          </a>
        </span>
      </p>

      <div className="flex space-x-6 mt-3 md:mt-0">
        <Link
          href="/privacy"
          className="text-gray-500 hover:text-(--color-accent) text-sm transition cursor-pointer"
        >
          {t("footer.privacy")}
        </Link>
        <Link
          href="/terms"
          className="text-gray-500 hover:text-(--color-accent) text-sm transition cursor-pointer"
        >
          {t("footer.terms")}
        </Link>
        <Link
          href="/faq"
          className="text-gray-500 hover:text-(--color-accent) text-sm transition cursor-pointer"
        >
          {t("footer.faq")}
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
