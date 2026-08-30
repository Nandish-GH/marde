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
            <div className="portrait" aria-hidden="true">{member.initials}</div>
            <p className="role">{member.title}</p>
            <h2>{member.name}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
