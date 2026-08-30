export const site = {
  name: "MARDE",
  tagline: "Response Starts Before Arrival",
  email: "team@mardeinc.com",
  instagram: "https://www.instagram.com/marde.inc",
  instagramHandle: "@marde.inc",
  tiktok: "https://www.tiktok.com/@marde.inc",
  tiktokHandle: "@marde.inc",
  donateUrl:
    process.env.NEXT_PUBLIC_STRIPE_DONATION_URL ||
    "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00",
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
