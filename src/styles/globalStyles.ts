import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}
  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    -webkit-font-smoothing: antialiased;
  }
 
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
`
