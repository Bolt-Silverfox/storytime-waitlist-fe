import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://storytime.app";

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/frequently-asked-questions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/squeeze`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/waitlist`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
  ];

  return routes;
}
