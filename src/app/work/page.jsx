import React from 'react'
import Projects from './section/projects'
import WorkHero from './section/WorkHero'

const page = () => {
  return (
    <main className='w-full px-[36px] md:px-[52px]'>
      <WorkHero/>
      <Projects/>
    </main>
  )
}

export default page