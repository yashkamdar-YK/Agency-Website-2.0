"use client";
import Image from "next/image";
import React from "react";

export default function ServicesSection() {
  return (
    <section className="w-full pb-16 lg:pb-[108px] ">
      <div className="w-full h-[1px] bg-black "></div>
      <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">• W / 01</p>
      <div className="flex items-center justify-between text-xl font-bold pb-6">
        <h1 className="underline">SERVICE</h1>
        <h2>0.1</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-6">
        {/* Web Development Card */}
        <div className="rounded-sm bg-[#b7b3a2] px-10 pt-10 pb-14 flex flex-col lg:flex-col md:flex-row-reverse h-full gap-10">
          <div className="mb-8">
            <div className="w-40 h-40 relative">
              <Image
                src="/service-card-o1.webp"
                alt="Web Development"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl md:text-3xl uppercase mb-5 tracking-normal">
              THE FASTEST,
              <br />
              MOST RESPONSIVE
              <br />
              WEB DEVELOPMENT
            </h3>
            <p className="text-base md:text-lg">
              Everything required to quickly build beautiful, responsive and
              high-performance websites.
            </p>
          </div>
        </div>

        {/* App Development Card */}
        <div className="rounded-sm bg-[#e5ff5d] px-10 pt-10 pb-14  flex flex-col lg:flex-col md:flex-row-reverse h-full gap-10">
          <div className="mb-8">
            <div className="w-40 h-40 relative">
              <Image
                src="/service-card-o2.webp"
                alt="Web Development"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl md:text-3xl uppercase mb-5 tracking-normal">
              NATIVE &<br />
              CROSS-PLATFORM
              <br />
              APP DEVELOPMENT
            </h3>
            <p className="text-base md:text-lg">
              Get the exact mobile experience for your users with our custom app
              development solutions.
            </p>
          </div>
        </div>

        {/* Design Card */}
        <div className="rounded-sm bg-[#f9f9f9] px-10 pt-10 pb-14  flex flex-col lg:flex-col md:flex-row-reverse h-full gap-10">
          <div className="mb-8">
            <div className="w-40 h-40 relative">
              <Image
                src="/service-card-o3.webp"
                alt="Web Development"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt- auto">
            <h3 className="text-2xl md:text-3xl uppercase mb-5 tracking-normal">
              INTUITIVE,
              <br />
              USER-CENTERED
              <br />
              DESIGN
            </h3>
            <p className="text-base md:text-lg">
              Beautiful interfaces, user experience, and branding that sets your
              product apart from the.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
