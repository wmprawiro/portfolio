export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  target.style.display = "none";
};

export const projectImageFallbackClasses =
  "absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center";

export const projectImageClasses = "object-cover";
