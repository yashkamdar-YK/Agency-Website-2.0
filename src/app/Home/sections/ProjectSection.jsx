"use client";

import ProjectCards from "@/components/ProjectCards";

export default function ProjectSection() {
  return (
    <main className="mt-5vh color-black lg:pb-[40px]">
      <div className="w-full h-[1px] bg-black "></div>
      <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">• W / 03</p>
      <div className="flex items-center justify-between text-xl pb-6  font-bold">
        <h1 className="underline">OUR WORK</h1>
        <h2>0.3</h2>
      </div>
      {/* <h1 className="lg:text-[3vw] text-[6vw] lg:max-w-[65%] lg:leading-[1.2] font-medium">
        We use design and technology to create brands and products that perform,
        delight, and scale.
      </h1> */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 " >
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </main>
  );
}
