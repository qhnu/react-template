import { SampleButtonRef } from '@/components/button/SampleButton'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Schema.Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const posts: Schema.Post[] = await res.json()
      setPosts(posts)
    }
    fetchPosts().then
  }, [])

  return (
    <>
      <NextSeo title={'posts一覧'} />

      <Link href={`/`} passHref>
        <SampleButtonRef css="margin: 16px">back</SampleButtonRef>
      </Link>

      <div>
        {posts.map((post, index) => (
          <Link href={`posts/${post.id}`} key={index} passHref>
            <SampleButtonRef css="margin: 16px">id: {post.id}</SampleButtonRef>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Posts
