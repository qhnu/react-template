import { GlobalStyle } from '@/components/head/GlobalStyle'
import { defaultTheme } from '@/components/head/GlobalStyle/theme'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import '@qhnu/libs/css/reset.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', navigator.language)
  }, [])
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
