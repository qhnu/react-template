import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/head'
import { defaultTheme } from '../components/head/GlobalStyle/theme'

import '@qhnu/config/css/reset.css'
import '../components/head/GlobalStyle/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', navigator.language)
  }, [])
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
