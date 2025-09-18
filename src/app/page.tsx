import { SidebarBio } from "@/components/sidebar-bio";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="xl:mx-auto xl:max-w-[1152px] 2xl:mx-96 pt-11.5">
      <div className="flex flex-col lg:flex-row h-screen lg:h-screen">
        <SidebarBio />
        <div className="flex-1 w-full lg:overflow-y-auto">
          <section className="p-6 lg:p-8" aria-labelledby="recent-heading">
            <h2
              id="recent-heading"
              className="font-helvetica text-xl uppercase tracking-wider text-white mb-6"
            >
              Recent
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <div className="p-6 lg:p-8">
            <p className="font-noto-sans-mono text-xs text-neutral-600 text-center">
              More projects coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
