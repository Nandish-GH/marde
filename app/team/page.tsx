import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../metadata";
import { team, teamPage } from "../content";
import { PageHero } from "../page-hero";

export const metadata: Metadata = pageMetadata({
  title: "MARDE Team | Emergency Robotics & Medical Technology",
  description: "Meet the MARDE team developing an integrated emergency-response robotics platform spanning aerial systems, ground robotics, software, and medical technology.",
  path: "/team",
});

export default function TeamPage() {
  const { hero } = teamPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} body={hero.body} italicIndex={1} compact className="team-hero">
        <Link className="text-link page-inline-link" href="/support/">How to Support</Link>
      </PageHero>
      <section className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="member" tabIndex={0}>
            <div className="portrait" aria-hidden={member.portrait ? undefined : true}>{member.portrait ? <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${member.portrait}`} alt={member.portraitAlt || member.name} width={190} height={190} unoptimized className="team-member-photo" /> : member.initials}</div>
            <p className="role">{member.title}</p>
            <h2>{member.name}</h2>
            {member.contactPageUrl && <Link className="team-contact-link" href={member.contactPageUrl} aria-label={`Open ${member.name}'s digital contact card`}>Contact <span aria-hidden="true">&rarr;</span></Link>}
          </article>
        ))}
      </section>
    </>
  );
}
