import { site } from "./content";
import { canonicalSiteUrl } from "./metadata";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

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
        legalName: "MARDE Inc.",
        founder: { "@id": new URL("nandish/#person", canonicalSiteUrl).href },
        url: canonicalSiteUrl,
        logo: new URL("brand/marde-logo-stacked.png", canonicalSiteUrl).toString(),
        description,
        email: site.email,
        contactPoint: { "@type": "ContactPoint", email: site.email, contactType: "general inquiries", url: new URL("contact/", canonicalSiteUrl).href },
        address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
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
