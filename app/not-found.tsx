import type { Metadata } from "next";
import { Editorial } from "../components/v2/editorial";
import { Kicker, Action } from "../components/v2/primitives";
import s from "../components/v2/editorial.module.css";
export const metadata:Metadata={title:"Page Not Found | MARDE",openGraph:null,twitter:null,alternates:null};
export default function NotFound(){return <Editorial><section className={s.utility}><Kicker>404 / ROUTE NOT FOUND</Kicker><h1>This page isn&apos;t here.</h1><p>The link may have moved. Head back to MARDE or contact our team if you need help finding something.</p><Action href="/">Back to MARDE</Action></section></Editorial>;}
