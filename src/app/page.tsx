/**
 * Home Page
 * 
 * The main landing page for the cleaning service website
 */

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Calculator from '@/components/calculator/Calculator';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
