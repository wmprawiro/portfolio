import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Figma } from "lucide-react";
import { TYPOGRAPHY, TRANSITIONS } from "@/lib/design-system";

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
