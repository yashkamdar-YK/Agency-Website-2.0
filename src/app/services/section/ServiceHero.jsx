import Image from "next/image";
import React from "react";

const ServiceHero = () => {
  return (
    <section className="w-full px-4 lg:px-13 lg:pb-16">
      <h1 className="text-[8vw] pt-12.5 leading-[0.85] font-black tracking-tight">
        BRAND FOCUSED
      </h1>

      <div className="flex justify-between gap-10 lg:pt-8 lg:pb-16 ">
        <div className="md:px-3 gap-5 flex flex-col">
          <p className="lg:text-[32px] text-xl font-medium leading-tight text-black">
            Unifying your vision across Brand, Design, Content, <br />
            and Marketing Channels.
          </p>
        </div>
        <div className="text-sm font-bold text-right">(SCROLL)</div>
      </div>

      <div className="relative w-full h-[90vh] ">
        <Image
          src="/nature.jpg"
          alt="Web Development"
          fill
          className="object-cover rounded-[8px]"
        />
      </div>
    </section>
  );
};

export default ServiceHero;
