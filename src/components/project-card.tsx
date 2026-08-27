"use client";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectTags } from "@/components/project-tags";
import { Project } from "@/lib/projects";
import { TYPOGRAPHY, TRANSITIONS } from "@/lib/design-system";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`bg-black hover:bg-neutral-900/30 border-0 ${TRANSITIONS.colorsGroup} rounded-none`}
    >
      <CardContent className="p-4 pl-0 pr-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3
            className={`${TYPOGRAPHY.monoSmall} uppercase tracking-wider text-white group-hover:text-neutral-300 transition-colors`}
          >
            {project.title}
          </h3>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6">
          <ProjectTags tags={project.tags} />
          <Link
            href={project.link}
            title={`View ${project.title} details`}
            className={`flex items-center gap-2 ${TYPOGRAPHY.monoSmallMuted} hover:text-white transition-colors`}
          >
            READ MORE
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
