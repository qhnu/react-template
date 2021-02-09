import 'styled-components'
import { defaultTheme } from '../components/head/GlobalStyle/theme'

declare type Theme = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
