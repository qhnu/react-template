declare namespace Union {
  /** @see https://en.wikipedia.org/wiki/Date_format_by_country */
  type DateFormat = 'DMY' | 'MDY' | 'YMD'

  type Country = 'jp' | 'us'

  type Language = 'ja' | 'en'

  type Theme = 'light' | 'dark'

  type FontFamily = 'default'

  type Typical = 'always' | 'none' | 'on' | 'off' | 'never' | 'onHover'
}
