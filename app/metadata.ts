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
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalPath = path ? `/${path.replace(/^\/+|\/+$/g, "")}/` : "/";
  const url = new URL(canonicalPath, canonicalSiteUrl).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalPath },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: site.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
