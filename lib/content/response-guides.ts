import { sources, type DiscoveryPage } from "./discovery";

const stage = "MARDE Inc. is based in New Jersey, USA. It is pre-seed, pre-prototype and pre-revenue, with no deployed systems or announced commercial pilots. These pages describe development objectives and proposed evaluation questions, not equipment available for purchase or a live emergency-response service.";

export const responseGuides: DiscoveryPage[] = [
  {
    slug: "drone-aed-delivery-new-jersey",
    title: "Drone AED Delivery in New Jersey | MARDE",
    description: "MARDE's proposed drone and ground approach to AED delivery in New Jersey: outdoor access, human oversight and research. Pre-prototype; no deployments.",
    modified: "2026-10-23",
    sources: [sources.aed, sources.faa],
    sections: [
      { title: "Who is developing drone AED delivery in New Jersey?", paragraphs: [
        "MARDE Inc. is a New Jersey developer researching a combined aerial and ground approach to AED and tourniquet delivery before EMS arrival. MARDE Air would carry and lower a teleoperated MARDE Ground platform, with MARDE Nexus coordinating human authorization and scene information. The platform is pre-prototype; no deployed systems or commercial pilots are announced.",
        stage,
        "This page identifies MARDE's own development direction. It is not a directory of all New Jersey suppliers, a claim to lead the regional market or evidence that a municipality has selected the system. Someone seeking equipment for current operational use should ask any prospective supplier for independently assessable evidence of actual availability and relevant permissions.",
      ] },
      { title: "What would the Air–Ground delivery sequence involve?", paragraphs: [
        "The proposed V1 sequence begins with a controlled, simulated dispatch and an operator review in Nexus. Air would transport Ground and lower it from hover into a cleared outdoor area. After release, a human operator would direct Ground toward an agreed receiving location. Dispensing an AED or tourniquet package would require authorization rather than an independent medical decision by the robot.",
        "Ground planning includes ground-level video, a screen, speaker and microphone. These are intended to help an operator understand the approach and communicate with a receiving person. Initial exercises would use training equipment and simulated incidents. No live 911 connection, validated dispensing reliability, clinical treatment or achieved response-time advantage is claimed.",
      ] },
      { title: "Why investigate ground access after aerial arrival?", paragraphs: [
        "Reaching coordinates does not necessarily put equipment within reach of a person. A delivery location can be separated from the intended receiver by a fence, an unsuitable surface or an unclear approach. MARDE's combined architecture investigates whether an operator-directed outdoor ground stage could address defined access tasks and support a clearer equipment handoff.",
        "Adding Ground also introduces weight, deployment transitions, communications needs and recovery work. Those costs must be measured alongside any potential access value. A ground platform should not be assumed to solve every barrier. Indoor entry and stair climbing are deferred from V1, and the current concept establishes no measured terrain capability.",
      ] },
      { title: "What would a New Jersey agency need to establish first?", paragraphs: [
        "An agency discussion should start with a specific scenario: the outdoor receiving point, responsible staff, intended equipment and circumstances that exclude a mission. The group would need to distinguish aircraft arrival, Ground release, equipment receipt and professional handoff. A flight-time target alone does not describe that complete sequence.",
        "Operating permission is a separate question from technical feasibility. The FAA's advanced-operations resources provide context; they are not approval of MARDE. Any flight activity would need a defined aircraft and operation, appropriate review and applicable permissions. The team does not claim an approved operational pathway or a ready-to-deploy agency program.",
      ] },
      { title: "What evidence is available, and what is still missing?", paragraphs: [
        "MARDE's research library discusses external drone-AED studies, final access, human oversight and evaluation methods. External studies can help formulate questions about a proposed architecture. They do not establish MARDE performance, regional service coverage or patient outcomes. This company has not published validated full-system delivery results.",
        "Useful future evidence would identify the configuration, operator role, environment, aborted attempts and any assistance required. A controlled demonstration with training equipment could inform another engineering decision without supporting a clinical claim. Requirements conversations are welcome through Contact; participation does not enroll an agency in a pilot.",
      ] },
    ],
    related: [
      { title: "Drone-AED evidence and its limits", href: "/research/drone-aed-evidence/" },
      { title: "MARDE Air: proposed transport architecture", href: "/technology/air/" },
      { title: "Evaluation guide for EMS agencies", href: "/for-ems-agencies/" },
    ],
  },
  {
    slug: "teleoperated-ground-robot-emergency-response",
    title: "Teleoperated Ground Robots for EMS | MARDE",
    description: "MARDE Ground's proposed outdoor AED and tourniquet delivery, scene video and human control. Scope, access limits and evaluation questions.",
    modified: "2026-10-23",
    sources: [sources.nist, sources.radio],
    sections: [
      { title: "What is a teleoperated ground robot for emergency response?", paragraphs: [
        "A teleoperated ground robot is directed by a human operator rather than making independent response decisions. MARDE Inc., based in New Jersey, is developing a proposed outdoor Ground platform for AED and tourniquet delivery, ground-level video and two-way communication. MARDE is pre-prototype, with no deployed systems or announced commercial pilots.",
        stage,
      ] },
      { title: "What would MARDE Ground carry and communicate?", paragraphs: [
        "The V1 direction includes a dedicated AED bay and an opposite-side reloadable tourniquet magazine. Protected, low-height dispensing would occur after human authorization. Package dimensions, equipment selection, supply counts and the complete mass budget remain engineering questions. Initial bench and integration exercises would use training equipment rather than provide care at a real emergency scene.",
        "Ground-level video, a screen, speaker and microphone are proposed communication components. The intended use is to let an operator review the approach and exchange information with a receiving person. The concept does not establish reliable communication in every environment, automatic patient identification or a clinical interpretation of what a camera sees.",
      ] },
      { title: "Where does outdoor final access stop?", paragraphs: [
        "A useful task ends at a defined receiving point, not an abstract promise to reach a patient. Operators would need to understand route boundaries, surface conditions, bystanders and situations requiring retreat. A gate or fence can remain a blocking condition. Indoor entry, stair climbing and direct patient contact are deferred beyond V1.",
        "MARDE has not published achieved speed, slope handling, obstacle clearance or terrain capability. A drawing of a route does not demonstrate that the robot can traverse it. Requirements should name excluded situations and a practical recovery method, so the exercise does not quietly depend on a person carrying the robot past the difficult part.",
      ] },
      { title: "How would human control and supply release be evaluated?", paragraphs: [
        "Nexus is intended to provide the operator with scene feeds, supply status and explicit authorization steps. A test should ask whether the person can understand the current state before directing movement or dispensing. Ambiguous confirmation, delayed information and an incorrectly identified receiving point should be investigated as failure paths, not hidden behind a successful release animation.",
        "Communication interruption needs its own planned response. MARDE has not validated stopping, reconnection or recovery behavior. A proposed controlled exercise should specify stop conditions and record stale feeds, operator interventions, failed commands and time spent recovering. Those records matter even when no training payload is successfully delivered.",
      ] },
      { title: "What can response-robot test methods contribute?", paragraphs: [
        "NIST's ground-robot resources describe repeatable ways of assessing response-robot tasks. They provide a reference for choosing mobility, communication and operator-proficiency questions. Referencing those resources does not mean MARDE Ground has passed a test, meets an agency requirement or holds a NIST certification.",
        "An agency and development team can select a limited task, define the configuration and agree how attempts will be counted before starting. Repeat trials should include unsuccessful outcomes and any assistance. Results should stay attached to those conditions. Evidence of one outdoor task should not be extended into a claim of building entry or general emergency-scene readiness.",
      ] },
      { title: "How would Ground return after a demonstration?", paragraphs: [
        "Recovery is part of MARDE's proposed workflow. After a simulated EMS handoff and authorized retreat, Ground would move to an open rendezvous. Air would land there for pickup rather than perform an airborne recovery. Manually assisted docking is acceptable for initial demonstrations and would need to be disclosed in the exercise record.",
        "MARDE welcomes de-identified scenarios and technical critique from EMS and public-safety practitioners. The immediate purpose is requirements discovery and staged engineering work. No price, delivery date or operational pilot is offered. Contact can start a discussion about the specific outdoor task that would justify further investigation.",
      ] },
    ],
    related: [
      { title: "MARDE Ground: subsystem development", href: "/technology/ground/" },
      { title: "Research on final access", href: "/research/final-access/" },
      { title: "Research on human oversight", href: "/research/human-oversight/" },
    ],
  },
  {
    slug: "aed-delivery-before-ems-arrival",
    title: "AED Delivery Before EMS Arrival | MARDE",
    description: "How to assess pre-EMS AED delivery: arrival, retrieval, human oversight and handoff. MARDE's pre-prototype objectives are separate from external evidence.",
    modified: "2026-10-23",
    sources: [sources.aed, sources.cares],
    sections: [
      { title: "What does AED delivery before EMS arrival mean?", paragraphs: [
        "AED delivery before EMS arrival describes an equipment-access objective, not proof that an AED was used or that a patient benefited. MARDE Inc. in New Jersey is developing a proposed aerial-and-ground supply-delivery concept. It remains pre-prototype, with no deployed systems, announced commercial pilots or validated full-system performance results.",
        stage,
      ] },
      { title: "Which events should an evaluation distinguish?", paragraphs: [
        "A delivery evaluation should define its starting event and endpoint before collecting times. Aircraft arrival, payload placement, equipment retrieval and EMS handoff are distinct events. A package can reach the scene while remaining inaccessible to the intended receiver. Recording those events separately makes the actual limitation visible and helps prevent a transport result from becoming a broader claim.",
        "An agency should also ask which incidents were eligible, which missions could not start and which attempts were abandoned. A fast successful attempt gives an incomplete picture if availability, recovery and failures are omitted. Local comparison data must use compatible definitions rather than treating every published response-time number as interchangeable.",
      ] },
      { title: "What does external drone-AED research establish?", paragraphs: [
        "Published drone-AED literature includes observations from particular systems and settings. Reading it requires attention to the measured endpoint: transport, receipt, use and patient outcomes should not be collapsed together. MARDE's research article links primary literature and discusses how to keep each conclusion tied to the source that supports it.",
        "CARES registry findings help explain the broader response-gap discussion. They are not MARDE mission measurements. Subtracting a hypothetical robot travel time from an EMS registry median would not establish a patient benefit or a local operational advantage. MARDE has not performed the full-system or clinical evaluation needed to support such a claim.",
      ] },
      { title: "How would MARDE investigate delivery and final access?", paragraphs: [
        "Air would carry and lower Ground into a cleared outdoor area. A human would direct Ground movement and authorize dispensing, with Nexus coordinating status and scene information. Initial exercises would use a training AED and packaged training supplies. Robotic AED electrode placement, CPR and direct tourniquet application are outside V1.",
        "The combined approach adds a possible outdoor access stage after aircraft arrival, but also introduces extra mass, handoffs and communication dependencies. Those are tradeoffs to investigate. MARDE does not claim the architecture is faster than an aerial-only system or appropriate for every scene. Indoor access and stair climbing are deferred.",
      ] },
      { title: "What would a controlled receiving exercise measure?", paragraphs: [
        "A proposed training exercise could define a receiving area, a packaged training payload and a participant role. Observers would record whether the receiver understood the notification, located the equipment and received it without unplanned assistance. The exercise would need a recovery plan and explicit stop conditions. This describes a proposed evaluation, not a completed MARDE result.",
        "Changing the receiver's location, interrupting communication or making the receiving area unavailable can reveal assumptions hidden in an ideal demonstration. Any prompting or physical assistance should be recorded. A successful exercise under cleared, supervised conditions would support a narrowly stated engineering observation, not readiness for untrained bystanders at real emergencies.",
      ] },
      { title: "Who should be involved before operational evaluation?", paragraphs: [
        "The requirements discussion should include agency operational staff and appropriate clinical, aviation and information-governance expertise. They would need to define responsibility for the aircraft, the ground stage, equipment receipt and the professional handoff. Technical feasibility alone does not settle permissions, staffing, clinical use or liability.",
        "MARDE invites requirements conversations and research critique, with no expectation that an agency commit to equipment. Useful input includes de-identified access scenarios, receiving roles and evaluation constraints. The website is an information channel rather than a live dispatch or medical-assistance service. Contact does not enroll anyone in a clinical study or operational pilot.",
      ] },
    ],
    related: [
      { title: "Drone-AED evidence: primary sources and limits", href: "/research/drone-aed-evidence/" },
      { title: "EMS response-gap research", href: "/research/response-gap/" },
      { title: "Evaluation guide for EMS agencies", href: "/for-ems-agencies/" },
    ],
  },
  {
    slug: "for-ems-agencies",
    title: "Drone AED Evaluation Guide for EMS Agencies | MARDE",
    description: "A requirements guide for EMS and fire agencies assessing proposed drone AED delivery: evidence, access, staffing, permissions and controlled exercises.",
    modified: "2026-10-23",
    sources: [sources.nist, sources.faa, sources.delivery],
    sections: [
      { title: "How can an EMS agency evaluate a pre-prototype developer?", paragraphs: [
        "An EMS or fire agency can start with requirements discovery and a tabletop review before considering a controlled exercise. MARDE Inc. is a New Jersey, pre-prototype developer proposing outdoor AED and tourniquet delivery with human oversight. It has no deployed systems or announced commercial pilots; this guide does not offer equipment for operational use.",
        stage,
      ] },
      { title: "Define the scenario and the decision it should inform", paragraphs: [
        "Describe the outdoor receiving location, equipment, staffing and access barrier in a de-identified scenario. Identify the question an exercise should answer: for example, whether an operator understands a proposed receiving point or whether packaged training equipment can be retrieved under defined conditions. A useful next step should follow from the answer even if the result is unfavorable.",
        "Separate the requirements discussion from procurement and clinical evaluation. A concept-stage conversation does not establish readiness, funding, partnership or enrollment into a pilot. Agencies should ask a developer to state what exists, what remains a design objective and what evidence can actually be reviewed. A polished interface is not a substitute for a working subsystem.",
      ] },
      { title: "Request an evidence table with clear limits", paragraphs: [
        "For each proposed capability, ask for its status, supporting observation, configuration, conditions and unresolved limitation. Distinguish a drawing, a bench test, an integrated exercise and an operational result. Keep failed attempts, aborted missions and assisted recoveries in the record. A claim without a defined endpoint should remain an open question.",
        "Time comparisons should use compatible starting events and endpoints. Aircraft arrival is different from equipment receipt or clinical use. External studies inform the evaluation design but do not validate a new developer's system. MARDE has not published achieved range, payload capacity, control latency or full-system delivery reliability and should be evaluated accordingly.",
      ] },
      { title: "Assign operators, receiving roles and authority to stop", paragraphs: [
        "Map who controls the aircraft, directs Ground, authorizes dispensing and receives the payload. Determine who can stop an exercise and who confirms that the scene is suitable to continue. Define how responsibilities transfer at the EMS handoff. Training and workload must be considered even when the proposed software is described as human-in-the-loop.",
        "MARDE Nexus is intended to require authorization at consequential steps. Its website interface is illustrative and has no live mission connection. A controlled test would need to investigate whether information is understandable and current, how ambiguity is presented and whether the operator recognizes a reason to stop. No validated staffing or training program is offered.",
      ] },
      { title: "Review access, communication and recovery failures", paragraphs: [
        "List the scenes that should be excluded, including access routes that exceed the defined outdoor scope. Plan what happens when a receiver is unavailable, a route is blocked, a dispenser jams or communication is interrupted. A recovery plan should avoid transferring unplanned risk or workload to agency personnel. MARDE has not validated these failure responses.",
        "For the proposed MARDE sequence, Air would lower Ground from hover and later land at an open rendezvous for pickup. That makes deployment and recovery separate transitions to review. Indoor entry, stairs and robotic treatment are deferred. Initial exercises would use training equipment and simulated incidents rather than patients or live emergencies.",
      ] },
      { title: "Resolve permissions, privacy and accountability separately", paragraphs: [
        "Ask the responsible specialists to review the defined flight operation, site access, equipment handling, insurance and allocation of responsibility. An agency's interest does not grant aviation permission, and a website's research citations do not establish regulatory approval. The applicable route depends on the actual aircraft, mission and operator; MARDE does not claim an approved operational pathway.",
        "Any future scene-video or information integration needs explicit access, retention, security and governance requirements. Share de-identified scenarios during early discovery and avoid patient records or dispatch credentials. MARDE's website privacy policy covers the website, not an unbuilt operational platform. No production dispatch integration or clinical-data service is offered.",
      ] },
      { title: "Agree the exercise record and the next decision", paragraphs: [
        "Before any permitted controlled exercise, write down success criteria, stop conditions, trial counting and reporting responsibilities. Preserve configuration details and unsuccessful outcomes. The conclusion should state which question was answered and which remains open. An initial positive result should lead to a justified next test rather than an immediate deployment announcement.",
        "Contact MARDE with your role, organization and the operational question you want to explore. A requirements conversation can help identify whether further research is appropriate without implying a procurement commitment or formal partnership. This guide is a starting framework for discussion and should be adapted by the agency's own responsible personnel.",
      ] },
    ],
    related: [
      { title: "Research: evaluating early-stage partners", href: "/research/evaluating-early-stage-partners/" },
      { title: "EMS research conversations with MARDE", href: "/ems-partners/" },
      { title: "Research on human oversight", href: "/research/human-oversight/" },
    ],
  },
];
