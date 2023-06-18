import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "@styles/globalStyles"
import { appTheme } from "@styles/systemDesign"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
