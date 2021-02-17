import { GlobalStyle } from '@/components/head/GlobalStyle'
import { defaultTheme } from '@/components/head/GlobalStyle/theme'
import { doOnce } from '@/libs/do-once'
import type { AppProps } from 'next/app'
import React from 'react'
import { useEffectOnce } from 'react-use'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import '@qhnu/libs/src/css/reset.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffectOnce(() => {
    document.documentElement.setAttribute('lang', navigator.language)
    doOnce()
  })
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
