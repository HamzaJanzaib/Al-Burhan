
import { getServerTranslation } from "@/i18n/server";

export default async function Home({ params }) {
  const { locale } = await params;
  const { t } = await getServerTranslation(locale);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{t("title") || "AL Burhan"}</h1>
      <p className="mt-4 text-muted-foreground">
        {t("description") || "Language support is now active."}
      </p>
    </div>
  );
}
