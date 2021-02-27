import { GlobalStyle } from '@/components/head/GlobalStyle'
import { defaultTheme } from '@/components/head/GlobalStyle/theme'
import { doOnce } from '@/libs/do-once'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import React from 'react'
import { useEffectOnce } from 'react-use'
import { ThemeProvider } from 'styled-components'

import '@qhnu/libs/src/css/reset.css'

const RecoilRoot = dynamic(
  async () => {
    const modules = await import('recoil')
    return modules.RecoilRoot
  },
  { ssr: false }
)

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
