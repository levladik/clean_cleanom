/**
 * Home Page
 * 
 * The main landing page for the cleaning service website
 */

import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/Service/Services';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Calculator from '@/components/calculator/Calculator';
import Wrapper from '@/components/layout/Wrapper';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <Wrapper>
      <Calculator />
      <HowItWorks />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </Wrapper>
  );
}
