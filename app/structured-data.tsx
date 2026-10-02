import { site } from "./content";
import { canonicalSiteUrl } from "./metadata";
import { faqs } from "../lib/content/v2";

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

  return <>
    {data["@graph"].map(entity => <JsonLd key={entity["@id"]} data={{ "@context": data["@context"], ...entity }} />)}
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "@id": new URL("#faq", canonicalSiteUrl).href,
      mainEntity: faqs.slice(0, 4).map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
  </>;
}
