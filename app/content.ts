export const site = {
  name: "MARDE",
  tagline: "Response Starts Before Arrival",
  email: "team.marde@gmail.com",
  instagram: "https://instagram.com/marde.inc",
  instagramHandle: "@marde.inc",
  donateUrl:
    process.env.NEXT_PUBLIC_STRIPE_DONATION_URL ||
    "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mardeinc.com",
};

export const nav = [
  ["Technology", "/technology"],
  ["Team", "/team"],
  ["Mission", "/mission"],
  ["Support", "/support"],
] as const;

export const team = [
  {
    initials: "N",
    name: "Nandish",
    title: "President & CEO",
    bio: "Founder; leads company strategy and operations.",
  },
  {
    initials: "AS",
    name: "Aanya Shah",
    title: "Chief Medical Officer",
    bio: "Leads medical strategy, clinical workflow guidance, and EMS/healthcare relationships.",
  },
  {
    initials: "S",
    name: "Snehi",
    title: "Chief Technology Officer",
    bio: "Leads technology strategy across software, AI/ML, robotics, and autonomous systems engineering.",
  },
  {
    initials: "AM",
    name: "Arjun Muthuchetty",
    title: "Drone Engineer",
    bio: "Leads mechanical design and drone engineering for MARDE Air.",
  },
  {
    initials: "Sv",
    name: "Saathvika",
    title: "Social Media",
    bio: "Manages MARDE's public community presence (@marde.inc).",
    instagram: true,
  },
  {
    initials: "DK",
    name: "Devesh Khilnani",
    title: "Advisor",
    bio: "Provides guidance to the MARDE team.",
  },
] as const;

/** Search-verified via CARES 2024 Metrics Summary (May 2025) and AHA guidelines citing CARES data. */
export const statistics = [
  {
    value: "6.4 min",
    label:
      "median EMS response time for non-traumatic out-of-hospital cardiac arrests in 2024 CARES data.",
    source: "CARES 2024 Metrics Summary",
    href: "https://mycares.net/sitepages/uploads/2025/CARES%2020250516%202024%20Metrics%20Summary.pdf",
  },
  {
    value: "41.7%",
    label:
      "of non-traumatic out-of-hospital cardiac arrests received bystander CPR in 2024 CARES data.",
    source: "CARES 2024 Metrics Summary",
    href: "https://mycares.net/sitepages/uploads/2025/CARES%2020250516%202024%20Metrics%20Summary.pdf",
  },
  {
    value: "50.2%",
    label:
      "of those arrests were unwitnessed by bystanders in 2024 CARES data — no one on scene to act before EMS arrives.",
    source: "CARES 2024 Metrics Summary",
    href: "https://mycares.net/sitepages/uploads/2025/CARES%2020250516%202024%20Metrics%20Summary.pdf",
  },
];

export const home = {
  hero: {
    eyebrow: "Autonomous emergency response · In development",
    headline: ["Response starts", "before", "arrival."],
    subhead:
      "MARDE is building autonomous first-response systems to close the gap between when someone collapses and when help arrives.",
    primaryCta: "Support Our R&D",
    secondaryCta: "Learn About the Technology",
    secondaryHref: "/technology",
    graphicLabel: "01 / FIRST RESPONSE\nSYSTEMS IN DESIGN",
  },
  problem: {
    eyebrow: "The gap",
    title: ["Minutes matter.", "Access is uneven."],
    body: "Emergency response is a system of people, distance, and time. MARDE is beginning with the interval before professional help can arrive.",
  },
  solution: {
    eyebrow: "In development",
    title: ["Two paths.", "One response system."],
    air: {
      code: "01 / AIR",
      name: "MARDE Air",
      body: "An aerial first-response concept designed to reach scenes ahead of traditional response.",
      link: "Explore MARDE Air",
    },
    ground: {
      code: "02 / GROUND",
      name: "MARDE Ground",
      body: "A modular ground robot concept designed around adaptable payload modules.",
      link: "Explore MARDE Ground",
    },
  },
  teamTeaser: {
    eyebrow: "The people behind MARDE",
    title: ["Built with care,", "from the start."],
    link: "Meet the team",
  },
  closing: {
    eyebrow: "Follow the work",
    title: ["Help us build the", "next first response."],
    body: "Early support helps move design, testing, and regulatory preparation forward.",
    newsletterTitle: "Follow our progress",
    newsletterBody: "Leave your email for occasional updates on MARDE's R&D work.",
  },
};

