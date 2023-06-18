import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
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
`
