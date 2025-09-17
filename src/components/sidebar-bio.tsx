import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Figma } from "lucide-react";

const socialLinks = [
  {
    name: "TWITTER/X",
    href: "https://twitter.com/wmprawiro",
    icon: Twitter,
  },
  {
    name: "LINKEDIN",
    href: "https://linkedin.com/in/wmprawiro",
    icon: Linkedin,
  },
  {
    name: "GITHUB",
    href: "https://github.com/wmprawiro",
    icon: Github,
  },
  {
    name: "FIGMA",
    href: "https://figma.com/@wmprawiro",
    icon: Figma,
  },
];

export function SidebarBio() {
  return (
    <aside
      className="lg:sticky lg:top-0 lg:h-screen w-full lg:max-w-[340px] p-6 lg:pl-14 border-b lg:border-b-0 lg:border-r border-neutral-800"
      aria-label="About and social links"
    >
      <div className="space-y-6">
        {/* Profile Image and Name */}
        <div className="space-y-4">
          <div className="w-24 h-24 relative">
            <Image
              src="/default.jpg"
              alt="Wahyu Maulana Prawiro"
              fill
              className="object-cover object-top"
            />
          </div>
          <h1 className="font-helvetica text-3xl text-white">
            Wahyu Maulana Prawiro
          </h1>

          <p className="text-neutral-400 text-xs leading-relaxed font-noto-sans-mono">
            Web Designer & Developer with deep interest in fintech and web3
            technologies. I create digital experiences that bridge traditional
            design with emerging tech.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-noto-sans-mono text-neutral-500 hover:text-white transition-colors group"
                  title={`Visit my ${link.name} profile`}
                  style={{ fontSize: "12px" }}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
