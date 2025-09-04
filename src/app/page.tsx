/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'
import HeroSection from './components/sections/HeroSection'
import { HowItWorks } from './components/sections/services/HowItWorks'
import Services from './components/sections/services/Services'
import WhyUs from './components/sections/services/WhyUs'

export default function Home() {
  return (
    <Wrapper className="flex justify-center flex-col">
      <HeroSection />
      <Services />
      <WhyUs />
      <HowItWorks />
    </Wrapper>
  )
}
