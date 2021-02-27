import { downloadFontByBin, downloadFontByStylesheet } from '@qhnu/libs'

export type FontFamily = ''

export const doOnce = (): void => {
  downloadFontByStylesheet([]).then
  downloadFontByBin<FontFamily>([]).then
}
