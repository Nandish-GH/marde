import { site } from "./content";
import { canonicalSiteUrl } from "./metadata";

export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MARDE, Inc.",
      url: canonicalSiteUrl,
      logo: new URL("brand/marde-logo-stacked.png", canonicalSiteUrl).toString(),
      description:
        "MARDE is developing an early-stage robotic emergency-response platform spanning Air, Ground, intervention modules, and human-in-the-loop coordination.",
      email: site.email,
      sameAs: [site.instagram, site.tiktok],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: canonicalSiteUrl,
      description:
        "MARDE is developing an early-stage robotic emergency-response platform spanning Air, Ground, intervention modules, and human-in-the-loop coordination.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
