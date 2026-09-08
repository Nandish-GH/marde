import { Home } from "../components/v2/home";
import { StructuredData } from "./structured-data";
import { pageMetadata } from "./metadata";

export const metadata = pageMetadata({title:"MARDE | Emergency Response Robotics Before EMS Arrival",description:"MARDE is developing Air, Ground, Nexus, and Intervention Modules: one human-in-the-loop emergency-response robotics platform. Response starts before arrival."});
export default function Page(){return <><StructuredData /><Home /></>;}
