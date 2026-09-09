import { pageMetadata } from "../metadata";
import { Editorial, PageIntro } from "../../components/v2/editorial";
import { Questions } from "../../components/v2/interactions";
import { Action } from "../../components/v2/primitives";
import { faqs } from "../../lib/content/v2";
import s from "../../components/v2/editorial.module.css";
export const metadata=pageMetadata({title:"MARDE FAQ | Emergency Response Robotics",description:"Clear answers about MARDE’s platform, current stage, human oversight, EMS collaboration and ways to support development.",path:"/faq"});
export default function FaqPage(){return <Editorial><PageIntro eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>A developing system.<br/><span>A few clear answers.</span></>} text="What we’re building, where development stands and how to get involved."/><section className={`${s.section} ${s.faqLayout}`}><div className={s.faqAside}><h2>Keep the conversation going.</h2><p>Have a question about a workflow, a technical requirement or working with MARDE?</p><Action href="/contact/">Ask the team</Action></div><Questions items={faqs}/></section></Editorial>;}
