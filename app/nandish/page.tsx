import type { Metadata } from "next";
import Image from "next/image";
import { Envelope, LinkedinLogo, CalendarBlank, InstagramLogo, TiktokLogo, Heart, GithubLogo, Presentation, UserPlus, ShareNetwork, CaretRight } from "@phosphor-icons/react/ssr";
import { nandishProfile as profile } from "../../lib/nandish-profile";
import { ActionRow } from "../../components/contact/action-row";
import { ShareButton } from "../../components/contact/share-button";
import styles from "./profile.module.css";

export const metadata: Metadata = {
  title: { absolute: profile.shareTitle },
  description: profile.shareText,
  robots: { index: false, follow: false },
  alternates: { canonical: profile.profileUrl },
  openGraph: { title: profile.shareTitle, description: profile.shareText, url: profile.profileUrl },
  twitter: { title: profile.shareTitle, description: profile.shareText },
};

const primaryActions = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Envelope },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinLogo },
  { label: "Schedule", href: profile.schedule, icon: CalendarBlank },
  { label: "Instagram", href: profile.instagram, icon: InstagramLogo },
];
const secondaryActions = [
  { label: "TikTok", href: profile.tiktok, icon: TiktokLogo },
  { label: "Support MARDE", href: profile.supportMarde, icon: Heart },
  { label: "GitHub", href: profile.github, icon: GithubLogo },
  { label: "Pitch Deck", href: profile.pitchDeck, icon: Presentation },
];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function BrandIcon() {
  return <Image src={`${basePath}/brand/marde-icon-light.png`} width={48} height={27} alt="" unoptimized />;
}

export default function NandishPage() {
  return <div className={styles.page}>
    <div className={styles.card}>
      <a className={styles.brand} href={profile.companyUrl} aria-label="Visit MARDE website">
        <BrandIcon /><span>MARDE</span><CaretRight size={17} aria-hidden />
      </a>
      <Image className={styles.portrait} src={`${basePath}${profile.portrait}`} alt={profile.portraitAlt} width={190} height={190} unoptimized preload />
      <header className={styles.identity}>
        <h1>{profile.name}</h1><p>{profile.title}</p><p>{profile.company}</p>
      </header>
      <ActionRow actions={primaryActions} className={styles.primary} />
      <ActionRow actions={secondaryActions} className={styles.secondary} />
      <div className={styles.ctas}>
        <a className={styles.save} href={`${basePath}${profile.vcardUrl}`} download="nandish.vcf"><UserPlus size={21} aria-hidden /><span>ADD TO CONTACTS</span></a>
        <ShareButton className={styles.share} title={profile.shareTitle} text={profile.shareText} url={profile.profileUrl}><ShareNetwork size={20} aria-hidden /><span>SHARE</span></ShareButton>
      </div>
      <div className={styles.signature}>
        <div className={styles.divider}><BrandIcon /></div>
        <p>Response Starts Before Arrival.</p>
      </div>
    </div>
  </div>;
}
