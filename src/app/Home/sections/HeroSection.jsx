"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-4 lg:px-13 lg:pb-[7rem]">
      <h1 className="text-[15vw] py-12.5 text-center leading-[0.85] font-black tracking-tight">
        APEX LABS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="md:p-3.5 gap-5 flex flex-col">
          <p className="lg:text-[45px] text-2xl w-fit font-medium leading-tight text-black">
            Building brands through
            <br />
            strategy-led design and
            <br />
            conceptual thinking.
          </p>

          <div className="flex lg:flex-row w-fit flex-col-reverse lg:gap-8 gap-6 lg:items-center">
            <a
              href="#about"
              className="text-xs font-bold underline underline-offset-2"
            >
              LEARN MORE ABOUT US
            </a>

            <Button size="lg" className="text-sm cursor-pointer">
              {" "}
              Let's Collaborate{" "}
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full flex justify-center lg:justify-center">
          {/* <div className="w-[320px] h-[200px] bg-black rounded-md overflow-hidden shadow-lg">
            <video
              src="/videos/montage.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-md shadow-xl"
            />
            <div className="absolute bottom-[-2rem] transform  lg:left-auto lg:translate-x-0 lg:bottom-[-3rem] text-sm text-black text-center">
              Urbanjava Studio
              <br />
              Showreel (22–24)
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom right scroll hint */}
      <div className="text-[12px] font-bold text-right mt-10">(SCROLL)</div>
    </section>
  );
};

export default HeroSection;
