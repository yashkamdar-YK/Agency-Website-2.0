"use client";
import AnimeButton from "@/components/AnimeButton";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100dvh-68px] flex justify-between flex-col">
      <div className="flex flex-col lg:justify-between lg:h-full lg:pb-28">
        <div>
          <svg className="w-full h-auto pb-6 md:pb-12" viewBox="0 0 1354 263" width="1341" height="263">
            <text className="font-bold text-[238px]" x="0" y="258">APEX LABS</text>
          </svg>
          <div className="relative w-full">
            <div className="relative w-full">
              <div className="text-[33px] md:text-[45px] md:max-w-2xl leading-[33px] md:leading-[47px] pb-8 overflow-hidden max-w-none">
                <div className="min-w-0 invisible h-0 overflow-x-scroll whitespace-nowrap">conceptual thinking.</div>
              </div>
            </div>
            <p className="text-[33px] md:text-[45px] md:max-w-2xl leading-[33px] md:leading-[47px] pb-8 overflow-hidden">
              <span className="sr-only">Building brands through strategy-led design and conceptual thinking.</span>
              <span aria-hidden="true">
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  <span className="inline-block" style={{ transform: "translateY(calc(0% + 0em)) translateZ(0px)" }}>Building brands through</span>
                </span>
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  <span className="inline-block" style={{ transform: "translateY(calc(0% + 0em)) translateZ(0px)" }}>strategy-led design and</span>
                </span>
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  <span className="inline-block" style={{ transform: "translateY(calc(0% + 0em)) translateZ(0px)" }}>conceptual thinking.</span>
                </span></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between pb-8 lg:pb-32">
          <a className="uppercase text-sm border-b-black border-b-[1px] font-medium" href="/about">Learn more about us</a>
          <AnimeButton />
          <p className="hidden lg:block text-sm font-medium">(SCROLL)</p>
        </div>
      </div>
      <div className="pb-[60px] flex flex-col gap-4 lg:gap-3 lg:flex-col-reverse lg:absolute xl:right-44 lg:right-28 lg:top-70">
        <div className="flex justify-between">
          <h3 className="leading-[20px]">Urbanjava Studio <br />Showreel (22-24)
          </h3>
          <img alt="arrow" loading="lazy" width="11" height="11" decoding="async" data-nimg="1" className="md:hidden" style={{ color: "transparent", src: "/images/hero/arrow.svg" }} />
        </div>
        <div className="rounded-[6px] w-full md:w-[361px] overflow-hidden">
          <video playsInline={true} autoPlay={true} muted={false} className="">
            <source src="/videos/montage.mp4" />
          </video>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
