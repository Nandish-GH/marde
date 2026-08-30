"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { nav } from "../lib/site-config";
import { cn } from "../lib/utils";

function normalize(pathname: string) {
  return pathname === "/" ? pathname : `${pathname.replace(/\/+$/, "")}/`;
}

function Links({ pathname, close }: { pathname: string; close?: () => void }) {
  return nav.map(([label, href]) => {
    const current = pathname === href;
    return <Link key={href} href={href} aria-current={current ? "page" : undefined} onClick={close}>{label}</Link>;
  });
}

export function Header() {
  const pathname = normalize(usePathname());
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);

  return (
    <header className={cn("or-header", scrolled && "is-scrolled")}>
      <div className="or-header-inner">
        <Link href="/" className="or-brand" aria-label="MARDE home"><Image src="/brand/marde-logo-horizontal.png" alt="" width={226} height={64} loading="eager" /></Link>
        <nav className="or-desktop-nav" aria-label="Main navigation"><Links pathname={pathname} /></nav>
        <Link className="or-contact-link" href="/support/">Contact</Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild><button className="or-menu-button" type="button" aria-label="Open main navigation"><List weight="regular" /></button></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="or-menu-overlay" />
            <Dialog.Content className="or-menu-panel" aria-describedby={undefined}>
              <Dialog.Title className="sr-only">Main navigation</Dialog.Title>
              <div className="or-menu-heading"><Image src="/brand/marde-logo-horizontal.png" alt="MARDE" width={170} height={48} /><Dialog.Close asChild><button type="button" aria-label="Close main navigation"><X /></button></Dialog.Close></div>
              <nav className="or-mobile-nav" aria-label="Main navigation"><Links pathname={pathname} close={() => setOpen(false)} /></nav>
              <Link className="or-mobile-contact" href="/support/" onClick={() => setOpen(false)}>Contact MARDE</Link>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
