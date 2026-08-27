import { notFound } from "next/navigation";
import Link from "next/link";
import { CircleChevronLeft, SquareArrowOutUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { ProjectDetailImage } from "@/components/project-detail-image";
import { ProjectTags } from "@/components/project-tags";
import { projects } from "@/lib/projects";
import { TYPOGRAPHY } from "@/lib/design-system";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNavbar />
      <main className="pt-[53px]">
        <div className="max-w-[1152px] mx-auto">
          <div className="flex flex-col lg:flex-row h-[calc(100vh-53px)]">
            <div className="flex-1 w-full lg:max-w-[calc(100%-340px)]">
              <div className="p-6 lg:p-10 h-full flex items-center justify-center">
                <ProjectDetailImage
                  src={project.image}
                  alt={`${project.title} detail image`}
                  title={project.title}
                />
              </div>
            </div>

            <aside className="w-full lg:max-w-[340px] border-t lg:border-t-0 lg:border-l border-neutral-800 lg:overflow-y-auto lg:h-full">
              <div className="p-6 lg:p-10 space-y-6">
                <Link
                  href="/"
                  className={`flex items-center gap-3 ${TYPOGRAPHY.monoSmall} text-neutral-500 hover:text-white transition-colors`}
                  title="Go back to homepage"
                >
                  <CircleChevronLeft className="w-3 h-3" />
                  <span>BACK</span>
                </Link>

                <div className="space-y-4">
                  <h1 className={`${TYPOGRAPHY.heading} text-white`}>
                    {project.title}
                  </h1>

                  <ProjectTags tags={project.tags} />
                </div>

                <div className="space-y-4">
                  <h2
                    className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white`}
                  >
                    Description
                  </h2>
                  <div
                    className={`space-y-4 text-neutral-400 ${TYPOGRAPHY.monoSmall} leading-relaxed`}
                  >
                    {project.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {project.problem && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          THE PROBLEM
                        </h3>
                        <p>{project.problem}</p>
                      </div>
                    )}

                    {project.goals && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          THE SOLUTION / GOALS
                        </h3>
                        <p>{project.goals}</p>
                      </div>
                    )}

                    {project.impact && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          THE IMPACT
                        </h3>
                        <p>{project.impact}</p>
                      </div>
                    )}

                    {project.techStack && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          TECH STACK
                        </h3>
                        <ul className={`space-y-1 ${TYPOGRAPHY.monoSmall}`}>
                          {project.techStack.map((tech, index) => (
                            <li key={index}>• {tech}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.infrastructure && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          INFRASTRUCTURE & DEVOPS
                        </h3>
                        <ul className={`space-y-1 ${TYPOGRAPHY.monoSmall}`}>
                          {project.infrastructure.map((infra, index) => (
                            <li key={index}>• {infra}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.integrations && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          THIRD-PARTY INTEGRATIONS
                        </h3>
                        <ul className={`space-y-1 ${TYPOGRAPHY.monoSmall}`}>
                          {project.integrations.map((integration, index) => (
                            <li key={index}>• {integration}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.liveUrl && (
                      <div className="pt-4 pb-20">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          VISIT PROJECT
                        </h3>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
                        >
                          {project.liveUrl}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
