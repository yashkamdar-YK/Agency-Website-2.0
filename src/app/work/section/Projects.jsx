import ProjectCards from '@/components/ProjectCards'
import React from 'react'

const Projects = () => {
  return (
    <section>
      <div className="pb-[64px]">
        <div className="h-[1px] w-full overflow-hidden relative">
          <div
            className="h-[1px] bg-black w-full absolute"
            style={{ transform: "translateX(0%) translateZ(0px);" }}
          ></div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2 items-center pb-7 pt-8">
            <div className="w-[0.3rem] h-[0.3rem]  bg-black rounded-full"></div>
            <p className="uppercase font-medium text-xs">S / 01</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
          </div >
        </div>
      </div>
    </section>
  )
}

export default Projects