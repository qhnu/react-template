import { createGlobalStyle } from 'styled-components'

const enable = {
  selectText: true,
  longTapCallout: true,
}

export const GlobalStyle = createGlobalStyle`
  /* stylelint-disable */
  html {
    ${(p) =>
      p.theme['html.background-color']
        ? `background-color: ${p.theme['html.background-color']};`
        : ''}
    user-select: ${enable.selectText ? 'auto' : 'none'};
    -webkit-touch-callout: ${enable.longTapCallout ? 'default' : 'none'};
  }
`
