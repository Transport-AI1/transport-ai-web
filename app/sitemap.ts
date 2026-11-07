import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.transportai.es";
  const now = new Date();

  const pages: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
    { path: "/demostraciones", changeFrequency: "weekly", priority: 0.9 },
    { path: "/ia-para-transporte-logistica", changeFrequency: "monthly", priority: 0.8 },
    { path: "/presupuestos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
    { path: "/seguridad", changeFrequency: "yearly", priority: 0.5 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
