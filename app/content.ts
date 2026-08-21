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
};

export const nav = [
  ["Home", "/"],
  ["Technology", "/technology"],
  ["Team", "/team"],
  ["Mission", "/mission"],
  ["Support", "/support"],
] as const;

export const team = [
  {
    initials: "NP",
    name: "Nandish Panchal",
    title: "President & Chief Executive Officer",
    bio: "Founder; leads company strategy and operations.",
  },
  {
    initials: "AS",
    name: "Aanya Shah",
    title: "Chief Medical Officer",
    bio: "Leads medical strategy, clinical workflow guidance, and EMS/healthcare relationships.",
  },
  {
    initials: "SP",
    name: "Snehi Patel",
    title: "Chief Technology Officer",
    bio: "Leads technology strategy across software, AI/ML, robotics, and autonomous systems engineering.",
  },
  {
    initials: "AM",
    name: "Arjun Muthuchetty",
    title: "Lead Drone Engineer",
    bio: "Leads mechanical design and drone engineering for MARDE Air.",
  },
  {
    initials: "SB",
    name: "Saathvika Beerelli",
    title: "Director of Community Outreach",
    bio: "Manages MARDE's public community presence (@marde.inc).",
  },
] as const;

/** Values and definitions are sourced directly from the CARES 2024 Metrics Summary (May 2025). */
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
      "of those arrests were unwitnessed by bystanders in 2024 CARES data; no one on scene to act before EMS arrives.",
    source: "CARES 2024 Metrics Summary",
    href: "https://mycares.net/sitepages/uploads/2025/CARES%2020250516%202024%20Metrics%20Summary.pdf",
  },
];

export const home = {
  hero: {
    eyebrow: "Integrated robotic emergency response · In development",
    headline: ["Response starts", "before", "arrival."],
    subhead:
      "MARDE is developing an integrated robotic emergency-response platform intended to begin physical intervention before EMS arrival.",
    primaryCta: "Support MARDE",
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
    title: ["One platform.", "A coordinated response."],
    air: {
      code: "01 / AIR",
      name: "MARDE Air",
      body: "A rapid aerial-transport concept designed to move response capability toward a scene.",
      link: "Explore MARDE Air",
    },
    ground: {
      code: "02 / GROUND",
      name: "MARDE Ground",
      body: "A ground-response concept designed for final approach, constrained access, and delivery of modular intervention capabilities.",
      link: "Explore MARDE Ground",
    },
    nexus: {
      code: "03 / MARDE NEXUS",
      name: "MARDE Nexus",
      title: ["Connect the response", "through one system."],
      body: "A proposed coordination platform connecting MARDE hardware with professional emergency-response workflows while keeping consequential medical decisions human-authorized.",
      link: "Explore MARDE Nexus",
    },
  },
  process: {
    eyebrow: "Conceptual response path",
    title: "Designed for the moments before help arrives.",
    body: "A proposed three-step model for how MARDE’s systems could support, not replace, professional emergency response.",
    steps: [
      {
        code: "01",
        label: "Detect",
        body: "Identify signals that may indicate an urgent event requiring response. Detection remains a proposed system capability, not a deployed service.",
      },
      {
        code: "02",
        label: "Route",
        body: "Route an aerial or ground concept toward the scene. Routing and coordination remain in development.",
      },
      {
        code: "03",
        label: "Deliver",
        body: "Bring useful capability closer during the gap before professional responders arrive. MARDE is intended to complement, not replace, EMS.",
      },
    ],
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
    body: "MARDE is developing an integrated platform spanning aerial transport, ground access, human-in-the-loop coordination, and modular intervention capabilities. These systems remain early-stage concepts, not deployed products.",
  },
  air: {
    eyebrow: "MARDE Air",
    title: "An aerial first-response concept.",
    body: "MARDE Air is a rapid aerial-transport concept being designed to move critical response capability toward an emergency scene. Its intended role is to complement, not replace, professional EMS response.",
    status: "In design",
    regulatory:
      "Because the planned Air V1 may exceed 55 pounds, MARDE has been evaluating an experimental airworthiness pathway for prototype R&D and controlled testing. Final FAA registration, certification, and operating requirements depend on the aircraft's final configuration and operation. This is a planned strategy, not approval for a deployed emergency service.",
  },
  ground: {
    eyebrow: "MARDE Ground",
    title: ["One chassis.", "Multiple possible roles."],
    body: "MARDE Ground is a modular ground-response concept in design for final approach and constrained access. A shared chassis could support swappable intervention modules, such as an AED, while allowing the underlying system to evolve deliberately.",
    status: "In design",
    detail:
      "The modular approach is intentionally described at a high level while MARDE continues its design and intellectual-property work.",
  },
  nexus: {
    eyebrow: "03 / MARDE NEXUS",
    title: ["Coordinate the response", "through one system."],
    intro: "MARDE Nexus is the proposed coordination platform connecting MARDE hardware with professional emergency-response workflows.",
    workflow: "It is being designed to support patient triage, scene and patient mapping, diagnostic confirmation workflows, supply coordination, and human authorization of actions performed by MARDE systems.",
    authority: "Consequential medical actions remain human-authorized. Future trained models may assist operators, but Nexus is being designed so qualified people retain final decision authority.",
    capabilities: [
      ["01", "COORDINATE", "Unify dispatch, system assets, and mission information in one planned workflow."],
      ["02", "MONITOR", "Provide operator visibility into Air, Ground, and payload status."],
      ["03", "AUTHORIZE", "Keep consequential actions within a qualified human authorization loop."],
      ["04", "HANDOFF", "Support transition to EMS for continued professional care."],
    ] as const,
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
    faa: "MARDE is evaluating an experimental airworthiness pathway for prototype R&D and controlled testing of the planned Air V1. Final requirements depend on the aircraft's configuration and operation; MARDE has not received FAA approval for a deployed emergency service.",
    fda: "Existing cleared or approved devices may be integrated where appropriate. Any additional pathway for a MARDE intervention module would depend on the module and its intended use; MARDE has not received FDA clearance or approval for a MARDE-developed module.",
  },
};

export const mission = {
  hero: {
    eyebrow: "Why MARDE",
    title: ["The moment before", "help arrives."],
    body: "We believe emergency response can begin earlier without losing sight of the people and systems already doing the work.",
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
    body: "Find MARDE updates, development work, and the people behind it on Instagram and TikTok.",
  },
  newsletter: {
    eyebrow: "Follow our progress",
    title: "Stay close to the work.",
    body: "Leave your email for occasional updates, or follow MARDE on Instagram and TikTok.",
  },
};

export const teamPage = {
  hero: {
    eyebrow: "The team",
    title: ["Small team.", "Serious intent."],
    body: "MARDE is being shaped by people working across strategy, medical guidance, engineering, and community.",
  },
};
