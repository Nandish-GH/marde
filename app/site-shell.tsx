"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Keep corporate chrome out of individually designed contact pages, including SSR.
export function SiteShell({ children, chrome }: { children: ReactNode; chrome: ReactNode }) {
  const pathname = usePathname().replace(/\/+$/, "");
  if (pathname === "/nandish") return <main id="main-content" tabIndex={-1}>{children}</main>;
  return chrome;
}

export function PageSurface({children}:{children:ReactNode}){
  const path=usePathname().replace(/\/+$/, "");
  return <div className={path === "" || path === "/contact" ? "v2-shell" : "legacy"}>{children}</div>;
}
