import Link from "next/link";
import type { ReactNode } from "react";
import s from "./primitives.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" /></svg>;
}
export function Action({ href, children, secondary = false, light = false }: { href: string; children: ReactNode; secondary?: boolean; light?: boolean }) {
  return <Link href={href} className={`${s.action} ${secondary ? s.secondary : ""} ${light ? s.light : ""}`}>{children}<Arrow /></Link>;
}
export function Kicker({ children, number }: { children: ReactNode; number?: string }) {
  return <p className={s.kicker}>{number ? <span>{number}</span> : <i aria-hidden="true" />} {children}</p>;
}
