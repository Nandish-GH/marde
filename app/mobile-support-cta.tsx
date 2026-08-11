"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileSupportCta() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (!footer) return;
    const footerElement = footer;

    function updateFooterVisibility() {
      const bounds = footerElement.getBoundingClientRect();
      setFooterVisible(bounds.top < window.innerHeight && bounds.bottom > 0);
    }

    updateFooterVisibility();
    window.addEventListener("scroll", updateFooterVisibility, { passive: true });
    window.addEventListener("resize", updateFooterVisibility);

    return () => {
      window.removeEventListener("scroll", updateFooterVisibility);
      window.removeEventListener("resize", updateFooterVisibility);
    };
  }, [pathname]);

  if (pathname === "/support" || pathname === "/support/") {
    return null;
  }

  return (
    <div className={`mobile-support-cta${footerVisible ? " is-footer-visible" : ""}`}>
      <Link className="button button-primary" href="/support">Support Our R&amp;D</Link>
    </div>
  );
}
