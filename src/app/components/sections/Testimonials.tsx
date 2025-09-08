'use client'

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Anna Milošević',
    location: 'Belgrade, New Belgrade',
    rating: 5,
    text: 'Ordered cleaning after a party - the apartment was sparkling! Staff is careful, prices are adequate. Now only Clean Belgrade!',
    service: 'General Cleaning',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Stefan Jovanović',
    location: 'Belgrade, Vračar',
    rating: 5,
    text: 'Professional post-renovation cleaning. They removed all construction dust and the apartment looked brand new. Highly recommend!',
    service: 'Post-Renovation',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Milica Popović',
    location: 'Belgrade, Zemun',
    rating: 5,
    text: 'Regular weekly cleaning service has been a game-changer for our family. Reliable, thorough, and always on time.',
    service: 'Regular Cleaning',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Office Manager, Tech Solutions',
    location: 'Belgrade, Novi Beograd',
    rating: 5,
    text: 'Excellent office cleaning service. Professional team, flexible schedule, and invoice payment option makes it perfect for our business.',
    service: 'Office Cleaning',
    date: '1 week ago',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Customer
            <span className="text-emerald"> Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </div>

        {/* Featured Review Slider */}
        <div className="max-w-5xl mx-auto mb-16 bg-primary text-primary-content rounded-xl">
          <div className="bg-gradient-subtle border-sage/30 shadow-large">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 fill-primary text-base-content flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-base-content"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">"{currentReview.text}"</blockquote>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                        {currentReview.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{currentReview.name}</div>
                        <div className="text-sm text-muted-foreground">{currentReview.location}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-medium text-emerald">{currentReview.service}</div>
                      <div className="text-sm text-muted-foreground">{currentReview.date}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-smooth ${index === currentIndex ? 'bg-accent' : 'bg-base-100'}`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    className="btn w-12 h-12 rounded-xl cursor-pointer"
                    onClick={prevReview}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    className="btn w-12 h-12 rounded-xl cursor-pointer"
                    onClick={nextReview}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
