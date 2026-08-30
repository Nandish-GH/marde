import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  AirplaneTilt, ArrowRight, Broadcast, CheckCircle, Crosshair, Cube, FirstAidKit,
  HandPalm, Heartbeat, MapPin, NavigationArrow, ShieldCheck, Truck, UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Accordion } from "./accordion";
import { DonateButton, EmailSignup } from "./components";
import { home, statistics, team } from "./content";
import { Button } from "../components/ui/button";
import styles from "./homepage.module.css";
import { pageMetadata } from "./metadata";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = pageMetadata({
  title: "MARDE | Emergency Response Robotics Before EMS Arrival",
  description:
    "MARDE is developing an integrated emergency-response robotics platform combining aerial transport, ground access, command software, and modular intervention capabilities.",
});

const relay = [
  ["Dispatch", Broadcast], ["Nexus", Crosshair], ["Air", AirplaneTilt],
  ["Ground", Truck], ["Intervention Module", FirstAidKit], ["EMS Arrival", Heartbeat],
] as const;

const responseSteps = [
  ["01", "Coordinate", "Nexus assembles a shared view of the response.", Crosshair],
  ["02", "Reach", "Air and Ground concepts move capability toward the scene.", NavigationArrow],
  ["03", "Access", "The system is intended to support the final approach.", MapPin],
  ["04", "Intervene", "Any consequential action remains human-authorized.", HandPalm],
  ["05", "Continue care", "MARDE is intended to complement, not replace, EMS.", Heartbeat],
] as const;

const homeFaqs = [
  { question: "What is MARDE?", answer: "MARDE is developing an integrated robotic emergency-response platform intended to begin physical intervention before EMS arrival." },
  { question: "Is MARDE currently operational?", answer: "No. MARDE is pre-prototype and its Air, Ground, Nexus, and intervention-module concepts are not finished or deployed products." },
  { question: "What are MARDE Air and MARDE Ground?", answer: "MARDE Air is intended for rapid aerial transport; MARDE Ground is intended for final approach and constrained access. Nexus coordinates the response with a human in the loop, and modular intervention capabilities are intended to support the scene." },
  { question: "How can I support MARDE?", answer: "You can support early R&D through a donation, follow project updates, or contact the team through the Support page." },
] as const;

function Kicker({ index, children, inverse = false }: { index: string; children: React.ReactNode; inverse?: boolean }) {
  return <p className={`${styles.kicker} ${inverse ? styles.kickerInverse : ""}`}><span>{index}</span>{children}</p>;
}