export const technology = {
  hero: {
    eyebrow: "Technology · In development",
    title: ["Designed for the", "first critical minutes."],
    body: "MARDE is exploring complementary aerial and ground systems for broad emergency-response use. Neither system is a finished or tested product.",
  },
  air: {
    eyebrow: "MARDE Air",
    title: "An aerial first-response concept.",
    body: "MARDE Air is an autonomous aerial-response concept being designed to help bring critical equipment toward an emergency scene. Its intended role is to complement—not replace—professional EMS response.",
    status: "In design",
    regulatory:
      "For future experimental development, MARDE is pursuing FAA registration under Part 47 and a Special Airworthiness Certificate in the Experimental Category (SAC-EC). In plain language: this pathway is intended for developing and evaluating an aircraft; it is not authorization for a deployed emergency service.",
  },
  ground: {
    eyebrow: "MARDE Ground",
    title: ["One chassis.", "Multiple possible roles."],
    body: "MARDE Ground is a modular autonomous ground-robot concept in design. A shared chassis could support swappable payload modules—such as an AED—while allowing the underlying system to evolve deliberately.",
    status: "In design",
    detail:
      "The modular approach is intentionally described at a high level while MARDE continues its design and intellectual-property work.",
  },
  phases: [
    ["V1", "Manual operation", "A future starting point for supervised, human-directed evaluation."],
    ["V1.5", "Semi-autonomous operation", "A future phase pursuing defined assistive capabilities with human oversight."],
    ["V2", "Full autonomy", "A long-term goal, subject to safety validation and applicable approvals."],
  ] as const,
  roadmap: {
    eyebrow: "A future roadmap",
    title: ["Progress, with", "appropriate oversight."],
    body: "Development would move from manual systems toward higher levels of autonomy only as safety work, testing, and approvals support it.",
  },
  regulatory: {
    eyebrow: "Long-term regulatory pathway",
    title: ["Two domains.", "A careful approach."],
    faa: "Future aerial operation will require an aviation pathway appropriate to the work and operating context — including Part 47 registration and SAC-EC for experimental development.",
    fda: "If MARDE develops medical-device payload modules, FDA 510(k) clearance would be a future-stage milestone—not a current status.",
  },
};

export const mission = {
  hero: {
    eyebrow: "Why MARDE",
    title: ["The moment before", "help arrives."],
    body: "We believe emergency response can begin earlier—without losing sight of the people and systems already doing the work.",
  },
  story: {
    eyebrow: "Our starting point",
    title: ["A personal moment", "that revealed a gap."],
    paragraphs: [
      "MARDE began with a personal experience: witnessing someone collapse when no bystanders were present. It made a response-time challenge visible in a very human way.",
      "That moment raised a broader question: how might technology help shorten the gap before professional responders arrive, while respecting the crucial role of EMS and clinical care?",
    ],
  },
  statement: {
    eyebrow: "Our mission",
    body: "To develop thoughtful first-response systems that help extend the reach of emergency care.",
  },
  funding: {
    eyebrow: "Why early support matters",
    title: ["Funding the work", "before the work shows."],
    items: [
      ["Component costs", "for early hardware and system development."],
      ["Testing preparation", "to support a careful, staged development process."],
      ["Regulatory filing", "and readiness work for future aviation and medical-device pathways."],
    ],
  },
  regulatory: {
    eyebrow: "The long view",
    title: ["Safety needs", "two lenses."],
    body: "MARDE's long-term path may involve aviation oversight for aerial operations and, for future medical modules, FDA review. Both pathways matter because emergency technology must earn trust before it earns a role.",
  },
};

export const support = {
  hero: {
    eyebrow: "Support MARDE",
    title: ["Make the next step", "possible."],
    body: "Your support helps advance early-stage design, preparation, and R&D for MARDE's first-response concepts.",
  },
  donate: {
    eyebrow: "Donate",
    title: "Support our R&D.",
    body: "Donations go toward early research and development, including components, testing preparation, and regulatory readiness.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    body: "For questions, early conversations, or general correspondence, reach the team directly or send a message below.",
  },
  follow: {
    eyebrow: "Follow",
    title: "Follow our progress.",
    body: "Find MARDE updates and the people behind the work on Instagram.",
  },
  newsletter: {
    eyebrow: "Follow our progress",
    title: "Stay close to the work.",
    body: "Leave your email for occasional updates, or follow MARDE on Instagram.",
  },
};

export const teamPage = {
  hero: {
    eyebrow: "The team",
    title: ["Small team.", "Serious intent."],
    body: "MARDE is being shaped by people working across strategy, medical guidance, engineering, and community.",
  },
};
