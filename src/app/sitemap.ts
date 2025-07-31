import type { MetadataRoute } from "next";

import { baseUrl } from "@/lib/metadata";
import { programsSource, source } from "@/lib/source";

export const revalidate = 604800; // 7 days (1 week)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();
  const lastModified = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/about"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/blog"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: url("/sponsors"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: url("/contact"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Legal routes
  const legalRoutes: MetadataRoute.Sitemap = [
    "/legal",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: url(path),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  // Documentation routes
  const docRoutes: MetadataRoute.Sitemap = [
    {
      url: url("/docs"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...source.getPages().map((page) => ({
      url: url(page.url),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  // Program routes
  const programRoutes: MetadataRoute.Sitemap = [
    {
      url: url("/programs"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...programsSource.getPages().map((page) => ({
      url: url(page.url),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticRoutes, ...legalRoutes, ...docRoutes, ...programRoutes];
}
