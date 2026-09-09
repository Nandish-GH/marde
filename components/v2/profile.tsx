import Image from "next/image";
import type { Metadata } from "next";
import { Envelope, LinkedinLogo, GithubLogo, UserPlus, ShareNetwork, CaretRight } from "@phosphor-icons/react/ssr";
import { nandishProfile as nandish } from "../../lib/nandish-profile";
import { profileShare, type TeamProfile } from "../../lib/content/profiles";
import { mardeActions } from "../contact/marde-actions";
import { ActionRow } from "../contact/action-row";
import { ShareButton } from "../contact/share-button";
import { Scheduler } from "./scheduler";
import s from "./profile.module.css";

export function profileMetadata(person:TeamProfile):Metadata{const share=profileShare(person);return {title:{absolute:share.title},description:share.text,robots:{index:false,follow:false},alternates:{canonical:share.url},openGraph:{title:share.title,description:share.text,url:share.url},twitter:{title:share.title,description:share.text}};}
export function Profile({person}:{person:TeamProfile}){
  const share=profileShare(person);
  return <div className={s.page}>
    <svg className={s.background} viewBox="0 0 1400 1100" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-100 850C800 850 400 150 1600 150M-100 890C800 890 440 190 1600 190"/><path d="M190 0v1100M1190 0v1100M0 210h1400M0 860h1400" strokeDasharray="2 12"/><path d="M280 310h30m-15-15v30M1080 780h30m-15-15v30M1020 190h30m-15-15v30"/><circle cx="280" cy="750" r="110"/><circle cx="1120" cy="260" r="75"/></svg>
    <div className={s.card}>
      <a className={s.brand} href={nandish.companyUrl} aria-label="Visit MARDE website"><Image src="/brand/marde-icon-light.png" width={43} height={25} alt="" unoptimized/><span>MARDE</span><CaretRight size={17} aria-hidden/></a>
      <div className={s.portrait}>{person.portrait?<Image src={person.portrait} alt={`${person.name}, ${person.role} of MARDE`} width={210} height={210} unoptimized preload/>:<span aria-hidden="true">{person.initials}</span>}</div>
      <header className={s.identity}><p className={s.eyebrow}>MARDE / DIRECT CONTACT</p><h1>{person.name}</h1><p>{person.role}</p><p>MARDE, Inc.</p></header>
      {person.slug==="nandish"?<ul className={s.primary}><li><a href={`mailto:${nandish.email}`}><span><Envelope size={24} aria-hidden/></span>Email</a></li><li><a href={nandish.linkedin} target="_blank" rel="noopener noreferrer"><span><LinkedinLogo size={24} aria-hidden/></span>LinkedIn</a></li><li><Scheduler url={nandish.schedule}/></li><li><a href={nandish.github} target="_blank" rel="noopener noreferrer"><span><GithubLogo size={24} aria-hidden/></span>GitHub</a></li></ul>:<p className={s.contactTeam}><a href="mailto:team@mardeinc.com">Connect through MARDE <Envelope size={18} aria-hidden/></a></p>}
      <ActionRow actions={mardeActions} className={s.secondary}/>
      <div className={s.ctas}><a className={s.save} href={`/contacts/${person.slug}.vcf`} download={`${person.slug}.vcf`}><UserPlus size={21} aria-hidden/><span>ADD TO CONTACTS</span></a><ShareButton className={s.share} title={share.title} text={share.text} url={share.url}><ShareNetwork size={20} aria-hidden/><span>SHARE</span></ShareButton></div>
      <div className={s.signature}><span aria-hidden="true">+</span><p>Response Starts Before Arrival.</p></div>
    </div>
  </div>;
}
