'use client'

import { Leaf } from 'lucide-react'

import Carousel from './Carousel'

const Gallery = () => {
  return (
    <section
      className="pt-20 w-full"
      id="gallery"
    >
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Customer
            <span className="text-primary"> Reviews</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
        </p>
      </div>
      <Carousel />
    </section>
  )
}
export default Gallery
