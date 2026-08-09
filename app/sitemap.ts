import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/technology", "/team", "/mission", "/support"]; return routes.map((path) => ({ url: `https://marde.inc${path}`, lastModified: new Date() })); }
