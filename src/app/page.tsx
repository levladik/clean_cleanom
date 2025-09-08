/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'
import Features from './components/sections/features/Features'
import Gallery from './components/sections/gallery/Gallery'
import Hero from './components/sections/hero/Hero'
import Services from './components/sections/services/Services'
import Steps from './components/sections/steps/Steps'
import Testimonials from './components/sections/Testimonials'

export default function Home() {
  return (
    <Wrapper className="flex justify-center flex-col">
      <Hero />
      <Services />
      <Features />
      <Steps />
      <Gallery />
      <Testimonials />
    </Wrapper>
  )
}
