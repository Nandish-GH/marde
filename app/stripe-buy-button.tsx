import Script from "next/script";
import { createElement } from "react";
import { preconnect, preload } from "react-dom";

const stripeBuyButtonId =
  process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID || "buy_btn_1TtAD21bFOKTUCbJZQf715GX";
const stripePublishableKey =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
  "pk_live_51T6KL71bFOKTUCbJCVEMdj7FUgESTmcwiYprdrD9GueyE9oU3BCZGWXGRDKhT5pZ2oEQGN29Zm0watOaQQxaE4Cl00HSYtZE1P";
const stripeBuyButtonScript = "https://js.stripe.com/v3/buy-button.js";

export function StripeBuyButton() {
  preconnect("https://js.stripe.com");
  preload(stripeBuyButtonScript, { as: "script" });

  return (
    <div className="stripe-buy-button-shell">
      <Script src={stripeBuyButtonScript} strategy="afterInteractive" />
      {createElement("stripe-buy-button", {
        "buy-button-id": stripeBuyButtonId,
        "publishable-key": stripePublishableKey,
      })}
    </div>
  );
}
