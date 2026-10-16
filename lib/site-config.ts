export const site = {
  name: "MARDE",
  legalName: "MARDE Inc.",
  description: "MARDE Inc. is developing emergency-response robotics in New Jersey for outdoor AED and tourniquet delivery, scene information and human-supervised communication. Pre-prototype; no deployed systems.",
  tagline: "Response Starts Before Arrival",
  email: "team@mardeinc.com",
  instagram: "https://www.instagram.com/marde.inc",
  instagramHandle: "@marde.inc",
  tiktok: "https://www.tiktok.com/@marde.inc",
  tiktokHandle: "@marde.inc",
  // Public profile verified against the canonical domain, legal name and team email.
  crunchbase: "https://www.crunchbase.com/organization/marde",
  linkedin: "https://www.linkedin.com/company/mardeinc/",
  donateUrl:
    process.env.NEXT_PUBLIC_STRIPE_DONATION_URL ||
    "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00",
  stripeBuyButtonId: process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID || "buy_btn_1TtAD21bFOKTUCbJZQf715GX",
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_live_51T6KL71bFOKTUCbJCVEMdj7FUgESTmcwiYprdrD9GueyE9oU3BCZGWXGRDKhT5pZ2oEQGN29Zm0watOaQQxaE4Cl00HSYtZE1P",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mardeinc.com",
  formspreeFormId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mrpzqyak",
} as const;

export const nav = [
  ["Home", "/"],
  ["Technology", "/technology/"],
  ["Team", "/team/"],
  ["Mission", "/mission/"],
  ["Support", "/support/"],
] as const;
