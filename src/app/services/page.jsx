'use client'
import React from 'react'
import ServiceHero from './section/ServiceHero'
import App from 'next/app'
import { Approch } from './section/Approch'
import ServicesOffer from './section/ServicesOffer'

const page = () => {
  return (
    <main className='w-full px-[36px] md:px-[52px]'>
    <ServiceHero/>
    <Approch/>
    <ServicesOffer/>
    </main>
  )
}

export default page