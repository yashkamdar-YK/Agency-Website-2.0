'use client'
import React from 'react'
import ServiceHero from './section/ServiceHero'
import App from 'next/app'
import { Approch } from './section/Approch'
import ServicesOffer from './section/ServicesOffer'

const page = () => {
  return (
    <>
    <ServiceHero/>
    <Approch/>
    <ServicesOffer/>
    </>
  )
}

export default page