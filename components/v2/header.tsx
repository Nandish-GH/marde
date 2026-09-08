"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog } from "radix-ui";
import { Arrow } from "./primitives";
import s from "./header.module.css";

const links = [["Technology", "/technology/"], ["Mission", "/mission/"], ["Team", "/team/"], ["Contact", "/contact/"]] as const;
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className={s.header} data-v2-header>
    <Link href="/" className={s.logo} aria-label="MARDE home"><Image src="/brand/marde-logo-horizontal-light.png" width={150} height={40} alt="MARDE" priority unoptimized /></Link>
    <nav aria-label="Main navigation" className={s.desktop}>{links.map(([label, href]) => <Link href={href} key={href} aria-current={pathname.replace(/\/$/, "") === href.replace(/\/$/, "") ? "page" : undefined}>{label}</Link>)}</nav>
    <Link href="/support/" className={s.support}>Support MARDE<Arrow diagonal /></Link>
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={s.menu} aria-label="Open main navigation"><span /><span /></Dialog.Trigger>
      <Dialog.Portal><Dialog.Overlay className={s.overlay} /><Dialog.Content className={s.dialog} data-lenis-prevent>
        <div className={s.menuTop}><Dialog.Title>Navigation</Dialog.Title><Dialog.Close className={s.close} aria-label="Close main navigation">×</Dialog.Close></div>
        <Dialog.Description className="sr-only">Explore MARDE’s technology, mission, team, and ways to connect.</Dialog.Description>
        <nav aria-label="Mobile navigation">{links.map(([label, href], i) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<Arrow diagonal /></Link>)}<Link href="/support/" onClick={() => setOpen(false)}><span>05</span>Support MARDE<Arrow diagonal /></Link></nav>
        <p>Response starts before arrival.</p><a className={s.email} href="mailto:team@mardeinc.com">team@mardeinc.com</a>
      </Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </header>;
}
