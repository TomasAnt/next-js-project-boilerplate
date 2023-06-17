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
  xs: "12px",
  sm: "14px",
  default: "16px",
  lg: "18px",
  bg: "20px",
  h1: "32px",
  h2: "24px",
  h3: "20px",
  h4: "18px",
}

export type AppFSType = typeof fontSizes

export const lineHeights = {
  xs: "12px",
  sm: "16px",
  default: "20px",
  lg: "24px",
  bg: "28px",
  h1: "40px",
  h2: "32px",
  h3: "28px",
  h4: "24px",
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
