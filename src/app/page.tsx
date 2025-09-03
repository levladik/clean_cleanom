/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'
import HeroSection from './components/sections/HeroSection'
import Services from './components/sections/services/Services'

export default function Home() {
  return (
    <Wrapper className="flex justify-center flex-col">
      <HeroSection />
      <Services />
    </Wrapper>
  )
}
