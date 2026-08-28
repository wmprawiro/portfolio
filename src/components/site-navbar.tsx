import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { TYPOGRAPHY } from "@/lib/design-system";

export function SiteNavbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between py-3 px-6 lg:px-10 max-w-[1152px] mx-auto w-full">
        <Link
          href="/"
          className="font-noto-sans-mono text-xl text-white hover:opacity-80 transition-opacity"
          aria-label="wmprawiro portfolio — home"
        >
          wmprawiro
        </Link>

        <ul className="flex items-center gap-3 list-none m-0 p-0">
          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=185o53S7EJhPnmel0CO8VhUd51ICvqAg-"
              aria-label="Download CV (PDF)"
              className={`flex items-center gap-2 ${TYPOGRAPHY.monoSmallMuted} hover:text-white transition-colors`}
            >
              DOWNLOAD CV
              <Download className="w-3 h-3" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="mailto:hi@wmprawiro.dev"
              aria-label="Send email to hi@wmprawiro.dev"
              className={`flex items-center gap-2 ${TYPOGRAPHY.monoSmallMuted} hover:text-white transition-colors`}
            >
              EMAIL
              <Mail className="w-3 h-3" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
