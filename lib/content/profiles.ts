import { people } from "./v2";
import { nandishProfile } from "../nandish-profile";
export const profileSlugs = ["nandish", "snehi", "aanya", "arjun", "saathvika"] as const;
const details = [
{bio:"Nandish leads product direction, software architecture and system integration, alongside company strategy and regulatory and customer outreach.",credentials:["AHA BLS certified","RWJUH teen volunteer · Cardiology shadowing","Allied-health associate degree candidate","Programming since age eight"]},
{bio:"Snehi leads technical strategy and engineering coordination, bringing an AI/ML and research background to MARDE’s system architecture.",credentials:["AI/ML research and multiple research papers","AI/ML internship and lab software experience","Rutgers MedTech Hackathon wins","FBLA national qualification"]},
{bio:"Aanya focuses on clinical workflow research and healthcare relationships, helping connect engineering questions with the realities of care.",credentials:["RWJ University Hospital volunteer and patient ambassador","Physician shadowing","Red Cross CPR/AED certification","Research and HOSA service experience"]},
{bio:"Arjun leads aerial platform engineering and flight-control development, connecting drone-building experience with MARDE’s integrated system goals.",credentials:["Drone building and piloting","TSA state placement","Cybersecurity and blockchain internship","Research experience"]},
{bio:"Saathvika leads brand, content and community outreach, helping people understand MARDE’s direction and connect with the work.",credentials:["Business and consulting certifications","FBLA national qualification","Social-media content and community coordination"]},
] as const;
export const teamProfiles = people.map((person,index)=>({...person,...details[index],slug:profileSlugs[index]}));
export type TeamProfile = (typeof teamProfiles)[number];
export function profileShare(person:TeamProfile){return person.slug === "nandish" ? {title:nandishProfile.shareTitle,text:nandishProfile.shareText,url:nandishProfile.profileUrl} : {title:`${person.name} — MARDE`,text:`${person.name}, ${person.role} at MARDE`,url:`https://mardeinc.com/${person.slug}/`};}
