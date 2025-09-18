import { notFound } from "next/navigation";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";
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
      <main className="pt-11.5">
        <div className="xl:mx-auto xl:max-w-[1152px] 2xl:mx-96">
          <div className="flex flex-col lg:flex-row h-[calc(100vh-46px)]">
            <div className="flex-1 w-full lg:max-w-[calc(100%-340px)]">
              <div className="p-6 lg:pl-14 h-full flex items-center justify-center">
                <ProjectDetailImage
                  src={project.image}
                  alt={`${project.title} detail image`}
                  title={project.title}
                />
              </div>
            </div>

            <aside className="w-full lg:max-w-[340px] border-t lg:border-t-0 lg:border-l border-neutral-800 lg:overflow-y-auto lg:h-full">
              <div className="p-6 lg:pr-14 space-y-6">
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
                    <p>{project.description}</p>

                    <p>
                      This project showcases modern design principles combined
                      with cutting-edge technology to deliver an exceptional
                      user experience. The implementation focuses on
                      performance, accessibility, and scalability.
                    </p>

                    <p>
                      Key features include responsive design, optimized
                      performance, and seamless integration with modern
                      development workflows. The project demonstrates expertise
                      in both frontend and backend technologies.
                    </p>

                    <div className="pt-4">
                      <h3
                        className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}
                      >
                        TECH STACK
                      </h3>
                      <ul className={`space-y-1 ${TYPOGRAPHY.monoSmall}`}>
                        <li>• React/Next.js</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Node.js</li>
                        <li>• Modern deployment workflows</li>
                      </ul>
                    </div>

                    <div className="pt-4 pb-20">
                      <h3
                        className={`${TYPOGRAPHY.smallHeading} text-white mb-2`}
                      >
                        GOALS
                      </h3>
                      <p>
                        The primary objective was to create a solution that not
                        only meets current requirements but also anticipates
                        future needs. This involved careful planning, iterative
                        development, and continuous testing to ensure optimal
                        results.
                      </p>
                    </div>
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
