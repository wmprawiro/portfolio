"use client";

import Link from "next/link";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-black border-neutral-800 hover:border-neutral-700 transition-colors group rounded-none">
      <CardContent className="p-0">
        {/* Project Title at Top */}
        <div className="pb-4">
          <h3 className="font-noto-sans-mono text-xs uppercase tracking-wider text-neutral-500">
            {project.title}
          </h3>
        </div>

        {/* Project Thumbnail */}
        <div className="relative h-[356px] bg-black overflow-hidden rounded-none">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          {/* Fallback gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, #262626 0%, #171717 100%)`,
            }}
          >
            <span className="font-noto-sans-mono text-xs text-neutral-600 uppercase tracking-wider">
              {project.title}
            </span>
          </div>
        </div>

        {/* Badges left, Read More right */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 font-noto-sans-mono text-xs text-white px-2 py-1"
              >
                <div
                  className={`w-3 h-3 ${
                    tag === "coding" ? "bg-red-500" : "bg-violet-500"
                  }`}
                />
                <span>{tag.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <Link
            href={project.link}
            title={`View ${project.title} details`}
            className="flex items-center gap-2 font-noto-sans-mono text-neutral-500 hover:text-white transition-colors text-xs"
          >
            READ MORE
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
