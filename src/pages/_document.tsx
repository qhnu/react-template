/* eslint-disable react/jsx-sort-props */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const isDev = process.env.NODE_ENV === 'development'
const isDevOrStg = isDev || process.env.NEXT_PUBLIC_STAGING

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {isDevOrStg && <meta name="robots" content="noindex,nofollow" />}
          <meta
            name="format-detection"
            content="telephone=no,email=no,address=no"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
