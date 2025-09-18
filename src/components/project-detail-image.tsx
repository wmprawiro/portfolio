"use client";

import Image from "next/image";
import {
  handleImageError,
  projectImageFallbackClasses,
} from "@/lib/image-utils";
import { TYPOGRAPHY } from "@/lib/design-system";

interface ProjectDetailImageProps {
  src: string;
  alt: string;
  title: string;
}

export function ProjectDetailImage({
  src,
  alt,
  title,
}: ProjectDetailImageProps) {
  return (
    <div className="relative w-full h-[356px] lg:h-[712px] bg-black overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={handleImageError}
      />
      <div className={projectImageFallbackClasses}>
        <span
          className={`${TYPOGRAPHY.monoSmall} text-neutral-600 uppercase tracking-wider`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
