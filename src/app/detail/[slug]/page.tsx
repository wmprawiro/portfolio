import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CircleChevronLeft, SquareArrowOutUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { ProjectDetailImage } from "@/components/project-detail-image";
import { ProjectTags } from "@/components/project-tags";
import { projects } from "@/lib/projects";
import { TYPOGRAPHY } from "@/lib/design-system";
import { ScrambleText } from "@/components/ui/scramble-text";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const description = project.description.split("\n\n")[0];
  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
    },
  };
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
      <main id="main-content" className="pt-[53px]">
        <div className="max-w-[1152px] mx-auto">
          <div className="flex flex-col lg:flex-row h-[calc(100vh-53px)]">
            <div className="flex-1 w-full lg:max-w-[calc(100%-340px)] lg:border-l border-neutral-800">
              <div className="p-6 lg:p-10 h-full flex items-center justify-center">
                <ProjectDetailImage
                  src={project.image}
                  alt={`${project.title} preview`}
                  title={project.title}
                />
              </div>
            </div>

            <aside className="w-full lg:max-w-[340px] border-t lg:border-t-0 lg:border-l lg:border-r border-neutral-800 lg:overflow-y-auto lg:h-full">
              <div className="p-6 lg:p-10 space-y-6">
                <Link
                  href="/"
                  className={`flex items-center gap-3 ${TYPOGRAPHY.monoSmall} text-neutral-500 hover:text-white transition-colors`}
                  aria-label="Go back to homepage"
                >
                  <CircleChevronLeft className="w-3 h-3" aria-hidden="true" />
                  <span><ScrambleText text="BACK" /></span>
                </Link>

                <div className="space-y-4">
                  <h1 className={`${TYPOGRAPHY.heading} text-white`}>
                    <ScrambleText text={project.title} />
                  </h1>

                  <ProjectTags tags={project.tags} />
                </div>

                <div className="space-y-4">
                  <h2
                    className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white`}
                  >
                    <ScrambleText text="DESCRIPTION" />
                  </h2>
                  <div
                    className={`space-y-4 text-neutral-400 ${TYPOGRAPHY.monoSmall} leading-relaxed`}
                  >
                    {project.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {project.problem && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="THE PROBLEM" />
                        </h3>
                        <p>{project.problem}</p>
                      </div>
                    )}

                    {project.images && project.images.length > 0 && (
                      <div className="mb-12">
                        <h3 className={`${TYPOGRAPHY.monoSmall} text-neutral-500 uppercase tracking-wider mb-4`}>
                          <ScrambleText text="VISUALS & INTERFACE" />
                        </h3>
                        <div className="flex flex-col gap-6">
                          {project.images.map((img) => (
                            <div key={img} className="w-full bg-neutral-900/50 border border-neutral-800 aspect-video flex items-center justify-center p-8 text-center">
                              <span className="text-neutral-500 font-mono text-sm uppercase tracking-wider">
                                [ Image Placeholder: {img} ]<br />
                                <span className="text-neutral-600 text-xs mt-2 block">Replace with actual &lt;img&gt; later</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.goals && project.goals.length > 0 && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="GOALS" />
                        </h3>
                        <ul className={`list-disc pl-5 space-y-2 text-neutral-400 ${TYPOGRAPHY.monoSmall}`}>
                          {project.goals.map((goal) => (
                            <li key={goal.slice(0, 40)} className="leading-relaxed">{goal}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.impact && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="THE IMPACT" />
                        </h3>
                        <p>{project.impact}</p>
                      </div>
                    )}

                    {project.techStack && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="TECH STACK" />
                        </h3>
                        <ul className={`list-disc pl-5 space-y-1 text-neutral-400 ${TYPOGRAPHY.monoSmall}`}>
                          {project.techStack.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.integrations && (
                      <div className="pt-4">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="THIRD-PARTY INTEGRATIONS" />
                        </h3>
                        <ul className={`list-disc pl-5 space-y-1 text-neutral-400 ${TYPOGRAPHY.monoSmall}`}>
                          {project.integrations.map((integration) => (
                            <li key={integration}>{integration}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.liveUrl && (
                      <div className="pt-4 pb-20">
                        <h3 className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}>
                          <ScrambleText text="VISIT PROJECT" />
                        </h3>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} live project (opens in new tab)`}
                          className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
                        >
                          {project.liveUrl}
                          <SquareArrowOutUpRight className="inline-block ml-1 w-3 h-3" aria-hidden="true" />
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
