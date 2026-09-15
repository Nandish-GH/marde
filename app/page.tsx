import { Home } from "../components/v2/home";
import { StructuredData } from "./structured-data";
import { pageMetadata } from "./metadata";

export const metadata = pageMetadata({title:"MARDE | Emergency Response Robotics Before EMS Arrival",description:"MARDE is developing an integrated emergency-response robotics platform designed to extend response capability into the critical minutes before EMS arrives."});
export default function Page(){return <><StructuredData /><Home /></>;}
