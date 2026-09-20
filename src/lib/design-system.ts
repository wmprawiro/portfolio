// Common Typography
export const TYPOGRAPHY = {
  heading: "font-helvetica text-3xl text-white",
  subheading: "font-helvetica text-xl uppercase tracking-wider text-white",
  smallHeading: "font-helvetica text-lg text-white",
  monoSmall: "font-noto-sans-mono text-xs",
  monoSmallMuted:
    "font-noto-sans-mono text-xs text-neutral-500 hover:text-white transition-colors",
  body: "text-neutral-400 text-sm leading-relaxed font-noto-sans-mono",
} as const;

// Common Transitions
export const TRANSITIONS = {
  colors: "transition-colors",
  colorsGroup: "transition-colors group",
  transform: "transition-transform duration-300",
} as const;
