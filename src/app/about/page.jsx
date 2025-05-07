'use client'
import React from 'react'
import AboutHero from './section/AboutHero'
import AboutUs from './section/AboutUs'
import ServiceCards from '@/components/ServiceCards'

const page = () => {
  return (
    <main className='w-full px-[36px] md:px-[52px]'>
      <AboutHero />
      <AboutUs />
    </main>
  )
}

export default page