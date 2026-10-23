import Link from "next/link";
import { Editorial, PageIntro, Closing } from "./editorial";
import { JsonLd } from "../../app/structured-data";
import { canonicalSiteUrl } from "../../app/metadata";
import type { DiscoveryPage as Content } from "../../lib/content/discovery";
import { responseGuides } from "../../lib/content/response-guides";
import s from "./editorial.module.css";

export function DiscoveryPage({ page }: { page: Content }) {
  const url = new URL(`${page.slug}/`, canonicalSiteUrl).href;
  const type = page.kind === "research" ? "Article" : page.kind === "platform" ? "CreativeWork" : "WebPage";
  const isGuide = responseGuides.some(guide => guide.slug === page.slug);
  const displayTitle = isGuide ? page.title.replace(/ \| MARDE$/, "") : page.title;
  const linkedGuides = responseGuides.filter(guide => guide.related?.some(link => link.href === `/${page.slug}/`));
  return <Editorial>
    <JsonLd data={{ "@context": "https://schema.org", "@type": type, "@id": `${url}#content`, url, name: page.title, headline: page.title, description: page.description,
      publisher: { "@id": new URL("#organization", canonicalSiteUrl).href },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(page.sources ? { citation: page.sources.map(source => ({ "@type": "CreativeWork", name: source.title, url: source.url })) } : {}),
      ...(page.published ? { datePublished: page.published, author: { "@type": "Organization", name: page.author, url: new URL("research/", canonicalSiteUrl).href, parentOrganization: { "@id": new URL("#organization", canonicalSiteUrl).href } } } : {}),
      ...(page.modified ? { dateModified: page.modified } : {}),
    }} />
    {isGuide ? <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "MARDE", item: canonicalSiteUrl },
      { "@type": "ListItem", position: 2, name: displayTitle, item: url },
    ] }} /> : null}
    <PageIntro eyebrow={page.kind === "research" ? "RESEARCH / MARDE PERSPECTIVE" : "MARDE / IN DEVELOPMENT"} title={displayTitle} text={page.description} />
    <article className={s.policy}>
      {page.published ? <p className={s.updated}>By {page.author} · Published <time dateTime={page.published}>{page.published}</time></p> : null}
      {page.modified ? <p className={s.updated}>Updated <time dateTime={page.modified}>{page.modified}</time></p> : null}
      {page.contribution ? <p>{page.contribution}</p> : null}
      {isGuide ? <nav aria-label="Breadcrumb"><Link href="/">MARDE</Link> / <span>{displayTitle}</span></nav> : null}
      {page.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</section>)}
      {page.sources ? <section><h2>Primary sources</h2><ul>{page.sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul></section> : null}
      {page.related ? <nav aria-label="Related research and platform pages"><ul>{page.related.map(link => <li key={link.href}><Link href={link.href}>{link.title}</Link></li>)}</ul></nav> : null}
      {linkedGuides.length ? <nav aria-label="Explore response guides"><ul>{linkedGuides.map(guide => <li key={guide.slug}><Link href={`/${guide.slug}/`}>{guide.title}</Link></li>)}</ul></nav> : null}
      <nav aria-label="Related reading"><Link href="/technology/">Platform overview</Link> · <Link href="/ems-partners/">EMS conversations</Link> · <Link href="/research/">Research library</Link> · <Link href="/faq/">FAQ</Link></nav>
    </article><Closing />
  </Editorial>;
}
