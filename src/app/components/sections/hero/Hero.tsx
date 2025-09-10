/**
 * @component Hero
 * @purpose To promote a cleaning service.
 * @description Displays the main headline, service description, call to action buttons, and a placeholder for a rating and image.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import React from 'react'

import Reviews from '../Reviews'

const Hero = () => {
  return (
    <section className="pt-20 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start lg:text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Professional <span className="text-primary">Cleaning Service</span> in Belgrade
          </h1>
          <p className="text-base text-lg sm:text-xl lg:text-2xl mb-8 text-gray-800">
            Quality guaranteed cleaning for homes and offices. Experienced team, professional equipment, and flexible scheduling for your
            convenience.
          </p>
          <div className="flex justify-start space-x-4">
            <button className="btn btn-primary btn-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              Get a Quote
            </button>
            <button className="btn btn-outline btn-lg rounded-full">Learn More</button>
          </div>
          {/* Placeholder for rating if available */}
          <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2">
            <Reviews />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* Placeholder for the smiling photo */}
          <div className="w-full max-w-md lg:max-w-lg h-96 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
            <span className="text-gray-500 text-xl">Smiling Photo Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
