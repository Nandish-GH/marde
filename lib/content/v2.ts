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
  { id: "air", number: "01", name: "Air", verb: "Close the distance.", label: "Aerial transport", text: "An aerial platform designed to carry Ground and its payload toward the scene. Current geometry is in engineering development." },
  { id: "ground", number: "02", name: "Ground", verb: "Reach the final meters.", label: "Final access", text: "A teleoperated ground platform intended to continue the approach where the aircraft cannot directly reach." },
  { id: "nexus", number: "03", name: "Nexus", verb: "Coordinate the response.", label: "Human control", text: "The command layer connecting operators, aircraft, ground systems, and response workflows under human oversight." },
  { id: "modules", number: "04", name: "Modules", verb: "Extend capability.", label: "Intervention modules", text: "An adaptable payload architecture, starting with delivery and secure-response capabilities. Advanced medical modules come later, after validation." },
] as const;

export const workflow = [
  { name: "911 / EMS dispatch", action: "Initiate", text: "An emergency response begins within the professional dispatch workflow." },
  { name: "MARDE Nexus", action: "Coordinate", text: "A trained operator reviews the mission and authorizes system actions." },
  { name: "MARDE Air", action: "Reach", text: "Air is designed to transport Ground and its payload toward the scene." },
  { name: "MARDE Ground", action: "Access", text: "An operator directs the final approach beyond the aircraft’s reach." },
  { name: "Intervention module", action: "Extend capability", text: "The payload supports the response. V1 focuses on delivery and secure-response functions." },
  { name: "EMS handoff", action: "Continue care", text: "Professional responders take over. MARDE is being designed to complement their work." },
] as const;

export { agentFaqs as faqs } from "./agent-faqs";

export const people = [
  { name: "Nandish Panchal", initials: "NP", role: "Founder & CEO", contribution: "Product direction, software architecture, and system integration.", credential: "AHA BLS certified · Hospital volunteer", portrait: "/team/nandish-panchal.webp" },
  { name: "Snehi Patel", initials: "SP", role: "Chief Technology Officer", contribution: "Technical strategy, research, and engineering coordination.", credential: "AI/ML research · Rutgers MedTech wins", portrait: "" },
  { name: "Aanya Shah", initials: "AS", role: "Chief Medical Officer", contribution: "Clinical workflow research and healthcare relationships.", credential: "RWJUH volunteer · Red Cross CPR/AED", portrait: "" },
  { name: "Arjun Muthuchetty", initials: "AM", role: "Lead Drone Engineer", contribution: "Aerial platform engineering and flight-control development.", credential: "Drone building & piloting · TSA state placement", portrait: "" },
  { name: "Saathvika Beerelli", initials: "SB", role: "Director of Community Outreach", contribution: "Brand, community outreach, and public engagement.", credential: "FBLA national qualifier · Business certifications", portrait: "" },
] as const;
