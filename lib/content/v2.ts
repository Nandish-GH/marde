export const cares = {
  response: "https://beta.mycares.net/sitepages/uploads/2025/2024_flipbook/inc/html/37.html",
  summary: "https://mycares.net/sitepages/uploads/2025/CARES%2020250516%202024%20Metrics%20Summary.pdf",
};

export const responseStats = [
  { value: "6.4", unit: "min", label: "Median first-responder response", source: "CARES 2024 · Annual Report, p. 37", href: cares.response },
  { value: "7.6", unit: "min", label: "Median EMS response", source: "CARES 2024 · Annual Report, p. 37", href: cares.response },
  { value: "50.2", unit: "%", label: "Arrests that were unwitnessed", source: "CARES 2024 · Metrics Summary", href: cares.summary },
] as const;

export const systems = [
  { id: "air", number: "01", name: "Air", verb: "Close the distance.", label: "Aerial transport", text: "A proposed aircraft to carry Ground, lower it from hover and provide aerial scene views. Aircraft configuration remains under evaluation." },
  { id: "ground", number: "02", name: "Ground", verb: "Reach the final meters.", label: "Outdoor access", text: "An outdoor teleoperated platform for AED and tourniquet delivery, ground-level video and two-way communication. Initial tests will use training equipment." },
  { id: "nexus", number: "03", name: "Nexus", verb: "Coordinate the response.", label: "Human control", text: "The proposed command layer for aerial and ground feeds, supply status, communication and human authorization of deployment, dispensing and retreat." },
  { id: "modules", number: "04", name: "Modules", verb: "Extend capability.", label: "Response supplies", text: "V1 planning centers on a dedicated AED bay and a reloadable tourniquet dispenser. Direct robotic treatment remains future research." },
] as const;

export const workflow = [
  { name: "Simulated dispatch", action: "Initiate", text: "An authorized operator starts a controlled demonstration. No live 911 integration is claimed." },
  { name: "MARDE Nexus", action: "Coordinate", text: "A trained operator reviews the mission and authorizes system actions." },
  { name: "MARDE Air", action: "Reach", text: "The proposed aircraft transports Ground and lowers it from hover into a cleared outdoor area." },
  { name: "MARDE Ground", action: "Access", text: "An operator directs outdoor movement, scene video and two-way communication." },
  { name: "Response supplies", action: "Deliver", text: "Human-authorized dispensing places training AED and tourniquet equipment beside Ground during initial tests." },
  { name: "Handoff and recovery", action: "Return", text: "After a simulated EMS handoff and authorized retreat, Air would land at an open rendezvous for Ground pickup." },
] as const;

export { agentFaqs as faqs } from "./agent-faqs";

export const people = [
  { name: "Nandish Panchal", initials: "NP", role: "Founder & CEO", contribution: "Product direction, software architecture, and system integration.", credential: "AHA BLS certified · Hospital volunteer", portrait: "/team/nandish-panchal.webp" },
  { name: "Snehi Patel", initials: "SP", role: "Chief Technology Officer", contribution: "Technical strategy, research, and engineering coordination.", credential: "AI/ML research · Rutgers MedTech wins", portrait: "" },
  { name: "Aanya Shah", initials: "AS", role: "Chief Medical Officer", contribution: "Clinical workflow research and healthcare relationships.", credential: "RWJUH volunteer · Red Cross CPR/AED", portrait: "" },
  { name: "Arjun Muthuchetty", initials: "AM", role: "Lead Drone Engineer", contribution: "Aerial platform engineering and flight-control development.", credential: "Drone building & piloting · TSA state placement", portrait: "" },
  { name: "Saathvika Beerelli", initials: "SB", role: "Director of Community Outreach", contribution: "Brand, community outreach, and public engagement.", credential: "FBLA national qualifier · Business certifications", portrait: "" },
] as const;
