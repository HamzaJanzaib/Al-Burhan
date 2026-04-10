"use client";
import React from "react";
import { Mail, Phone, MapPin } from "react-feather";
import { useFooter } from "@/context/FooterContext";

const FooterContact = () => {
  const { t, links } = useFooter();

  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b-2 border-white/60 inline-block">
        {t("footer.stayConnected_title")}
      </h4>

      <div className="space-y-3 mb-6">
        <a href={`tel:${t("footer.contact_phone")}`}>
          <div className="flex items-center space-x-3 cursor-pointer mb-2 group">
            <Phone
              size={16}
              className="text-white group-hover:text-(--color-accent) transition-colors"
            />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              {t("footer.contact_phone")}
            </span>
          </div>
        </a>
        <a
          href={`mailto:${t("footer.contact_email")}`}
          className="relative z-20 pointer-events-auto flex items-center space-x-3 cursor-pointer mb-3 group"
        >
          <Mail
            size={16}
            className="text-white group-hover:text-(--color-accent) transition-colors"
          />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            {t("footer.contact_email")}
          </span>
        </a>

        <a
          href={links.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start space-x-3 cursor-pointer group"
        >
          <MapPin
            size={16}
            className="text-white mt-1 group-hover:text-(--color-accent) transition-colors"
          />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            {t("footer.contact_address")}
          </span>
        </a>
      </div>

      {/* Newsletter */}
      <h5 className="text-gray-300 font-medium mb-2">
        {t("footer.newsletter_title")}
      </h5>
      <div className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder={t("footer.newsletter_placeholder")}
          className="px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none w-full text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-(--color-secondary) transition"
        />
        <button className="bg-secondary hover:bg-secondary/90 text-primary-foreground px-6 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg font-bold transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-black/10">
          {t("footer.newsletter_button")}
        </button>
      </div>
    </div>
  );
};

export default FooterContact;
