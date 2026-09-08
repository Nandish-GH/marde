"use client";
import { useState } from "react";
import { Accordion } from "radix-ui";
import { workflow } from "../../lib/content/v2";
import { Arrow } from "./primitives";
import s from "./interactions.module.css";

export function ResponseSequence() {
  const [active, setActive] = useState(0);
  return <div className={s.sequence}>
    <ol className={s.sequenceSteps} aria-label="Conceptual response sequence">{workflow.map((step,i)=><li key={step.name} data-active={active===i}><button type="button" onClick={()=>setActive(i)} aria-pressed={active===i} aria-controls="response-detail"><span className={s.stepIndex}>0{i+1}</span><span className={s.stepName}>{step.name}</span><span className={s.stepAction}>{step.action}</span></button></li>)}</ol>
    <div id="response-detail" className={s.sequenceDetail} aria-live="polite" aria-atomic="true"><span className={s.detailNumber}>0{active+1}</span><div><span className={s.conceptLabel}>CONCEPTUAL WORKFLOW / {workflow[active].action.toUpperCase()}</span><h3>{workflow[active].name}</h3><p>{workflow[active].text}</p></div><button onClick={()=>setActive((active+1)%workflow.length)} type="button" className={s.next} aria-label="Next response step"><Arrow /></button></div>
    <p className={s.sequenceNote}>Select a step to explore. This is the intended V1 workflow, not a live mission.</p>
  </div>;
}

const views = [
  { label:"Mission review", heading:"A shared operational picture.", text:"Review the intended route and system readiness before authorizing a mission.", status:"Operator review required", items:["Mission context", "Air / Ground readiness", "Planned handoff"] },
  { label:"Human authorization", heading:"Consequential actions stay human.", text:"A trained operator reviews context and authorizes each consequential transition.", status:"Human authorization required", items:["Operator decision", "System constraints", "Authorization record"] },
  { label:"Air–Ground handoff", heading:"Coordinate the transition.", text:"Keep the aerial approach, ground access, and operator control connected through a single workflow.", status:"Operator-directed handoff", items:["Air arrival context", "Ground control", "EMS coordination"] },
] as const;

export function NexusConcept() {
  const [active,setActive]=useState(0);
  return <div className={s.nexusPanel}>
    <div className={s.nexusBar}><strong><i aria-hidden="true">+</i> NEXUS</strong><span>V1 CONCEPT INTERFACE</span><span className={s.notLive}>NOT LIVE</span></div>
    <div className={s.nexusModes} role="group" aria-label="Explore Nexus concepts">{views.map((view,i)=><button key={view.label} type="button" aria-pressed={active===i} onClick={()=>setActive(i)}>{view.label}<span>0{i+1}</span></button>)}</div>
    <div className={s.nexusBody}>
      <div className={s.map} aria-label="Illustrative route connecting Air staging, Ground access, and the EMS handoff"><span className={s.mapLabel}>ILLUSTRATIVE SITE CONTEXT</span><svg viewBox="0 0 620 330" aria-hidden="true"><defs><pattern id="nexus-grid-v2" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0v36" fill="none" stroke="#8197ad" strokeOpacity=".12" /></pattern></defs><rect width="620" height="330" fill="url(#nexus-grid-v2)" /><g fill="#243346" stroke="#3a4a5c" strokeWidth="1"><path d="M50 60h100v54H50zM185 20h75v110h-75zM360 30h75v73h-75zM475 38h112v76H475zM45 224h90v68H45zM176 237h115v65H176zM343 228h67v65h-67zM470 218h105v87H470z" /></g><path d="M0 177H620M314 0v330" stroke="#34445a" strokeWidth="26" /><path d="M83 166H313Q326 166 326 151V139q0-14 18-14h159" fill="none" stroke="#78afff" strokeWidth="2.5" strokeDasharray={active===0?"6 5":undefined} /><path d="M503 125v53h-93" fill="none" stroke="#c4d5e8" strokeWidth="2" strokeDasharray="3 4" /><circle cx="83" cy="166" r="7" fill="#78afff" /><circle cx="503" cy="125" r="7" fill="#78afff" /><circle cx="410" cy="178" r="7" fill="#e0e9f5" /><circle cx={active===2?410:active===1?503:83} cy={active===2?178:active===1?125:166} r="20" fill="none" stroke="#9bbfff" strokeOpacity=".5" /></svg><div className={s.mapLegend}><span><i />Air staging</span><span><i />Ground access</span><span><i />EMS handoff</span></div></div>
      <div className={s.operator} aria-live="polite" aria-atomic="true"><span className={s.conceptLabel}>OPERATOR WORKSPACE</span><h3>{views[active].heading}</h3><p>{views[active].text}</p><ul>{views[active].items.map(item=><li key={item}><span>+</span>{item}</li>)}</ul><div className={s.authorization}><span aria-hidden="true">◇</span>{views[active].status}</div></div>
    </div><div className={s.nexusFoot}><span>HUMAN-IN-THE-LOOP BY DESIGN</span><span>Concept only · No patient or mission data</span></div>
  </div>;
}

export function Questions({items}:{items:readonly {question:string;answer:string}[]}) {
  return <Accordion.Root className={s.questions} type="single" collapsible>{items.map((item,i)=><Accordion.Item className={s.question} key={item.question} value={String(i)}><Accordion.Header><Accordion.Trigger><span>{item.question}</span><i aria-hidden="true">+</i></Accordion.Trigger></Accordion.Header><Accordion.Content className={s.answer}><div>{item.answer}</div></Accordion.Content></Accordion.Item>)}</Accordion.Root>;
}
