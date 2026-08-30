"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LoadingOverlay } from "./loading-overlay";
import { SiteMotion } from "./site-motion";

export function LegacyExperience() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;
    document.documentElement.classList.add("marde-intro-complete");
    return () => document.documentElement.classList.remove("marde-intro-complete");
  }, [isHomepage]);

  if (isHomepage) return null;
  return <><LoadingOverlay /><SiteMotion /></>;
}
