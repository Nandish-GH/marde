import Link from "next/link";
import { site } from "../../lib/site-config";
import { Arrow } from "./primitives";
import s from "./footer.module.css";

export function Footer() {
  return <footer className={s.footer}>
    <div className={s.top}><Link href="/" className={s.brand} aria-label="MARDE home">MARDE<span>INC.</span></Link><p>Response starts<br />before arrival.</p></div>
    <div className={s.middle}><div><span className={s.label}>START A CONVERSATION</span><a className={s.mail} href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a><p>New Jersey, USA<br />Developing the next layer of emergency response.</p></div>
      <nav aria-label="Footer navigation"><Link href="/technology/">Technology</Link><Link href="/mission/">Mission</Link><Link href="/team/">Team</Link><Link href="/contact/">Contact</Link><Link href="/support/">Support MARDE</Link><Link href="/faq/">FAQ</Link><Link href="/privacy/">Privacy</Link></nav>
      <div className={s.social}><span className={s.label}>FOLLOW THE DEVELOPMENT</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram<Arrow diagonal /></a><a href={site.tiktok} target="_blank" rel="noreferrer">TikTok<Arrow diagonal /></a></div>
    </div><div className={s.bottom}><span>© {new Date().getFullYear()} MARDE Inc. A Delaware C-Corporation.</span><span>Pre-seed. Pre-prototype. Building with purpose.</span><a href="#main-content">Back to top ↑</a></div>
  </footer>;
}
