import Link from "next/link";
import { Editorial, PageIntro } from "../../components/v2/editorial";
import { researchPages } from "../../lib/content/research";
import { pageMetadata } from "../metadata";
import s from "../../components/v2/editorial.module.css";
export const metadata = pageMetadata({ title: "Emergency-response robotics research", description: "MARDE perspectives on evidence, final access, human oversight and evaluating early-stage robotics.", path: "/research/" });
export default function Page() { return <Editorial><PageIntro eyebrow="RESEARCH" title="Evidence before expansion." text="Primary-source reading and MARDE's evaluation perspective. These articles are not reports of MARDE performance." /><div className={s.policy}>{researchPages.map(page => <article key={page.slug}><h2><Link href={`/${page.slug}/`}>{page.title}</Link></h2><p>{page.description}</p><p>{page.author} · <time dateTime={page.published}>{page.published}</time></p></article>)}</div></Editorial>; }
