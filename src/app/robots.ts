import { baseUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

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
