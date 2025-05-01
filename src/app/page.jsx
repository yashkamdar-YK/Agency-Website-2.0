'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from "motion/react"
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <motion.h1 
      animate={{
        x: 100,
        transition: { duration: 2 }
      }}
      className='text-3xl font-bold underline'>
        Hello world!
      </motion.h1>
      <Button>
        click me!
      </Button>
    </div>
  )
}

export default page