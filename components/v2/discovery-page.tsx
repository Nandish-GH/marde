import Link from "next/link";
import { Editorial, PageIntro, Closing } from "./editorial";
import { JsonLd } from "../../app/structured-data";
import { canonicalSiteUrl } from "../../app/metadata";
import type { DiscoveryPage as Content } from "../../lib/content/discovery";
import s from "./editorial.module.css";

export function DiscoveryPage({ page }: { page: Content }) {
  const url = new URL(`${page.slug}/`, canonicalSiteUrl).href;
  const type = page.kind === "research" ? "Article" : page.kind === "platform" ? "CreativeWork" : "WebPage";
  return <Editorial>
    <JsonLd data={{ "@context": "https://schema.org", "@type": type, "@id": `${url}#content`, url, name: page.title, headline: page.title, description: page.description,
      publisher: { "@id": new URL("#organization", canonicalSiteUrl).href },
      ...(page.published ? { datePublished: page.published, author: { "@type": "Organization", name: page.author, parentOrganization: { "@id": new URL("#organization", canonicalSiteUrl).href } } } : {}),
    }} />
    <PageIntro eyebrow={page.kind === "research" ? "RESEARCH / MARDE PERSPECTIVE" : "MARDE / IN DEVELOPMENT"} title={page.title} text={page.description} />
    <article className={s.policy}>
      {page.published ? <p className={s.updated}>By {page.author} · Published <time dateTime={page.published}>{page.published}</time></p> : null}
      {page.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</section>)}
      {page.sources ? <section><h2>Primary sources</h2><ul>{page.sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul></section> : null}
      <nav aria-label="Related reading"><Link href="/technology/">Platform overview</Link> · <Link href="/ems-partners/">EMS conversations</Link> · <Link href="/research/">Research library</Link> · <Link href="/faq/">FAQ</Link></nav>
    </article><Closing />
  </Editorial>;
}
