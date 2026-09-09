"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Keep corporate chrome out of individually designed contact pages, including SSR.
export function SiteShell({ children, chrome }: { children: ReactNode; chrome: ReactNode }) {
  const pathname = usePathname().replace(/\/+$/, "");
  if (["/nandish", "/snehi", "/aanya", "/arjun", "/saathvika"].includes(pathname)) return <main id="main-content" tabIndex={-1}>{children}</main>;
  return chrome;
}

export function PageSurface({children}:{children:ReactNode}){
  return <div className="v2-shell">{children}</div>;
}
