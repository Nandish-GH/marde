"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsFoundation } from "./analytics";
import s from "./analytics-consent.module.css";

const preferenceKey = "marde_analytics_consent";
let pageChoice: string | null = null;
function readChoice() {
  let value = pageChoice;
  try { value = pageChoice ?? localStorage.getItem(preferenceKey); } catch { /* Optional storage. */ }
  return value === "allowed" || value === "denied" ? value : null;
}
function subscribe(callback: () => void) {
  const changed = (event: StorageEvent) => {
    if (event.key !== preferenceKey && event.key !== null) return;
    // An open tab must also stop an already-loaded SDK when consent is withdrawn elsewhere.
    if (event.oldValue === "allowed" && event.newValue !== "allowed") { location.reload(); return; }
    pageChoice = null;
    callback();
  };
  window.addEventListener("storage", changed);
  window.addEventListener("marde-consent", callback);
  return () => { window.removeEventListener("storage", changed); window.removeEventListener("marde-consent", callback); };
}
function serverChoice() { return undefined; }

export function AnalyticsConsent({ gaId }: { gaId: string }) {
  const choice = useSyncExternalStore(subscribe, readChoice, serverChoice);
  const ready = choice !== undefined;
  const [editing, setEditing] = useState(false);

  function choose(value: "allowed" | "denied") {
    let persisted = false;
    try { localStorage.setItem(preferenceKey, value); persisted = true; } catch { /* Choice applies to this page. */ }
    (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = value === "denied";
    if (value === "denied" && choice === "allowed") {
      // Reload to stop already-loaded third-party scripts and their listeners.
      document.cookie.split(";").forEach(cookie => {
        const name = cookie.trim().split("=")[0];
        if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
        const domains = location.hostname.split(".");
        document.cookie = `${name}=; Max-Age=0; path=/`;
        for (let i = 0; i < domains.length - 1; i++) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=${domains.slice(i).join(".")}`;
        }
      });
      try { sessionStorage.removeItem("marde_utm_attribution"); } catch { /* Optional storage. */ }
      // If storage is unavailable, the next page still defaults to no consent.
      if (persisted) { location.reload(); return; }
    }
    pageChoice = value;
    window.dispatchEvent(new Event("marde-consent"));
    setEditing(false);
  }

  return <>
    {choice === "allowed" ? <><GoogleAnalytics gaId={gaId} /><AnalyticsFoundation /></> : null}
    {ready && (!choice || editing) ? <aside className={s.banner} aria-label="Analytics preferences">
      <div><strong>A choice about analytics.</strong><p>Optional Google Analytics helps us understand site usage. It stays off unless you allow it. <Link href="/privacy/">Privacy policy</Link></p></div>
      <div className={s.actions}><button onClick={() => choose("denied")}>Essential only</button><button onClick={() => choose("allowed")}>Allow analytics</button></div>
    </aside> : ready ? <button className={s.preferences} onClick={() => setEditing(true)}>Analytics preferences</button> : null}
  </>;
}
