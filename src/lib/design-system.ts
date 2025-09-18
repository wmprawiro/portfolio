// Common Layout Constants
export const LAYOUT_CONSTRAINTS = {
  maxWidth: "xl:mx-auto xl:max-w-[1152px] 2xl:mx-96",
  sidebarWidth: "lg:max-w-[340px]",
  mainContentWidth: "lg:max-w-[calc(100%-340px)]",
} as const;

// Common Spacing
export const SPACING = {
  containerPadding: "p-6 lg:p-8",
  sidebarPadding: "p-6 lg:pl-14",
  sidebarPaddingRight: "p-6 lg:pr-14",
} as const;

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

// Image Heights
export const IMAGE_HEIGHTS = {
  card: "h-[356px]",
  cardDesktop: "lg:h-[356px]",
  detailMobile: "h-[356px]",
  detailDesktop: "lg:h-[712px]",
} as const;
