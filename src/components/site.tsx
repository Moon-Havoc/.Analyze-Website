"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, ShieldCheck, Search, FileText, Users, Fingerprint, Network, Eye, Compass, LockKeyhole, ChevronRight } from "lucide-react";

export const nav = [
  ["About", "/about"], ["Services", "/services"], ["Methodology", "/methodology"],
  ["Leadership", "/team"], ["Partnerships", "/partnerships"], ["Contact", "/contact"],
] as const;

export const discordInviteUrl = "https://discord.gg/m6sxqVbUPG";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!cursor) return;
    const updatePreference = () => document.documentElement.classList.toggle("cursor-enabled", finePointer.matches);
    updatePreference();

    const move = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse") return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.dataset.visible = "true";
      cursor.dataset.hover = String(Boolean((event.target as Element | null)?.closest("a, button, [role='button']")));
      cursor.dataset.editable = String(Boolean((event.target as Element | null)?.closest("input, textarea, select, [contenteditable='true']")));
    };
    const hide = () => { cursor.dataset.visible = "false"; };
    const press = () => { cursor.dataset.pressed = "true"; };
    const release = () => { cursor.dataset.pressed = "false"; };
    const visibility = () => { if (document.hidden) hide(); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", visibility);
    finePointer.addEventListener("change", updatePreference);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", visibility);
      finePointer.removeEventListener("change", updatePreference);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span className="cursor-ring"/><span className="cursor-core"/></div>;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" aria-label=".Analyze home" className="brand">
    <Image src="/images/analyze-logo.png" width={44} height={44} alt=".Analyze mark" className="brand-mark" priority />
    {!compact && <span className="brand-word"><strong>.Analyze</strong><small>ER:LC INVESTIGATIONS</small></span>}
  </Link>;
}

export function Header() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Logo />
    <motion.button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} whileTap={reduced ? undefined : { scale: 0.92 }} transition={{ duration: reduced ? 0 : 0.16 }}>{open ? <X /> : <Menu />}</motion.button>
    <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
      {nav.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "nav-link active" : "nav-link"} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}><span>{label}</span>{pathname === href && <motion.span className="nav-indicator" aria-hidden="true" layoutId="nav-indicator" transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}/>}</Link>)}
      <a href={discordInviteUrl} className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Start an inquiry <ArrowUpRight size={15} /></a>
    </nav>
  </div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-brand"><Logo /><p>Investigative support for the Emergency Response: Liberty County (ER:LC) community.</p></div>
    <div><span className="footer-label">Explore</span><div className="footer-links">{nav.slice(0, 4).map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div></div>
    <div><span className="footer-label">Connect</span><div className="footer-links"><Link href="/partnerships">Partnerships</Link><Link href="/contact">Contact the team <ArrowUpRight size={13} /></Link><a href={discordInviteUrl} target="_blank" rel="noopener noreferrer">Join our Discord <ArrowUpRight size={13} /></a></div></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} .Analyze. All rights reserved.</span><span>Independent community organization. Not affiliated with Roblox or any government agency.</span><Link href="/contact">Get in touch <ArrowRight size={13}/></Link></div></footer>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : .54, delay: reduced ? 0 : delay, ease: [0.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Eyebrow({ children, index }: { children: React.ReactNode; index?: string }) { return <div className="eyebrow"><span className="eyebrow-line" />{index && <span className="eyebrow-index">{index}</span>}<span>{children}</span></div>; }

export function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: React.ReactNode; text?: string; centered?: boolean }) {
  return <Reveal className={centered ? "section-heading centered" : "section-heading"}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
}

export function ButtonLink({ href, children, secondary = false, external = false }: { href: string; children: React.ReactNode; secondary?: boolean; external?: boolean }) { const reduced = useReducedMotion(); const className = secondary ? "button button-outline" : "button"; const content = <>{children}<ArrowRight size={16}/></>; return <motion.div className="button-motion" whileHover={reduced ? undefined : { y: -2 }} whileTap={reduced ? undefined : { scale: 0.98 }} transition={{ duration: reduced ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}>{external ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a> : <Link href={href} className={className}>{content}</Link>}</motion.div>; }

export function ServiceCards() {
  const cards = [
    { n: "01", icon: <Fingerprint/>, title: "Player investigations", body: "Review reported player conduct against relevant community rules and the available context." },
    { n: "02", icon: <Users/>, title: "Department investigations", body: "Examine reported department conduct, decisions, or practices within an ER:LC community." },
    { n: "03", icon: <Eye/>, title: "Suspicious activity", body: "Assess unusual activity or patterns, including reasonable explanations and evidence gaps." },
    { n: "04", icon: <FileText/>, title: "Evidence & case records", body: "Organize relevant material and prepare case documentation that records scope and findings." },
    { n: "05", icon: <Network/>, title: "Community intelligence", body: "Gather relevant public information to clarify the community context of an inquiry." },
    { n: "06", icon: <ShieldCheck/>, title: "Community rule concerns", body: "Compare reported conduct with the standards that apply in the relevant ER:LC community." },
  ];
  return <div className="service-grid">{cards.map((c, i) => <Reveal key={c.n} delay={i * .05}><article className="service-card"><div className="card-top"><span className="service-icon">{c.icon}</span><span className="card-index">{c.n}</span></div><h3>{c.title}</h3><p>{c.body}</p><span className="card-corner"><ArrowUpRight size={15}/></span></article></Reveal>)}</div>;
}

export function CTA({ title = "Discuss an inquiry with .Analyze", text = "Share the general concern and community context. We can explain whether the request fits our scope and what information may be relevant.", button = "Contact .Analyze", href = "/contact" }: { title?: string; text?: string; button?: string; href?: string }) {
  return <section className="cta-band"><div className="cta-glow"/><Reveal className="cta-content"><Eyebrow>Begin a conversation</Eyebrow><h2>{title}</h2><p>{text}</p><ButtonLink href={href}>{button}</ButtonLink></Reveal></section>;
}

export function PageHero({ eyebrow, title, text, number }: { eyebrow: string; title: React.ReactNode; text: string; number: string }) {
  return <section className="page-hero"><div className="page-hero-grid" aria-hidden="true"/><div className="page-hero-inner"><Eyebrow index={number}>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div><span className="page-watermark" aria-hidden="true">.A</span></section>;
}

export const principleIcons = { Search, Compass, LockKeyhole, ShieldCheck, FileText, Users, ChevronRight, ArrowDown };
