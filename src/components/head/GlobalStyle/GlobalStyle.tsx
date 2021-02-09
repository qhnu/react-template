import { createGlobalStyle } from 'styled-components'

/**
 * @see
 * https://autoprefixer.github.io/
 * https://stylis.js.org/
 */

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
    height: 100%;
    overflow: hidden;
    touch-action: manipulation;
    -ms-touch-action: manipulation;
    user-select: ${enable.selectText ? 'auto' : 'none'};
    scroll-behavior: smooth;
    -ms-scroll-chaining: none;
    overscroll-behavior: none;
    -webkit-touch-callout: ${enable.longTapCallout ? 'default' : 'none'};
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: hsla(0,0%,100%,0);
    -webkit-font-smoothing: subpixel-antialiased;
  }
  body {
    height: 100%;
  }
  #__next {
    height: 100%;
  }
`
