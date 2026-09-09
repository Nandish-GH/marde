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

export const faqs = [
  { question: "What is MARDE building?", answer: "MARDE is developing an integrated emergency-response robotics platform. Air handles distance, Ground addresses final access, Nexus coordinates human operators and systems, and Intervention Modules extend response capability." },
  { question: "Is MARDE autonomous?", answer: "V1 is human-in-the-loop and teleoperated first. Trained operators authorize consequential actions. Higher autonomy is a future goal that depends on engineering, operational, clinical, and regulatory validation." },
  { question: "Is the system deployed today?", answer: "No. MARDE is pre-seed, pre-prototype, and pre-revenue. Air V1, Ground V1, and Nexus V1 are in development. The next milestone is an integrated human-in-the-loop demonstration, followed by measured testing." },
  { question: "How can EMS and public-safety teams get involved?", answer: "We are speaking with EMS agencies, fire departments, medical directors, and public-safety leaders to understand real workflows and requirements. Contact MARDE to discuss discovery, technical feedback, or future evaluation opportunities." },
  { question: "What are Intervention Modules?", answer: "Modules are the platform’s adaptable response payloads. Near-term work focuses on delivery and secure-response capabilities. Advanced medical capabilities would require further engineering, clinical, operational, and regulatory validation." },
  { question: "Does MARDE replace EMS?", answer: "No. MARDE is intended to extend useful response capability into the minutes before professional responders arrive and support a clear handoff to EMS." },
  { question: "How can I support development?", answer: "The Support page provides a Stripe link to support MARDE R&D. Support is not an equity investment or a tax-deductible charitable donation. Investment and advising inquiries should go through Contact MARDE." },
  { question: "How do Air, Ground, Nexus and Modules work together?", answer: "In the intended workflow, professional dispatch initiates the response, Nexus coordinates operator review, Air transports the integrated system, Ground continues the final approach, and a response payload extends useful capability before the handoff to EMS." },
  { question: "What is current capability, and what comes later?", answer: "The system is in development. The immediate goal is an integrated, operator-directed V1 demonstration. Terrain access, reliability and performance still need validation. Assisted operation, higher autonomy and advanced medical modules are later directions, subject to evidence and appropriate requirements." },
  { question: "Who is MARDE being designed for?", answer: "MARDE is focused on institutional emergency response: EMS agencies, fire departments, municipalities and public-safety organizations, initially in New Jersey and the Northeast U.S. It is not a consumer product." },
] as const;

export const people = [
  { name: "Nandish Panchal", initials: "NP", role: "Founder & CEO", contribution: "Product direction, software architecture, and system integration.", credential: "AHA BLS certified · Hospital volunteer", portrait: "/team/nandish-panchal.webp" },
  { name: "Snehi Patel", initials: "SP", role: "Chief Technology Officer", contribution: "Technical strategy, research, and engineering coordination.", credential: "AI/ML research · Rutgers MedTech wins", portrait: "" },
  { name: "Aanya Shah", initials: "AS", role: "Chief Medical Officer", contribution: "Clinical workflow research and healthcare relationships.", credential: "RWJUH volunteer · Red Cross CPR/AED", portrait: "" },
  { name: "Arjun Muthuchetty", initials: "AM", role: "Lead Drone Engineer", contribution: "Aerial platform engineering and flight-control development.", credential: "Drone building & piloting · TSA state placement", portrait: "" },
  { name: "Saathvika Beerelli", initials: "SB", role: "Director of Community Outreach", contribution: "Brand, community outreach, and public engagement.", credential: "FBLA national qualifier · Business certifications", portrait: "" },
] as const;
