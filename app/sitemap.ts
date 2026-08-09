import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/technology", "/team", "/mission", "/support"]; return routes.map((path) => ({ url: `https://nandish-gh.github.io/marde${path}`, lastModified: new Date() })); }
