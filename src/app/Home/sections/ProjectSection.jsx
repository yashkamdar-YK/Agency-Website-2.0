'use client';
import { projects } from '@/lib/data';
import Project from '@/components/project';

export default function ProjectSection() {
  return (
    <main className="mt-5vh color-black pb-10vh px-4 lg:px-13">
      <h1 className='lg:text-[3vw] text-[6vw] lg:max-w-[65%] lg:leading-[1.2] font-medium'>We use design and technology to create brands and products that perform, delight, and scale.</h1>
      <div>
        <Project projects={[projects[0], projects[1]]}/>
        <Project projects={[projects[2], projects[3]]} reversed={true}/>
        <Project projects={[projects[4], projects[5]]}/>
        <Project projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
    </main>
  )
}