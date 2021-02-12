import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { SampleButtonRef } from '../../components/button'

const Post: React.FC = () => {
  const router = useRouter()
  const postId = router.query.id
  const [post, setPost] = useState<Schema.Post>()

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      )
      const post: Schema.Post = await res.json()
      setPost(post)
    }
    fetchPost().then
  }, [postId])

  return (
    <>
      <NextSeo title={post?.title} />

      <Link href={`/posts`} passHref>
        <SampleButtonRef className="margin-1rem">back</SampleButtonRef>
      </Link>

      {post && (
        <div className="padding-1rem">
          <p css="font-size: 2rem;">id: {post.id}</p>
          <p css="font-size: 2rem;">title: {post.title}</p>
          <p>body: {post.body}</p>
        </div>
      )}
    </>
  )
}

export default Post
