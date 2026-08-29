import { SidebarBio } from "@/components/sidebar-bio";
import { ProjectCard } from "@/components/project-card";
import { SiteNavbar } from "@/components/site-navbar";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";
import { TYPOGRAPHY } from "@/lib/design-system";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { ScrambleText } from "@/components/ui/scramble-text";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <main id="main-content" className="max-w-[1152px] mx-auto pt-[53px]">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-53px)]">
          <SidebarBio />
          <div className="flex-1 w-full lg:overflow-y-auto lg:h-full">
            <section className="p-6 lg:p-10" aria-labelledby="recent-heading">
              <h2
                id="recent-heading"
                className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white mb-6`}
              >
                <ScrambleText text="Latest Project" />
              </h2>
              <div className="flex flex-col gap-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section className="p-6 lg:p-10 border-t border-neutral-900" aria-labelledby="articles-heading">
              <h2
                id="articles-heading"
                className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white mb-6`}
              >
                <ScrambleText text="Articles" />
              </h2>
              <div className="flex flex-col gap-2">
                {articles.map((article) => (
                  <div key={article.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 pl-0 pr-0 group hover:bg-neutral-900/30 transition-colors">
                    <div className="flex flex-col gap-1">
                      <h3 className={`${TYPOGRAPHY.monoSmall} text-white uppercase tracking-wider group-hover:text-neutral-300 transition-colors`}>
                        <ScrambleText text={article.title} />
                      </h3>
                      <time
                        dateTime={article.isoDate}
                        className={`${TYPOGRAPHY.monoSmall} text-neutral-500`}
                      >
                        <ScrambleText text={article.date} />
                      </time>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 mt-2 sm:mt-0">
                      <Link
                        href={`/article/${article.slug}`}
                        aria-label={`Read article: ${article.title}`}
                        className={`flex items-center gap-2 ${TYPOGRAPHY.monoSmallMuted} hover:text-white transition-colors`}
                      >
                        <ScrambleText text="READ MORE" />
                        <SquareArrowOutUpRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 lg:p-10 border-t border-neutral-900" aria-labelledby="experience-heading">
              <h2
                id="experience-heading"
                className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white mb-6`}
              >
                <ScrambleText text="Experience" />
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div>
                    <h3 className={`${TYPOGRAPHY.monoSmall} text-white uppercase tracking-wider`}>
                      <ScrambleText text="Engineer On-Site" />
                    </h3>
                    <p className={`text-neutral-400 ${TYPOGRAPHY.monoSmallMuted} mt-1`}>
                      PT Finnet Indonesia (Telkom Group)
                    </p>
                  </div>
                  <time
                    dateTime="2025-11"
                    className={`${TYPOGRAPHY.monoSmall} text-neutral-500 uppercase tracking-wider shrink-0`}
                  >
                    Nov 2025 — Present
                  </time>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div>
                    <h3 className={`${TYPOGRAPHY.monoSmall} text-white uppercase tracking-wider`}>
                      <ScrambleText text="Freelance Product Specialist" />
                    </h3>
                    <p className={`text-neutral-400 ${TYPOGRAPHY.monoSmallMuted} mt-1`}>
                      PT Finnet Indonesia (Telkom Group)
                    </p>
                  </div>
                  <time
                    dateTime="2024-01/2025-11"
                    className={`${TYPOGRAPHY.monoSmall} text-neutral-500 uppercase tracking-wider shrink-0`}
                  >
                    Jan 2024 — Nov 2025
                  </time>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
