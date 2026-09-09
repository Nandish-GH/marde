import { teamProfiles } from "../../lib/content/profiles";
import { Profile, profileMetadata } from "../../components/v2/profile";
const person = teamProfiles[0];
export const metadata = profileMetadata(person);
export default function NandishPage(){return <Profile person={person}/>;}
