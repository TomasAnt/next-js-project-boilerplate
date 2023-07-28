export const colors = {
  primary: {
    background: "#fff",
    text: "#000",
    border: "#000",
  },
}

export type AppColorsType = typeof colors

export const responsiveBreakPoints = {
  maxSmallPhone: "(max-width: 360px)",
  maxPhone: "(max-width: 480px)",
  maxTablet: "(max-width: 770px)",
  maxSmallDesktop: "(max-width: 1020px)",
  maxMediumDesktop: "(max-width: 1200px)",
  maxLargeDesktop: "(max-width: 1360px)",
}

export type AppBreakpointsType = typeof responsiveBreakPoints

export const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  default: "1rem", // 16px
  lg: "1.125rem", // 18px
  bg: "1.25rem", // 20px
  h1: "2rem", // 32px
  h2: "1.5rem", // 24px
  h3: "1.25rem", // 20px
  h4: "1.125rem", // 18px
}

export type AppFSType = typeof fontSizes

export const lineHeights = {
  xs: "0.75rem", // 12px
  sm: "1rem", // 16px
  default: "1.25rem", // 20px
  lg: "1.5rem", // 24px
  bg: "1.75rem", // 28px
  xl: "2.85rem", // 45.6px
  h1: "2.5rem", // 40px
  h2: "2rem", // 32px
  h3: "1.75rem", // 28px
  h4: "1.5rem", // 24px
}

export type AppLineHeightsType = typeof lineHeights

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}

export type AppFontWeightType = typeof fontWeights
