import { SampleButton, SampleButtonRef } from '@/components/button/SampleButton'
import Link from 'next/link'
import React, { useState, useCallback } from 'react'

export const AppLayout: React.FC = () => {
  const [data, setData] = useState('null')

  const onClick = useCallback(async () => {
    const res = await fetch('/api/user/test')
    const text = await res.text()
    setData(text)
  }, [])

  return (
    <>
      <p css="margin: 16px; font-size: 32px;">IndexPage</p>

      <Link href={'/posts'} passHref>
        <SampleButtonRef css="margin: 16px">move /posts</SampleButtonRef>
      </Link>

      <div>
        <SampleButton css="margin: 16px" onClick={onClick}>
          fetch /api/user/test
        </SampleButton>
        {data && <p css="margin: 16px">{data}</p>}
      </div>
    </>
  )
}
