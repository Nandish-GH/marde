import { teamProfiles } from "../../lib/content/profiles";
import { Profile, profileMetadata } from "../../components/v2/profile";
const person = teamProfiles.find(person=>person.slug==="arjun")!;
export const metadata=profileMetadata(person);
export default function ContactCard(){return <Profile person={person}/>;}
