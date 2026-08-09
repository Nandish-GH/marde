import type { Metadata } from "next";
import { site } from "./content";

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.siteUrl}${path}`;
  const fullTitle = title ? `${title} | MARDE` : site.tagline;

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: site.name,
      images: [{ url: `${site.siteUrl}/og.png`, width: 1200, height: 630, alt: site.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.siteUrl}/og.png`],
    },
  };
}
