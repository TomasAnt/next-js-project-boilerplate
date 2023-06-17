/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unused-modules */
import "styled-components"
import {
  AppColorsType,
  AppBreakpointsType,
  AppFontWeightType,
  AppLineHeightsType,
  AppFSType,
} from "./designVariables"

declare module "styled-components" {
  export interface DefaultTheme {
    theme: "appTheme"
    colors: AppColorsType
    media: AppBreakpointsType
    fontWeights: AppFontWeightType
    fontSizes: AppFSType
    lineHeights: AppLineHeightsType
  }
}
