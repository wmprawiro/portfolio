"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Linkedin,
  Github,
  Figma,
  Copy,
  CopyCheck,
} from "lucide-react";
import { TYPOGRAPHY, TRANSITIONS } from "@/lib/design-system";
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center">
      <span
        className={`${TYPOGRAPHY.monoSmall} text-neutral-500 leading-relaxed pr-2`}
      >
        HELLO@WMPRAWIRO.DEV
      </span>
      <button
        type="button"
        className="text-neutral-500 hover:text-white transition-colors"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        onClick={() => {
          navigator.clipboard.writeText("hello@wmprawiro.dev");
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        aria-label="Copy email to clipboard"
      >
        {copied ? (
          <CopyCheck className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

const socialLinks = [
  { name: "TWITTER/X", href: "https://twitter.com/wmprawiro", icon: Twitter },
  {
    name: "LINKEDIN",
    href: "https://linkedin.com/in/wmprawiro",
    icon: Linkedin,
  },
  { name: "GITHUB", href: "https://github.com/wmprawiro", icon: Github },
  { name: "FIGMA", href: "https://figma.com/@wmprawiro", icon: Figma },
];

export function SidebarBio() {
  return (
    <aside
      className="lg:sticky lg:top-0 lg:h-full w-full lg:max-w-[340px] p-6 lg:pl-14 border-b lg:border-b-0 lg:border-r border-neutral-800 lg:overflow-hidden"
      aria-label="About and social links"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="w-24 h-24 relative">
            <Image
              src="/default.jpg"
              alt="Wahyu Maulana Prawiro"
              fill
              className="object-cover object-top"
            />
          </div>
          <h1 className={`${TYPOGRAPHY.heading} text-white`}>
            Wahyu Maulana Prawiro
          </h1>
          <CopyEmail />
          <p className={`text-neutral-400 ${TYPOGRAPHY.body} leading-relaxed`}>
            Web Designer & Developer with deep interest in fintech and web3
            technologies. I create digital experiences that bridge traditional
            design with emerging tech.
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
              title={`Visit my ${link.name} profile`}
            >
              <link.icon className="w-3 h-3" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
