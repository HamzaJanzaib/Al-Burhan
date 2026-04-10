"use client";

import React, { useMemo, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Toaster } from "@/components/global/sonner";
import i18n from "../../i18n";
import { AppContext } from "../AppContext";

export const AppProvider = ({ children }) => {
  // Global initialization
  useEffect(() => {
    console.log("[AppProvider] Initializing application...");

    // Set global error handler
    const handleError = (error) => {
      console.error("[Global Error]", error);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", (event) => {
      handleError(event.reason);
    });

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  // Memoized app context value
  const appContextValue = useMemo(
    () => ({
      initialized: true,
      version: "1.0.0",
      environment: process.env.NODE_ENV,
      buildId: process.env.NEXT_PUBLIC_BUILD_ID || "development",
      modules: {
        auth: true,
        booking: true,
        contact: true,
        gallery: true,
        profile: true,
        services: true,
        notifications: true,
      },
      features: {
        darkMode: true,
        multiLanguage: true,
        offlineMode: false,
        pushNotifications: false,
      },
      // App metadata
      metadata: {
        name: "AL Burhan Quran Academy",
        description: "Professional Online Quran Academy",
        author: "AL Burhan",
        keywords: ["Quran", "Academy", "Online Learning", "AL Burhan", "Tajweed", "Hifz"],
      },
      // App configuration
      config: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
        enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
        enableDebug: process.env.NODE_ENV === "development",
      },
      // Utility functions
      utils: {
        formatCurrency: (amount) => `$${amount.toFixed(2)}`,
        formatDate: (date) => new Date(date).toLocaleDateString(),
        formatPhone: (phone) =>
          phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
      },
    }),
    [],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <AppContext.Provider value={appContextValue}>
        {children}
        <Toaster position="top-right" expand={false} richColors />
      </AppContext.Provider>
    </I18nextProvider>
  );
};

export default AppProvider;
