"use client";

import { useEffect, useRef, useState } from "react";

export function ShareButton({ title, text, url, className, children }: {
  title: string; text: string; url: string; className?: string; children: React.ReactNode;
}) {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function announce(message: string) {
    setStatus(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 3500);
  }
  async function share() {
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; }
      catch (error) { if (error instanceof Error && error.name === "AbortError") return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      announce("Link copied");
    } catch {
      // A selectable link also works when browser clipboard permissions are denied.
      setStatus("Copy this link:");
    }
  }
  return <>
    <button className={className} type="button" onClick={share}>{children}</button>
    <div className="contact-share-status" role="status" aria-live="polite">
      {status}{status === "Copy this link:" && <input aria-label="Profile link to copy" readOnly value={url} onFocus={(event) => event.target.select()} />}
    </div>
  </>;
}
