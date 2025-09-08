'use client'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import TestimonialSlider from './TestimonialSlider'

export const testimonials = [
  {
    quote: 'This service saved me hours every week. Absolutely love the simplicity!',
    name: 'Sarah Johnson',
    picture: 'https://picsum.photos/id/1011/600/400',
  },
  {
    quote: 'The team was professional, efficient, and exceeded all my expectations.',
    name: 'Michael Lee',
    picture: 'https://picsum.photos/id/1005/600/400',
  },
  {
    quote: 'I finally found a solution that works flawlessly. Highly recommended!',
    name: 'Emma Brown',
    picture: 'https://picsum.photos/id/1012/600/400',
  },
  {
    quote: 'Great experience from start to finish. I’ll definitely use it again.',
    name: 'Daniel Garcia',
    picture: 'https://picsum.photos/id/1027/600/400',
  },
  {
    quote: 'Fast, reliable, and super easy to use. Couldn’t ask for more.',
    name: 'Olivia Wilson',
    picture: 'https://picsum.photos/id/1025/600/400',
  },
]

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 4000 })])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full disabled:opacity-30 cursor-pointer"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full disabled:opacity-30 cursor-pointer"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-4/5 mx-auto"
      >
        <div className="flex">
          {testimonials.map((user, idx) => (
            <div
              key={idx}
              className="flex-none px-3 min-w-full"
            >
              <TestimonialSlider user={user} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
              idx === selectedIndex ? 'bg-primary w-6' : 'bg-gray-400/50 hover:bg-gray-600'
            }`}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  )
}
export default Carousel
