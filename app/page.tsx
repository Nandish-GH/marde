import { Home } from "../components/v2/home";
import { StructuredData } from "./structured-data";
import { pageMetadata } from "./metadata";
import { site } from "../lib/site-config";

export const metadata = pageMetadata({title:"MARDE | Emergency Response Robotics Before EMS Arrival",description:site.description});
export default function Page(){return <><StructuredData /><Home /></>;}
