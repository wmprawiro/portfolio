"use client";

import Link from "next/link";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-neutral-950 border-neutral-800 hover:border-neutral-700 transition-colors group">
      <CardContent className="p-0">
        {/* Project Thumbnail */}
        <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
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

        <div className="p-4 space-y-3">
          {/* Project Title */}
          <h3 className="font-noto-sans-mono text-xs uppercase tracking-wider text-neutral-500">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`
                  font-noto-sans-mono text-xs border-0 px-2 py-1
                  ${
                    tag === "coding"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-blue-500/10 text-blue-400"
                  }
                `}
              >
                {tag.toUpperCase()}
              </Badge>
            ))}
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-neutral-400 text-xs leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Read More Link */}
          <Link
            href={project.link}
            title={`View ${project.title} details`}
            className="flex items-center gap-2 font-noto-sans-mono text-neutral-500 hover:text-white transition-colors"
            style={{ fontSize: "12px" }}
          >
            READ MORE
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
