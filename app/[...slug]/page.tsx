import { notFound } from "next/navigation";
import { discoveryPages } from "../../lib/content/discovery";
import { researchPages } from "../../lib/content/research";
import { DiscoveryPage } from "../../components/v2/discovery-page";
import { pageMetadata } from "../metadata";

const pages = [...discoveryPages, ...researchPages];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map(page => ({ slug: page.slug.split("/") })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = pages.find(page => page.slug === slug.join("/"));
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}/` });
}
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = pages.find(page => page.slug === slug.join("/"));
  if (!page) notFound();
  return <DiscoveryPage page={page} />;
}
