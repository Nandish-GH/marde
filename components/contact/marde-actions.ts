import { InstagramLogo, TiktokLogo, Heart, Presentation } from "@phosphor-icons/react/ssr";
import type { ContactAction } from "./action-row";

// Shared by every team contact page; personal links belong to each profile.
export const mardeActions: ContactAction[] = [
  { label: "Instagram", href: "https://www.instagram.com/marde.inc", icon: InstagramLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@marde.inc", icon: TiktokLogo },
  { label: "Support MARDE", href: "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00", icon: Heart },
  { label: "Pitch Deck", href: "https://canva.link/bk6ie0o3romp57w", icon: Presentation },
];
