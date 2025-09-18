interface ProjectTagProps {
  tag: "coding" | "design";
}

export function ProjectTag({ tag }: ProjectTagProps) {
  return (
    <div className="flex items-center gap-1 font-noto-sans-mono text-xs text-white px-2 py-1">
      <div
        className={`w-3 h-3 ${
          tag === "coding" ? "bg-red-500" : "bg-violet-500"
        }`}
      />
      <span>{tag.toUpperCase()}</span>
    </div>
  );
}

interface ProjectTagsProps {
  tags: ("coding" | "design")[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <ProjectTag key={tag} tag={tag} />
      ))}
    </div>
  );
}
