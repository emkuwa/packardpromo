import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "ChatGPT-User", "OAI-SearchBot"],
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
      {
        userAgent: ["PerplexityBot", "ClaudeBot", "Anthropic-ai", "meta-externalagent"],
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
