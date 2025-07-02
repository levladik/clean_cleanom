'use client'
/**
 * Hero Section
 * 
 * The hero section with calculator for the cleaning service landing page
 */

import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
};

export default function Hero() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_WP_API}/wp/v2/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <section id="hero">
      <h1>Посты из WordPress</h1>
      {posts.length === 0 ? (
        <p>Постов пока нет</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
