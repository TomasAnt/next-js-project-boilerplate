import { DefaultTheme } from "styled-components"

import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  responsiveBreakPoints,
} from "./designVariables"

export const appTheme: DefaultTheme = {
  theme: "appTheme",
  colors: colors,
  media: responsiveBreakPoints,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
}
