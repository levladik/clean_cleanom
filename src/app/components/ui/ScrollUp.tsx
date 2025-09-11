'use client'

import { useState, useEffect } from 'react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', toggleVisible)
    toggleVisible() // Initial check

    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      aria-label="Scroll to top"
      className="fixed bottom-12 right-12 z-50 btn btn-circle btn-primary shadow-lg hover:btn-accent transition-all"
      onClick={scrollToTop}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10l7-7m0 0l7 7m-7-7v18"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </button>
  )
}
