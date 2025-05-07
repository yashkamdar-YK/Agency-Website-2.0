'use client';
import React from "react";
const ServiceCards = (props) => {
  return (
    <div className="border-black pb-[64px]">
      <div className="h-[1px] w-full overflow-hidden relative">
        <div className="h-[1px] bg-black w-full absolute" style={{transform: "translateX(0%) translateZ(0px);"}}></div>
      </div>
      <div className="flex gap-2 items-center pb-7 pt-8">
        <div className="w-[0.3rem] h-[0.3rem] bg-black rounded-full"></div>
        <p className="uppercase font-medium text-xs">{props.serviceNo}</p>
      </div>
      <div className="grid gap-16 md:gap-24 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex gap-1 items-center">
              <div className="bg-black rounded-full h-[17px] w-[17px] relative bottom-[2px]"></div>
              <h2 className="text-lg uppercase font-bold md:text-xl">{props.service}</h2>
            </div>
            <div className="py-8">
              <p className="text-base pb-3">
                At UJS©, visibility isn’t enough. We delve deep to create narratives that captivate audiences. Moving beyond mere design, we breathe life into brands, striking a balance between strategy and creativity.
              </p>
            </div>
            <a className="block group w-max relative bg-gray-300 px-6 py-1 rounded-3xl hover:bg-black transition-color ease-in-out duration-300 hover:text-white text-black" href="/services/branding">
              <p className="text-[10px] uppercase group-hover:-translate-x-3 transition-transform ease-in-out duration-300">Learn More</p>
              <img alt="arrow right" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="absolute top-1/2 -translate-y-1/2 right-2 w-0 h-2 group-hover:w-2 transition-all ease-in-out" src="/images/arrow-right-white.svg" style={{color: "transparent;"}} />
            </a>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold uppercase">Services</p>
            <p className="text-sm">Research / Strategy / Design</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <img src={props.productImg} className="w-full h-full transition-transform duration-500 transform hover:scale-110 object-fill rounded-md">
          </img>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
