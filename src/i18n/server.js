import i18next from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { languages, fallbackLng } from "./setting";
import en from "../locales/en.json";
import ur from "../locales/ur.json";

const initI18next = async (lng) => {
  const i18nInstance = i18next.createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng,
      fallbackLng,
      supportedLngs: languages,
      resources: {
        en: { translation: en },
        ur: { translation: ur },
      },
      interpolation: { escapeValue: false },
    });
  return i18nInstance;
};

export async function getServerTranslation(lng) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}
