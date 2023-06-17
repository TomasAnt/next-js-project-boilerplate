import "@styles/globals.css"
import { appTheme } from "@styles/systemDesign"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
