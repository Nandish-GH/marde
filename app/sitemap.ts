import type { MetadataRoute } from "next";
import { site } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/technology", "/team", "/mission", "/support", "/faq", "/privacy"];
  return routes.map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
