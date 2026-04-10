export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = "https://www.alburhan.ca";

    const routes = [
        ""
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}

