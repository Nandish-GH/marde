import { site } from "./content";
import { canonicalSiteUrl } from "./metadata";

export function StructuredData() {
  const organizationId = new URL("#organization", canonicalSiteUrl).toString();
  const websiteId = new URL("#website", canonicalSiteUrl).toString();
  const description =
    "MARDE is developing an integrated emergency-response robotics platform combining aerial transport, ground access, command software, and modular intervention capabilities.";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "MARDE, Inc.",
        alternateName: "MARDE",
        url: canonicalSiteUrl,
        logo: new URL("brand/marde-logo-stacked.png", canonicalSiteUrl).toString(),
        description,
        email: site.email,
        sameAs: [site.instagram, site.tiktok],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        alternateName: "MARDE Inc.",
        url: canonicalSiteUrl,
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
