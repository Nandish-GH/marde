"use client";

import { useEffect } from "react";

const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const attributionStorageKey = "marde_utm_attribution";

type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
  }
}

function readAttribution() {
  try {
    return JSON.parse(window.sessionStorage.getItem(attributionStorageKey) || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

export function trackAnalyticsEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, { ...readAttribution(), ...parameters });
}

export function AnalyticsFoundation() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const attribution = Object.fromEntries(
      attributionKeys.flatMap((key) => {
        const value = url.searchParams.get(key);
        return value ? [[key, value]] : [];
      }),
    );
    if (Object.keys(attribution).length) {
      window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution));
    }

    function handleDocumentClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href === "/support" || href === "/support/") {
        trackAnalyticsEvent("support_rnd_click", { link_text: link.textContent?.trim() || "Support" });
      } else if (href.startsWith("mailto:")) {
        trackAnalyticsEvent("contact_click", { contact_method: "email" });
      }
    }

    const nexus = document.getElementById("nexus");
    const observer = nexus && "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          trackAnalyticsEvent("technology_nexus_engagement", { page_path: window.location.pathname });
          observer?.disconnect();
        }, { threshold: 0.35 })
      : null;

    if (nexus && observer) observer.observe(nexus);
    document.addEventListener("click", handleDocumentClick);
    return () => {
      observer?.disconnect();
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
