import { AppLayout } from '@/components/layout/AppLayout'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

const Index: NextPage = () => {
  return (
    <>
      <NextSeo description="description" title="title" />

      <AppLayout />
    </>
  )
}

export default Index
