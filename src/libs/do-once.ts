import { downloadFontByBin, downloadFontByStylesheet } from '@qhnu/libs'

export const doOnce = (): void => {
  downloadFontByStylesheet([]).then
  downloadFontByBin([]).then
}
