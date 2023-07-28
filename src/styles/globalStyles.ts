import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

html {
  font-size: 100%; //1 rem = 16px
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.primary.background};
}

body,
input,
textarea,
button,
label {
  font-family: "Inter";
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
`
