import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm, EmailSignup, Eyebrow, SocialLinks } from "../components";
import { pageMetadata } from "../metadata";
import { site, support } from "../content";
import { StripeBuyButton } from "../stripe-buy-button";
import { PageHero } from "../page-hero";
import { Button } from "../../components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description: "Support MARDE's early research and development.",
  path: "/support",
  keywords: ["support emergency technology R&D", "MARDE donations", "contact MARDE"],
});

export default function SupportPage() {
  const { hero, donate, contact, follow, newsletter } = support;

  return (
    <div className="support-page">
      <PageHero eyebrow={hero.eyebrow} title={hero.title} body={hero.body} italicIndex={1} compact className="support-hero">
        <Button asChild variant="quiet"><Link href="#contribute">Explore Support Options</Link></Button>
      </PageHero>

      <section className="support-grid">
        <article id="contribute">
          <Eyebrow>{donate.eyebrow}</Eyebrow>
          <h2>{donate.title}</h2>
          <p>{donate.body}</p>
          <StripeBuyButton />
        </article>
        <article>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2>{contact.title}</h2>
          <p>{contact.body}</p>
          <ContactForm />
          <a className="text-link contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </article>
        <article>
          <Eyebrow>{follow.eyebrow}</Eyebrow>
          <h2>{follow.title}</h2>
          <p>{follow.body}</p>
          <SocialLinks className="support-socials" />
        </article>
      </section>

      <section className="newsletter">
        <Eyebrow>{newsletter.eyebrow}</Eyebrow>
        <h2>{newsletter.title}</h2>
        <p>{newsletter.body}</p>
        <EmailSignup />
      </section>
    </div>
  );
}
