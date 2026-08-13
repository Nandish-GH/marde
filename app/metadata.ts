import type { Metadata } from "next";
import { site } from "./content";

export const canonicalSiteUrl = `${site.siteUrl.replace(/\/+$/, "")}/`;
export const socialImage = {
  url: new URL("og.png", canonicalSiteUrl).toString(),
  width: 1536,
  height: 1024,
  alt: `MARDE — ${site.tagline}`,
};

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonicalPath = path ? `/${path.replace(/^\/+|\/+$/g, "")}/` : "/";
  const url = new URL(canonicalPath, canonicalSiteUrl).toString();
  const fullTitle = title ? `${title} | MARDE` : site.tagline;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: site.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
