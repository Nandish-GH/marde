import Link from "next/link";
import { site } from "./content";

export function Mark() { return <span className="mark" aria-hidden="true"><i /><i /><i /></span>; }
export function DonateButton({ className = "" }: { className?: string }) { return <a className={`button button-primary ${className}`} href={site.donateUrl} target="_blank" rel="noreferrer">Support our R&amp;D <span aria-hidden="true">↗</span></a>; }
export function Header() { return <header className="header"><Link href="/" className="brand"><Mark /> <span>MARDE</span></Link><nav aria-label="Main navigation"><Link href="/technology">Technology</Link><Link href="/team">Team</Link><Link href="/mission">Mission</Link><Link href="/support" className="nav-support">Support</Link></nav></header>; }
export function Footer() { return <footer className="footer"><div><Link href="/" className="brand"><Mark /> <span>MARDE</span></Link><p>Response starts before arrival.</p></div><div className="footer-links"><Link href="/technology">Technology</Link><Link href="/team">Team</Link><Link href="/mission">Mission</Link><Link href="/support">Support</Link><a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div><div><DonateButton /><p className="copyright">© {new Date().getFullYear()} MARDE, Inc.</p></div></footer>; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }
export function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }
