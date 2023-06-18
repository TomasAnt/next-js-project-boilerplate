import "@styles/globals.css"
import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { ThemeProvider } from "styled-components"

import { appTheme } from "@styles/systemDesign"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
