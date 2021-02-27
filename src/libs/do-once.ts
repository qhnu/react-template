import {
  downloadFontByBin,
  downloadFontByStylesheet,
} from '@qhnu/libs/src/fonts'

export type FontFamily = ''

export const doOnce = (): void => {
  downloadFontByStylesheet([]).then
  downloadFontByBin<FontFamily>([]).then
}
