import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, CustomCursor } from "@/components/site";

export const metadata: Metadata = {
  title: { default: ".Analyze — Clarity Through Investigation", template: "%s | .Analyze" },
  description: ".Analyze provides independent investigative support for the Emergency Response: Liberty County (ER:LC) community.",
  openGraph: { title: ".Analyze — Clarity Through Investigation", description: "Independent investigative support for the ER:LC community.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><CustomCursor/></body></html>;
}
