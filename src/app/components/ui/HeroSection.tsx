import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-primary">Cleaning Service in Belgrade</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">Your trusted partner for a spotless home and office.</p>
          <p className="text-base sm:text-lg mb-8 text-gray-600 ">
            Get an instant estimate with our easy-to-use cleaning calculator:
            <br />
            Basic / General / Post-Renovation Cleaning / Dry Cleaning
            <br />
            Area and type of premises / type of furniture
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="btn btn-primary btn-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              Get a Quote
            </button>
            <button className="btn btn-outline btn-lg rounded-full">Learn More</button>
          </div>
          {/* Placeholder for rating if available */}
          <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2">
            {/* Example: Star rating */}
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">(4.8/5 based on 1000+ reviews)</span>
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

export default HeroSection
