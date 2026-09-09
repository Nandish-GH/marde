import type { ReactNode } from "react";
import { Kicker, Action } from "./primitives";
import s from "./editorial.module.css";

export function Editorial({ children }: { children: ReactNode }) { return <div className={s.page}>{children}</div>; }
export function PageIntro({ eyebrow, title, text, children }: { eyebrow: string; title: ReactNode; text: string; children?: ReactNode }) {
  return <header className={s.intro}><Kicker>{eyebrow}</Kicker><h1>{title}</h1><div className={s.introBottom}><p>{text}</p>{children}</div></header>;
}
export function Closing({ title = "Let’s build a better response.", text = "For EMS, public-safety teams, engineers and researchers: help shape the system around real operational needs." }: { title?: string; text?: string }) {
  return <section className={s.closing}><Kicker>THE NEXT CONVERSATION</Kicker><h2>{title}</h2><p>{text}</p><Action href="/contact/" light>Contact MARDE</Action></section>;
}
