/**
 * Home Page
 *
 * The main landing page
 */

import Wrapper from './components/layout/Wrapper'
import HeroSection from './components/ui/HeroSection'

export default function Home() {
  return (
    <Wrapper className="flex justify-center">
      <HeroSection />
    </Wrapper>
  )
}
