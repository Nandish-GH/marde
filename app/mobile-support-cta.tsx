"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileSupportCta() {
  const pathname = usePathname();

  if (pathname === "/support" || pathname === "/support/") {
    return null;
  }

  return (
    <>
      <div className="mobile-support-cta">
        <Link className="button button-primary" href="/support">Support Our R&amp;D</Link>
      </div>
      <div className="mobile-support-cta-spacer" aria-hidden="true" />
    </>
  );
}
