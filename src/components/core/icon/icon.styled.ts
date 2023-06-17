import styled from "styled-components"

type IconSizes = "small" | "medium" | "large"

interface StyledIconProps {
  size?: IconSizes
}

export const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  align-items: center;
  & > svg {
  }
`
