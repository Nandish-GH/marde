import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm, EmailSignup, Eyebrow, SocialLinks, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { site, support } from "../content";
import { StripeBuyButton } from "../stripe-buy-button";

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
      <section className="page-hero compact support-hero">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
        <Link className="button button-quiet" href="#contribute">Explore Support Options</Link>
      </section>

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
