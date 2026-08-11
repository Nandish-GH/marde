import { site } from "./content";

export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MARDE, Inc.",
      url: site.siteUrl,
      logo: `${site.siteUrl}/brand/marde-logo-horizontal.png`,
      description:
        "MARDE is developing autonomous first-response systems to help close the gap before professional emergency help arrives.",
      sameAs: [site.instagram],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.siteUrl,
      description:
        "MARDE is developing autonomous first-response systems to help close the gap before professional emergency help arrives.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
