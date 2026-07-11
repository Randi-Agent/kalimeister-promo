import { MetadataRoute } from "next";
import { SERVICES, CITIES } from "@/lib/pseo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kalimeister.com";
  
  // Static pages
  const staticRoutes = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/readings`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Generate pSEO routes
  const pseoRoutes = Object.keys(SERVICES).flatMap(serviceSlug =>
    CITIES.map(city => ({
      url: `${base}/${serviceSlug}-${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  );

  return [...staticRoutes, ...pseoRoutes];
}