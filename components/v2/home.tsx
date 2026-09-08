import Image from "next/image";
import Link from "next/link";
import { responseStats, systems, faqs, people } from "../../lib/content/v2";
import { Action, Arrow, Kicker } from "./primitives";
import { SystemArt, SystemGlyph } from "./system-art";
import { ResponseSequence, NexusConcept, Questions } from "./interactions";
import s from "./home.module.css";

export function Home() {
  return <div className={s.home} data-v2-home>
    <section className={s.hero} aria-labelledby="hero-heading">
      <div className={s.heroTop}><span>EMERGENCY-RESPONSE ROBOTICS</span><span><i /> IN DEVELOPMENT</span></div>
      <div className={s.heroGrid}><div className={s.heroCopy}>
        <h1 id="hero-heading">Response starts<br /><span>before</span> arrival.</h1>
        <p>Air. Ground. Human control.<br />One coordinated response.</p>
        <p className={s.heroDescription}>We’re developing an integrated robotics platform to extend emergency-response capability into the minutes before EMS arrives.</p>
        <div className={s.actions}><Action href="/technology/">Explore the Technology</Action><Link className={s.quietLink} href="/contact/">Contact MARDE<Arrow diagonal /></Link></div>
      </div><SystemArt /></div>
      <div className={s.heroBottom}><span>BUILT AROUND THE PATIENT.<br />DESIGNED TO WORK WITH EMS.</span><a href="#response-gap">Discover the system <span>↓</span></a><span>NEW JERSEY, USA<br />PRE-PROTOTYPE / V1</span></div>
    </section>

    <section className={`${s.section} ${s.gap}`} id="response-gap" aria-labelledby="gap-heading">
      <Kicker number="01">The response gap</Kicker>
      <div className={s.sectionIntro} data-reveal="editorial"><h2 id="gap-heading">Help is on the way.<br /><span>The gap is still there.</span></h2><div><p className={s.lead}>Dispatch is not the same<br className={s.desktopBreak} /> as intervention.</p><p>In a time-critical emergency, professional help can still be minutes away. We’re exploring how coordinated robotics can extend useful capability toward the patient during that interval.</p></div></div>
      <div className={s.stats}>{responseStats.map((stat) => <article className={s.stat} key={stat.label} data-reveal="stat"><div className={s.statValue}><span data-count={stat.value}>{stat.value}</span><span>{stat.unit}</span></div><h3>{stat.label}</h3><a href={stat.href} target="_blank" rel="noreferrer">{stat.source}<Arrow diagonal /></a></article>)}</div>
      <p className={s.sourceNote}>2024 CARES non-traumatic out-of-hospital cardiac arrest data. Response times run from 911 call receipt to arrival on scene; analyses exclude missing times and arrests witnessed by a 911 responder. These are registry findings, not MARDE performance results.</p>
    </section>

    <section className={`${s.section} ${s.system}`} id="system" aria-labelledby="system-heading">
      <Kicker number="02">The MARDE architecture</Kicker><div className={s.sectionIntro} data-reveal="editorial"><h2 id="system-heading">Four parts.<br /><span>One purpose.</span></h2><p className={s.lead}>Closing distance is only part of the response. Access, coordination, and capability need to travel with it.</p></div>
      <div className={s.systemGrid}>{systems.map((system) => <Link className={s.systemLink} href={`/technology/#${system.id}`} key={system.id} data-reveal="system"><div className={s.systemCode}><span>{system.number} / {system.label}</span><Arrow diagonal /></div><div className={s.systemGlyph}><SystemGlyph type={system.id} /></div><h3>{system.name}</h3><h4>{system.verb}</h4><p>{system.text}</p><span className={s.systemMore}>Explore {system.name}<Arrow /></span></Link>)}</div>
      <div className={s.systemFoot}><span><i /> Connected through Nexus</span><p>V1: human-in-the-loop. Higher autonomy follows testing and validation.</p></div>
    </section>

    <section className={`${s.section} ${s.workflow}`} aria-labelledby="workflow-heading"><Kicker number="03">A coordinated response</Kicker><div className={s.sectionIntro} data-reveal="editorial"><h2 id="workflow-heading">From dispatch<br />to <span>handoff.</span></h2><div><p className={s.lead}>Each step has a role.<br />People remain in control.</p><p>A conceptual workflow for extending response capability before EMS arrival.</p></div></div><ResponseSequence /></section>

    <section className={`${s.section} ${s.nexus}`} id="home-nexus" aria-labelledby="nexus-heading"><div className={s.nexusIntro} data-reveal="editorial"><div><Kicker number="04">MARDE Nexus</Kicker><h2 id="nexus-heading">Complex systems.<br /><span>Clear human control.</span></h2></div><div><p>One coordination layer for the operator, the aircraft, the ground platform, and the handoff. Nexus V1 is being designed around human authorization at consequential steps.</p><Link className={s.quietLink} href="/technology/#nexus">Inside Nexus<Arrow diagonal /></Link></div></div><NexusConcept /></section>

    <section className={`${s.section} ${s.access}`} aria-labelledby="access-heading"><div className={s.accessGraphic} aria-hidden="true"><span>REACH → ACCESS</span><svg viewBox="0 0 520 330" fill="none"><path d="M0 280h80v-40h70v-40h70v-40h70v-40h70V80h160" stroke="currentColor" strokeOpacity=".3" /><path d="M0 300h100v-40h70v-40h70v-40h70v-40h70v-40h140" stroke="currentColor" strokeOpacity=".1" /><path data-draw d="M15 240h37q18 0 18-20v-10q0-15 20-15h38q20 0 20-20v-10q0-15 20-15h38q20 0 20-20v-10q0-15 20-15h38q20 0 20-20V75q0-15 20-15h130" stroke="#3171e5" strokeWidth="2" pathLength="1" /><circle cx="454" cy="60" r="7" fill="#3171e5" /><circle cx="454" cy="60" r="19" stroke="#3171e5" strokeOpacity=".3" /><path d="M26 85h14m-7-7v14M444 278h14m-7-7v14" stroke="currentColor" strokeOpacity=".4" /></svg><span>CONCEPTUAL FINAL-ACCESS PATH</span></div><div data-reveal="editorial"><Kicker number="05">Beyond aerial arrival</Kicker><h2>The last meters<br /><span>matter, too.</span></h2><p>Rapid aerial response addresses distance. Ground is intended to continue the approach across terrain and into constrained spaces, directed by an operator.</p><p>That final-access role is a design objective we still need to build, test, and validate.</p><Action href="/technology/" secondary>Explore the architecture</Action></div></section>

    <section className={`${s.section} ${s.development}`} aria-labelledby="development-heading"><Kicker number="06">Current development</Kicker><div className={s.sectionIntro} data-reveal="editorial"><h2 id="development-heading">Ambition, built<br /><span>one proof at a time.</span></h2><div><span className={s.stage}>PRE-SEED / PRE-PROTOTYPE</span><p className={s.lead}>Our next milestone: an integrated human-in-the-loop demonstration.</p><p>Air V1. Ground V1. Nexus V1.<br />Build the system. Generate the evidence.</p></div></div><ol className={s.roadmap}>{[{name:"Build",time:"NOW",text:"Air, Ground, and Nexus V1 engineering."},{name:"Integrate",time:"NEXT",text:"Demonstrate the complete, operator-directed workflow."},{name:"Validate",time:"THEN",text:"Controlled testing, measured reliability, and appropriate regulatory pathways."},{name:"Pilot",time:"LATER",text:"Partner-led evaluation and operational evidence."}].map((step,i)=><li key={step.name} data-reveal="roadmap"><span className={s.roadmapDot} /><div><span className={s.roadmapTime}>{step.time}</span><h3><span>0{i+1}</span>{step.name}</h3><p>{step.text}</p></div></li>)}</ol></section>

    <section className={`${s.section} ${s.team}`} aria-labelledby="team-heading"><Kicker number="07">People behind the platform</Kicker><div className={s.teamIntro} data-reveal="editorial"><h2 id="team-heading">A shared belief.<br /><span>A developing system.</span></h2><Action href="/team/" secondary>Meet the Team</Action></div><div className={s.people}>{people.map((person,i)=><article key={person.name} className={s.person} data-reveal="person"><div className={s.portrait}>{person.portrait?<Image src={person.portrait} width={360} height={430} alt={person.name} unoptimized />:<><span>{person.initials}</span><i aria-hidden="true">+</i></>}<span className={s.personNumber}>0{i+1}</span></div><h3>{person.name}</h3><span className={s.personRole}>{person.role}</span><p>{person.contribution}</p><p className={s.credential}>{person.credential}</p></article>)}</div><Link href="/mission/" className={s.missionLink}>Why we’re building MARDE<Arrow diagonal /></Link></section>

    <section className={`${s.section} ${s.faq}`} aria-labelledby="faq-heading"><div><Kicker number="08">A few clear answers</Kicker><h2 id="faq-heading">Built on<br /><span>open questions.</span></h2><Link href="/faq/" className={s.quietLink}>All questions<Arrow diagonal /></Link></div><Questions items={faqs.slice(0,4)} /></section>

    <section className={s.close} aria-labelledby="close-heading"><div className={s.closeGlow} aria-hidden="true" /><Kicker>Help shape what comes next</Kicker><h2 id="close-heading" data-reveal="editorial">The response starts<br /><span>with a conversation.</span></h2><p>For EMS teams, engineers, researchers, and people<br className={s.desktopBreak} /> who believe the minutes before arrival matter.</p><div className={s.actions}><Action href="/contact/" light>Contact MARDE</Action><Link className={s.quietLink} href="/support/">Support MARDE R&amp;D<Arrow diagonal /></Link></div><span className={s.closeMark} aria-hidden="true">+</span></section>
  </div>;
}