export default function Home() {
  return (
    <div className={styles.home}>
      <StructuredData />
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroTexture} aria-hidden="true"><Image src="/illustrations/nexus-map-texture.webp" alt="" fill loading="eager" sizes="(min-width: 900px) 55vw, 100vw" /></div>
        <div className={styles.heroCopy}>
          <Kicker index="SYS / 01">Integrated robotic emergency response</Kicker>
          <h1 id="home-title">Response Starts<br />Before Arrival</h1>
          <p>{home.hero.subhead}</p>
          <div className={styles.actions}>
            <Button asChild variant="accent"><Link href="/technology/">Explore the system <ArrowRight /></Link></Button>
            <Button asChild variant="quiet"><Link href="/mission/">Why MARDE</Link></Button>
          </div>
        </div>
        <div className={styles.relayPanel} aria-label="Operational system relay">
          <div className={styles.panelLabel}><span>Operational system relay</span><span>Concept sequence</span></div>
          <ol className={styles.relayList}>
            {relay.map(([label, Icon], index) => <li key={label}><span className={styles.relayIcon}><Icon aria-hidden="true" /></span><strong>{label}</strong>{index < relay.length - 1 && <ArrowRight className={styles.relayArrow} aria-hidden="true" />}</li>)}
          </ol>
          <p className={styles.relayNote}><UserCircle aria-hidden="true" /><span><strong>Human authorization</strong> remains part of consequential decisions.</span></p>
        </div>
        <dl className={styles.companyStrip}>
          <div><dt>Incorporation</dt><dd>Delaware C-Corporation</dd></div>
          <div><dt>Headquarters</dt><dd>New Jersey</dd></div>
          <div><dt>Stage</dt><dd>Pre-seed</dd></div>
          <div><dt>Development</dt><dd>Pre-prototype</dd></div>
          <div><dt>Commercial status</dt><dd>Pre-revenue</dd></div>
          <div><dt>System ID</dt><dd>MRD-1.0</dd></div>
        </dl>
      </section>

      <section className={`${styles.section} ${styles.gap}`} aria-labelledby="gap-title">
        <div className={styles.sectionIntro}>
          <Kicker index="02">The response gap</Kicker>
          <h2 id="gap-title">Minutes matter.<br />The gap is real.</h2>
          <p>{home.problem.body} The figures shown are national CARES observations—not evidence of MARDE outcomes.</p>
        </div>
        <div className={styles.stats}>
          {statistics.map((stat) => <article key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p><a href={stat.href} target="_blank" rel="noreferrer">Source: CARES 2024 <ArrowRight /></a></article>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.how}`} aria-labelledby="how-title">
        <div className={styles.sectionIntro}>
          <Kicker index="03">How MARDE works</Kicker>
          <h2 id="how-title">A coordinated relay with human authorization at every step.</h2>
          <p>A conceptual response path showing how MARDE systems could coordinate, reach, access, intervene, and continue care alongside professional responders.</p>
        </div>
        <ol className={styles.steps}>{responseSteps.map(([code, title, body, Icon]) => <li key={code}><span><Icon aria-hidden="true" /></span><small>{code} / Response path</small><h3>{title}</h3><p>{body}</p></li>)}</ol>
        <div className={styles.authorization}><UserCircle aria-hidden="true" /><div><strong>Human authorization</strong><p>Consequential medical actions remain human-authorized.</p></div><CheckCircle aria-hidden="true" /></div>
      </section>

      <section className={`${styles.section} ${styles.system}`} aria-labelledby="system-title">
        <div className={styles.systemHeading}><Kicker index="04">The MARDE system</Kicker><h2 id="system-title">One platform.<br />A coordinated response.</h2></div>
        <div className={styles.systemGrid}>
          <article><div className={styles.systemVisual}><Image src="/illustrations/marde-air-concept.svg" alt="MARDE Air aerial system design concept" width={800} height={520} /></div><small>AIR / RAPID TRANSPORT CONCEPT</small><h3>MARDE Air</h3><p>{home.solution.air.body}</p><Link href="/technology/#air">Explore Air <ArrowRight /></Link></article>
          <article><div className={styles.systemVisual}><Image src="/illustrations/marde-ground-concept.svg" alt="MARDE Ground robotic system design concept" width={800} height={520} /></div><small>GROUND / FINAL APPROACH CONCEPT</small><h3>MARDE Ground</h3><p>{home.solution.ground.body}</p><Link href="/technology/#ground">Explore Ground <ArrowRight /></Link></article>
          <article><div className={`${styles.systemVisual} ${styles.moduleVisual}`}><Image src="/illustrations/marde-intervention-module.jpg" alt="MARDE intervention module enclosure concept" width={800} height={800} /></div><small>MODULE / TASK-SPECIFIC CAPABILITY</small><h3>Intervention Modules</h3><p>Modular intervention capabilities are intended to support the scene. Design, intended use, and any required review would be evaluated individually.</p><Link href="/technology/#intervention-modules">Explore Modules <ArrowRight /></Link></article>
        </div>
      </section>

      <section className={styles.nexus} id="home-nexus" aria-labelledby="nexus-title">
        <div className={styles.nexusIntro}><Kicker index="05" inverse>Nexus operational preview</Kicker><h2 id="nexus-title">Nexus connects the system.</h2><p>{home.solution.nexus.body}</p><Button asChild variant="quiet"><Link href="/technology/#nexus">Explore Nexus <ArrowRight /></Link></Button></div>
        <div className={styles.nexusInterface} aria-label="Simulated MARDE Nexus mission interface">
          <header><span>NEXUS / SIMULATED MISSION</span><span>CONCEPT INTERFACE</span></header>
          <div className={styles.nexusBody}>
            <div className={styles.missionMap}><Image src="/illustrations/nexus-map-texture.webp" alt="" fill sizes="(min-width: 900px) 45vw, 90vw" /><div><Crosshair aria-hidden="true" /><strong>Mission coordination</strong><span>Air · Ground · Module</span></div></div>
            <div className={styles.missionStatus}><small>Mission status</small><p><AirplaneTilt /> Air <span>En route</span></p><p><Truck /> Ground <span>Positioning</span></p><p><Cube /> Module <span>Staged</span></p><p><Heartbeat /> EMS <span>En route</span></p></div>
            <div className={styles.missionActivity}><small>Mission activity</small><p>Incident received</p><p>Air en route</p><p>Ground positioning</p><p>Module staged</p><div><strong>HUMAN AUTHORIZATION</strong><small>Final Decision Authority</small><span>Awaiting human authorization</span></div></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.autonomy}`} aria-labelledby="autonomy-title">
        <div className={styles.sectionIntro}><Kicker index="06">Development approach</Kicker><h2 id="autonomy-title">Autonomy that supports people, not replaces them.</h2><p>Development is intended to advance in stages, subject to safety work, validation, and applicable approvals.</p></div>
        <ol><li><span>01</span><strong>Teleoperated</strong><small>Human-directed</small></li><li><span>02</span><strong>Assisted navigation</strong><small>Human oversight</small></li><li><span>03</span><strong>Semi-autonomous</strong><small>Defined assistance</small></li><li><span>04</span><strong>Higher autonomy</strong><small>Long-term goal</small></li></ol>
      </section>

      <section className={`${styles.section} ${styles.peopleFaq}`}>
        <div><Kicker index="07">The team</Kicker><h2>Built by a focused, multidisciplinary team.</h2><div className={styles.teamList}>{team.map((member) => <article key={member.name}><span>{member.initials}</span><div><strong>{member.name}</strong><small>{member.title}</small></div></article>)}</div><Link className={styles.textLink} href="/team/">Meet the team <ArrowRight /></Link></div>
        <div><Kicker index="08">FAQ preview</Kicker><h2>Questions, answered.</h2><Accordion items={homeFaqs} variant="home" className={styles.faqList} single /><Link className={styles.textLink} href="/faq/">View all FAQs <ArrowRight /></Link></div>
      </section>

      <section className={styles.closing}>
        <div><Kicker index="09" inverse>Follow the work</Kicker><h2>Help us close the response gap.</h2><p>Early support helps move design, testing, and regulatory preparation forward.</p></div>
        <div><EmailSignup compact /><DonateButton label="Contribute to R&D" /></div>
        <ShieldCheck className={styles.closingMark} aria-hidden="true" />
      </section>
    </div>
  );
}
