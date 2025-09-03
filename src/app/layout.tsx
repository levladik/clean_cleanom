/**
 * Root Layout
 *
 * The root layout
 */

import React from 'react'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '',
  description: '',
  keywords: [''],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-theme="mytheme"
      lang="en"
    >
      <body className="min-h-screen flex flex-col bg-base-200">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
