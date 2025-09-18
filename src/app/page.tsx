import { SidebarBio } from "@/components/sidebar-bio";
import { ProjectCard } from "@/components/project-card";
import { SiteNavbar } from "@/components/site-navbar";
import { projects } from "@/lib/projects";
import { TYPOGRAPHY } from "@/lib/design-system";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <main className="xl:mx-auto xl:max-w-[1152px] 2xl:mx-96 pt-11.5">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-46px)]">
          <SidebarBio />
          <div className="flex-1 w-full lg:overflow-y-auto lg:h-full">
            <section className="p-6 lg:p-8" aria-labelledby="recent-heading">
              <h2
                id="recent-heading"
                className={`${TYPOGRAPHY.subheading} uppercase tracking-wider text-white mb-6`}
              >
                Recent
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
            <div className="p-6 lg:p-8 pb-20">
              <p
                className={`${TYPOGRAPHY.monoSmall} text-neutral-600 text-center`}
              >
                More projects coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
