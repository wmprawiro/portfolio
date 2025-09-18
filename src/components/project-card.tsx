"use client";

import Link from "next/link";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectTags } from "@/components/project-tags";
import { Project } from "@/lib/projects";
import {
  handleImageError,
  projectImageFallbackClasses,
} from "@/lib/image-utils";
import { IMAGE_HEIGHTS, TYPOGRAPHY, TRANSITIONS } from "@/lib/design-system";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`bg-black border-neutral-800 hover:border-neutral-700 ${TRANSITIONS.colorsGroup} rounded-none`}
    >
      <CardContent className="p-0">
        <div className="pb-4">
          <h3
            className={`${TYPOGRAPHY.monoSmall} uppercase tracking-wider text-neutral-500`}
          >
            {project.title}
          </h3>
        </div>

        <div
          className={`relative ${IMAGE_HEIGHTS.card} bg-black overflow-hidden rounded-none`}
        >
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className={`object-cover group-hover:scale-105 ${TRANSITIONS.transform}`}
            onError={handleImageError}
          />
          <div className={projectImageFallbackClasses}>
            <span
              className={`${TYPOGRAPHY.monoSmall} text-neutral-600 uppercase tracking-wider`}
            >
              {project.title}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <ProjectTags tags={project.tags} />
          <Link
            href={project.link}
            title={`View ${project.title} details`}
            className={`flex items-center gap-2 ${TYPOGRAPHY.monoSmallMuted}`}
          >
            READ MORE
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
