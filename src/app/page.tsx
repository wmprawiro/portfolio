import { SidebarBio } from "@/components/sidebar-bio";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex items-center justify-between xl:mx-auto xl:max-w-[1152px] 2xl:mx-96">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Sidebar Bio - Sticky on desktop, stacked on mobile */}
        <SidebarBio />

        {/* Main Content Area */}
        <div className="flex-1 p-6 lg:p-8 lg:overflow-y-auto max-w-[812px]">
          <section aria-labelledby="recent-works-heading">
            {/* Section Header */}
            <div className="mb-8">
              <h2
                id="recent-works-heading"
                className="font-noto-sans-mono text-xs uppercase tracking-wider text-neutral-500 mb-2"
              >
                Recent Works
              </h2>
              <div className="w-12 h-px bg-neutral-800"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Load More Indicator (Optional) */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <p className="font-noto-sans-mono text-xs text-neutral-600 text-center">
                More projects coming soon...
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
