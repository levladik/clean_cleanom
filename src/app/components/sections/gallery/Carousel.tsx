'use client'
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', watchDrag: false })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

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
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="relative overflow-hidden w-4/5 mx-auto rounded-xl"
      >
        <div className="flex ">
          {testimonials.map((user, idx) => (
            <div
              key={idx}
              className="flex-none px-3 min-w-full"
            >
              <TestimonialSlider user={user} />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === selectedIndex ? 'bg-primary w-6' : 'bg-gray-400/50 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          className="btn btn-primary rounded-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button
          className="btn btn-primary rounded-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>
    </div>
  )
}
export default Carousel
