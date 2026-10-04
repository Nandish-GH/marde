"use client";

import { createElement, useState } from "react";
import Script from "next/script";
import { site } from "../../lib/site-config";
import { Arrow } from "./primitives";
import s from "./stripe-support.module.css";

export function StripeSupport() {
  const [opened, setOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <div className={s.widget}>
    {!opened ? <button className={s.open} onClick={() => setOpened(true)}>Open Stripe payment options<Arrow /></button> : <>
      <Script src="https://js.stripe.com/v3/buy-button.js" onReady={() => setLoaded(true)} onError={() => setFailed(true)} />
      {!loaded && !failed ? <p role="status">Loading Stripe payment options…</p> : null}
      {failed ? <p role="alert">Stripe could not load here. You can still use the secure payment page below.</p> : null}
      {loaded ? <><p className={s.compactNotice}>Continue on Stripe’s secure page for the full payment options.</p>{createElement("stripe-buy-button", { "buy-button-id": site.stripeBuyButtonId, "publishable-key": site.stripePublishableKey })}</> : null}
    </>}
    <a href={site.donateUrl} target="_blank" rel="noopener noreferrer">{opened ? "Open secure payment page" : "Support MARDE R&D"}<Arrow diagonal /></a>
    {!opened ? <p>Opening these options connects to Stripe. Payment is completed through Stripe.</p> : null}
  </div>;
}
