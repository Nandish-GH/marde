import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { team, site } from "../content";
export const metadata: Metadata = { title: "Team", description: "Meet the people building MARDE." };
export default function Team() { return <><section className="page-hero compact"><Eyebrow>The team</Eyebrow><h1>Small team.<br /><em>Serious intent.</em></h1><p>MARDE is being shaped by people working across strategy, medical guidance, engineering, and community.</p></section><section className="team-grid">{team.map(([initials,name,title,bio]) => <article key={name} className="member"><div className="portrait">{initials}</div><p className="role">{title}</p><h2>{name}</h2><p>{bio}</p>{name === "Saathvika" && <a href={site.instagram} target="_blank" rel="noreferrer">@marde.inc ↗</a>}</article>)}</section></>; }
