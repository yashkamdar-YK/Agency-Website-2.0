import React from 'react'

const AboutUs = () => {
  return (
    <section className="w-full px-4 lg:px-13 pb-16 lg:pb-16">
      <div className="w-full h-[1px] bg-black "></div>
      <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">
        • A / 01
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-[18px] lg:text-[32px] leading-[20px] lg:leading-[1.2] ">
          From a Cape Town-based startup to a global design powerhouse.
          </h1>
        </div>
        <div className='text-[15px] lg:text-[16px]'>
          <p className="pb-3">
          Urbanjava Studio is a dynamic design studio specializing in brand identity, social media, graphic design, and digital experiences. We build strong relationships with brands, helping them stand out in crowded markets. Our approach combines audacity and precision, where relentless creativity meets pinpoint focus.
          </p>
          <p>
          Driven by our passion for innovation, we continuously explore new horizons while leveraging our well-established expertise. As pioneers in our field, we prioritize our client's core objectives, setting the pace for the industry. Our commitment is unwavering: we empower companies to fully harness their branding potential and navigate the ever-evolving landscape of digital, social media.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs