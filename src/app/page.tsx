/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'
import Application from './components/sections/application/Application'
import FAQ from './components/sections/FAQ/FAQ'
import Features from './components/sections/features/Features'
import Footer from './components/sections/footer/Footer'
import Gallery from './components/sections/gallery/Gallery'
import Header from './components/sections/header/Header'
import Hero from './components/sections/hero/Hero'
import Services from './components/sections/services/Services'
import Steps from './components/sections/steps/Steps'
import Testimonials from './components/sections/testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper className="flex justify-center flex-col">
        <Hero />
        <Services />
        <Features />
        <Steps />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Application />
      </Wrapper>
      <Footer />
    </>
  )
}
