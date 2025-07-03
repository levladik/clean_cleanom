'use client'
/**
 * Hero Section
 * 
 * The hero section with calculator for the cleaning service landing page
 */

import React, { useEffect, useState } from 'react'

type Post = {
  id: number
  title: {
    rendered: string
  }
}

export default function Hero() {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/wp/v2/posts`)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching posts:', err)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unexpected error occurred')
        }
      }
    }

     fetchPosts()
  }, [])

  return (
    <section id="hero">
      <div>
      {error && <p>Error: {error}</p>}
      {posts.map(post => (
        <div key={post.id}>{post.title.rendered}</div>
      ))}
    </div>
    </section>
  )
}
