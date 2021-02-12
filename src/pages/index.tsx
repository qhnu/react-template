import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React, { useState, useCallback } from 'react'
import { css } from 'styled-components'
import { SampleButton, SampleButtonRef } from '../components/button'

const Index: NextPage = () => {
  const [data, setData] = useState('null')
  const onClick = useCallback(async () => {
    const res = await fetch('/api/user/test')
    const text = await res.text()
    setData(text)
  }, [])
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
          move /posts
        </SampleButtonRef>
      </Link>

      <div className="margin-1rem">
        <SampleButton onClick={onClick}>fetch /api/user/test</SampleButton>
        {data && <p className="margin-1rem">{data}</p>}
      </div>
    </>
  )
}

export default Index
