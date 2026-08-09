export const site = {
  name: "MARDE",
  email: "hello@marde.inc",
  instagram: "https://instagram.com/marde.inc",
  donateUrl: process.env.NEXT_PUBLIC_STRIPE_DONATION_URL || "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00",
};

export const team = [
  ["N", "Nandish", "President & CEO", "Founder; leads company strategy and operations."],
  ["AS", "Aanya Shah", "Chief Medical Officer", "Leads medical strategy, clinical workflow guidance, and EMS/healthcare relationships."],
  ["S", "Snehi", "Chief Technology Officer", "Leads technology strategy across software, AI/ML, robotics, and autonomous systems engineering."],
  ["AM", "Arjun Muthuchetty", "Drone Engineer", "Leads mechanical design and drone engineering for MARDE Air."],
  ["S", "Saathvika", "Social Media", "Manages MARDE’s public community presence."],
  ["DK", "Devesh Khilnani", "Advisor", "Provides guidance to the MARDE team."],
] as const;

export const statistics = [
  { value: "47.7%", label: "of adult out-of-hospital cardiac arrests received bystander CPR in 2024.", source: "AHA adult basic life support guidelines", href: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support" },
  { value: "7.9%", label: "had an AED used by a bystander in 2024 CARES data.", source: "AHA adult basic life support guidelines", href: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support" },
  { value: "10.5%", label: "survived to hospital discharge in 2024 CARES data.", source: "AHA adult basic life support guidelines", href: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support" },
];
