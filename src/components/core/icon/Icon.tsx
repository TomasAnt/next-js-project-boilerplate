import React, { forwardRef } from "react"

import { StyledIcon } from "./icon.styled"

const icons = {
  // Add your icons here
  // iconName: IconComponent
}

export type IconName = keyof typeof icons

interface IconProps extends React.ComponentProps<typeof StyledIcon> {
  iconName: IconName
}

export const Icon = forwardRef(({ iconName, ...props }: IconProps, ref) => (
  <StyledIcon ref={ref} {...props}>
    {React.createElement(icons[iconName])}
  </StyledIcon>
))

Icon.displayName = "Icon"
