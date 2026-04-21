import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block API endpoints from crawling
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
