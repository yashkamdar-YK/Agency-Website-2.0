import React from 'react'

const AboutUs = () => {
  return (
    <div className="pb-[64px]">
      <div className="h-[1px] w-full overflow-hidden relative">
        <div className="h-[1px] bg-black w-full absolute" style={{ transform: "translateX(0%) translateZ(0px);" }}></div>
      </div>
      <div className="mt-4">
        <div className="flex gap-2 items-center ">
          <div className="w-[0.3rem] h-[0.3rem] bg-black rounded-full">
          </div>
          <p className="uppercase font-medium text-xs">A / 01</p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-16 gap-x-8 pt-[33px] relative">
          <div>
            <div className="md:pb-16 relative flex gap-[6px]">
              <h3 className="inline-block text-lg md:text-[32px] leading-[20px] md:leading-[34px] font-normal">From a Cape Town-based startup to a global design powerhouse.</h3>
            </div>
            <div className="hidden md:block">
              <div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[15px] pb-3">Urbanjava Studio is a dynamic design studio specializing in brand identity, social media, graphic design, and digital experiences. We build strong relationships with brands, helping them stand out in crowded markets. Our approach combines audacity and precision, where relentless creativity meets pinpoint focus.
            </p>
            <p className="text-[15px] pb-3">Driven by our passion for innovation, we continuously explore new horizons while leveraging our well-established expertise. As pioneers in our field, we prioritize our clients' core objectives, setting the pace for the industry. Our commitment is unwavering: we empower companies to fully harness their branding potential and navigate the ever-evolving landscape of digital, social media, and marketing.</p>
          </div>
          <div className="md:hidden">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs