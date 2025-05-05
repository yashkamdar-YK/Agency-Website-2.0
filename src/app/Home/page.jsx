'use client'
import React from 'react'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServiceSection'
import WhyusSection from './sections/WhyusSection'
import ProjectSection from './sections/ProjectSection'
import TestimonialSection from './sections/TestimonialSection'
import FAQSection from './sections/FAQSection'
import { CollaborateSection } from './sections/CollaborateSection'
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyusSection />
      <ProjectSection />
      <TestimonialSection />
      <FAQSection />
      <CollaborateSection />
    </>
  )
}

export default HomePage