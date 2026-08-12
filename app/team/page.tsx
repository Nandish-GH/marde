import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { team, teamPage } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description: "Meet the people building MARDE.",
  path: "/team",
  keywords: ["MARDE team", "emergency response technology team"],
});

export default function TeamPage() {
  const { hero } = teamPage;

  return (
    <>
      <section className="page-hero compact team-hero">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
        <Link className="text-link page-inline-link" href="/support">Help us get there</Link>
      </section>
      <section className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="member">
            <div className="portrait" aria-hidden="true">{member.initials}</div>
            <p className="role">{member.title}</p>
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
          </article>
        ))}
      </section>
    </>
  );
}
