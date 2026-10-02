import { pageMetadata } from "../metadata";
import { Editorial, PageIntro } from "../../components/v2/editorial";
import { Action } from "../../components/v2/primitives";
import { agentFaqs as faqs } from "../../lib/content/agent-faqs";
import { JsonLd } from "../structured-data";
import s from "../../components/v2/editorial.module.css";
export const metadata=pageMetadata({title:"MARDE FAQ | Emergency Response Robotics",description:"Clear answers about MARDE’s platform, current stage, human oversight, EMS collaboration and ways to support development.",path:"/faq"});
export default function FaqPage(){return <Editorial><JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","@id":"https://mardeinc.com/faq/#faq",mainEntity:faqs.map(item=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))}}/><PageIntro eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>A developing system.<br/><span>A few clear answers.</span></>} text="What we’re building, where development stands and how to get involved."/><section className={`${s.section} ${s.faqLayout}`}><div className={s.faqAside}><h2>Keep the conversation going.</h2><p>Have a question about a workflow, a technical requirement or working with MARDE?</p><Action href="/contact/">Ask the team</Action></div><div>{faqs.map(item=><section key={item.question}><h2>{item.question}</h2><p>{item.answer}</p></section>)}</div></section></Editorial>;}
