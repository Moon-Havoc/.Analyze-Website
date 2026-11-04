import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Search, FileText } from "lucide-react";
import { CTA, Eyebrow, PageHero, Reveal } from "@/components/site";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the executive leadership of .Analyze and explore the organizational roles supporting its Emergency Response: Liberty County (ER:LC) community work.",
};

const executives = [
  {
    id: "01",
    name: "Dior",
    role: "Executive Board · Executive",
    description: "Executive leadership at .Analyze.",
    image: "/images/team/dior.webp",
  },
  {
    id: "02",
    name: "Nova",
    role: "Executive Board · Co-Executive",
    description: "Retired Emergency Response: Liberty County (ER:LC) Investigator Specialist.",
    image: "/images/team/nova.webp",
  },
];

const groups = [
  { icon: <ShieldCheck />, id: "03", name: "Management", role: "Coordination & operations", desc: "Coordinates inquiries, team communication, and the day-to-day administration of the organization." },
  { icon: <Search />, id: "04", name: "Investigators", role: "Review & analysis", desc: "Examines information relevant to ER:LC community inquiries and documents analysis, findings, and limitations." },
  { icon: <FileText />, id: "05", name: "Support personnel", role: "Community assistance", desc: "Supports inquiry communication, case records, and coordination with the communities we assist." },
];

export default function Team() {
  return <>
    <PageHero number="04" eyebrow="Leadership & team" title={<>Leadership in service.<br/><em>Shared standards.</em></>} text="Meet the executive leaders of .Analyze, an independent organization serving the Emergency Response: Liberty County (ER:LC) community." />
    <section className="team-intro section-pad">
      <div><Eyebrow>Organization structure</Eyebrow><h2>Roles and<br/><span>responsibilities.</span></h2></div>
      <p>Executive leadership guides the organization. Management, investigators, and support personnel contribute to its work through defined responsibilities and shared standards. Additional team profiles will be published when details are confirmed.</p>
    </section>
    <section className="team-executives section-pad">
      <div className="executive-heading"><Eyebrow>Executive board</Eyebrow><h2>Leadership team</h2></div>
      <div className="executive-grid">{executives.map((person, i) => <Reveal key={person.id} delay={i * .07}>
        <article className="team-card executive-card">
          <div className="team-card-top"><Image className="executive-avatar" src={person.image} alt={`${person.name}’s ER:LC community avatar`} width={54} height={54} /><span>EXECUTIVE / {person.id}</span></div>
          <div className="team-card-content"><span className="team-role">{person.role}</span><h2>{person.name}</h2><p>{person.description}</p></div>
        </article>
      </Reveal>)}</div>
    </section>
    <section className="team-groups section-pad">{groups.map((g, i) => <Reveal key={g.id} delay={i * .06}>
      <article className="team-card"><div className="team-card-top"><span className="team-symbol">{g.icon}</span><span>ROLE / {g.id}</span></div><div className="team-card-content"><span className="team-role">{g.role}</span><h2>{g.name}</h2><p>{g.desc}</p><div className="placeholder-profile"><span>Member details will be added when confirmed</span></div></div></article>
    </Reveal>)}</section>
    <div className="team-note"><span>01—05</span><p>Each role contributes to the organization’s work. All team members are expected to follow the same standards for fairness, accuracy, responsible handling, and professional communication.</p></div>
    <CTA title="Ask about the organization" text="Contact .Analyze with questions about its roles or investigative work." button="Contact the team" />
  </>;
}
