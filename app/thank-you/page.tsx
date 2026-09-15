import type { Metadata } from "next";
import { Editorial } from "../../components/v2/editorial";
import { Kicker, Action } from "../../components/v2/primitives";
import s from "../../components/v2/editorial.module.css";
export const metadata:Metadata={title:{absolute:"Thank You | MARDE"},description:"Thank you for connecting with MARDE. Find contact information and explore the developing response platform.",robots:{index:false,follow:false},openGraph:null,twitter:null,alternates:null};
export default function ThankYouPage(){return <Editorial><section className={s.utility}><Kicker>THANK YOU FOR REACHING OUT</Kicker><h1>The conversation<br/>starts here.</h1><p>If you just submitted a message, look for the confirmation from the form service. You can also reach our team directly at <a href="mailto:team@mardeinc.com">team@mardeinc.com</a>.</p><Action href="/technology/">Explore MARDE Technology</Action></section></Editorial>;}
