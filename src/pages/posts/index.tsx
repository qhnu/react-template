import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { SampleButton } from '../../components/button'

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

      <Link href={`/`}>
        <SampleButton className="margin-1rem">back</SampleButton>
      </Link>

      <div>
        {posts.map((post, index) => (
          <Link href={`posts/${post.id}`} key={index}>
            <SampleButton className="margin-1rem">id: {post.id}</SampleButton>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Posts
