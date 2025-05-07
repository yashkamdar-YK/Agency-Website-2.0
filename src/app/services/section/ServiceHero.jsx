import Image from "next/image";
import React from "react";

const ServiceHero = () => {
  return (
    <section className="w-full px-4 lg:px-13 pb-16">
      <h1 className="lg:text-[8vw] text-[48px] leading-[52px] pt-12.5 lg:leading-[0.85] font-bold tracking-tight">
        BRAND FOCUSED
      </h1>

      <div className="flex justify-between gap-10 lg:pt-8 lg:pb-16 pt-4 pb-8">
        <div className="md:px-3 gap-5 flex flex-col">
          <p className="lg:text-[32px] lg:text-xl text-[18px] font-medium leading-tight text-black">
            Unifying your vision across Brand,  <br /> Design, Content, <br className="lg:hidden block" />
            and Marketing Channels.
          </p>
        </div>
        <div className="text-sm font-bold text-right  hidden lg:block ">(SCROLL)</div>
      </div>

      <div className="relative w-full lg:h-[90vh] h-[200px] ">
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
