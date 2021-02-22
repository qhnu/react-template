import { createGlobalStyle } from 'styled-components'

const enable = {
  userSelect: true,
  touchCallout: true,
}

export const GlobalStyle = createGlobalStyle`
  html {
    ${(p) =>
      p.theme['html.background-color']
        ? `background-color: ${p.theme['html.background-color']};`
        : ''}
    user-select: ${enable.userSelect ? 'auto' : 'none'};
    -webkit-touch-callout: ${enable.touchCallout ? 'default' : 'none'};
  }
`
