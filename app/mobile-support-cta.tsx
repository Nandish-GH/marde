"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "./content";

export function MobileSupportCta() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (pathname === "/support" || footerVisible) return null;

  return (
    <a className="fixed bottom-3 left-3 right-3 z-30 hidden items-center justify-center gap-4 rounded bg-[#102b39] px-5 py-3.5 text-xs font-bold tracking-wide text-white shadow-[0_10px_28px_rgba(16,43,57,.24)] max-md:flex" href={site.donateUrl} target="_blank" rel="noreferrer">
      Support Our R&amp;D <span aria-hidden="true">↗</span>
    </a>
  );
}
