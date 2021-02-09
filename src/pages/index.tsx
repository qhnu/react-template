import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import { css } from 'styled-components'
import { SampleButtonRef } from '../components/button'

const Index: NextPage = () => {
  return (
    <>
      <NextSeo description="description" title="title" />
      <p
        className="margin-1rem"
        css={css`
          font-size: 2rem;
        `}
      >
        IndexPage
      </p>

      <Link href={'/posts'} passHref>
        <SampleButtonRef as="a" className="margin-1rem">
          /posts
        </SampleButtonRef>
      </Link>
    </>
  )
}

export default Index
