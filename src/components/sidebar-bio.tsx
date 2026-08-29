"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Figma,
  Copy,
  CopyCheck,
} from "lucide-react";
import { TYPOGRAPHY, TRANSITIONS } from "@/lib/design-system";
import { ScrambleText } from "@/components/ui/scramble-text";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center">
      <span
        className={`${TYPOGRAPHY.monoSmall} text-neutral-500 leading-relaxed pr-2`}
      >
        <ScrambleText text="HI@WMPRAWIRO.DEV" />
      </span>
      <button
        type="button"
        className="bg-transparent border-none p-0 cursor-pointer text-neutral-500 hover:text-white transition-colors"
        onClick={() => {
          navigator.clipboard.writeText("hi@wmprawiro.dev");
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        aria-label="Copy email address to clipboard"
      >
        {copied ? (
          <CopyCheck className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Copy className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

const socialLinks = [
  { name: "TWITTER/X", href: "https://twitter.com/wmprawiro", icon: Twitter, label: "Visit my Twitter/X profile" },
  {
    name: "LINKEDIN",
    href: "https://linkedin.com/in/wmprawiro",
    icon: Linkedin,
    label: "Visit my LinkedIn profile",
  },
  { name: "GITHUB", href: "https://github.com/wmprawiro", icon: Github, label: "Visit my GitHub profile" },
  { name: "FIGMA", href: "https://figma.com/@wmprawiro", icon: Figma, label: "Visit my Figma profile" },
];

export function SidebarBio() {
  return (
    <aside
      className="lg:sticky lg:top-0 lg:h-full w-full lg:max-w-[340px] p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-neutral-800 lg:overflow-y-auto"
      aria-label="About and social links"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className={`${TYPOGRAPHY.heading} text-white`}>
            <ScrambleText text="Wahyu Maulana Prawiro" />
          </h1>
          <CopyEmail />
          <p className={`text-neutral-400 ${TYPOGRAPHY.body} leading-relaxed`}>
            Product Designer specializing in system analysis, end-to-end SDLC, and scalable architectures. I translate complex business needs into high-quality user experiences, with strong experience in the fintech sector.
          </p>
        </div>

        <div className="space-y-2">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${TYPOGRAPHY.monoSmall} text-neutral-500 hover:text-white ${TRANSITIONS.colors}`}
              aria-label={`${link.label} (opens in new tab)`}
            >
              <link.icon className="w-3 h-3" aria-hidden="true" />
              <span><ScrambleText text={link.name} /></span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
