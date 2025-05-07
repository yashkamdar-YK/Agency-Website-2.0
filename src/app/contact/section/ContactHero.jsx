import React from "react";

const ContactHero = () => {
  return (
    <div className="pt-6 md:pt-11">
      <div className="relative w-full">
        <h2 className="text-[42px] font-bold md:text-[120px] uppercase leading-[42px] md:leading-[98px] overflow-hidden">
          <span className="sr-only">let’s work togther</span>
          <span aria-hidden="true">
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span className="inline-block" style={{transform: "translateY(calc(0% + 0em)) translateZ(0px);"}}>
                let’s&nbsp;
              </span>
            </span>
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span className="inline-block" style={{transform: "translateY(calc(0% + 0em)) translateZ(0px);"}}>
                work&nbsp;
              </span>
            </span>
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span className="inline-block" style={{transform: "translateY(calc(0% + 0em)) translateZ(0px);"}}>
                togther&nbsp;
              </span>
            </span>
          </span>
        </h2>
      </div>
      <div className="flex justify-between pt-[16px] pb-[32px] md:pt-[32px] md:pb-[64px]">
        <div className="relative w-full md:max-w-[50vw]">
          <div className="relative w-full">
            <div className="text-lg md:text-[32px] leading-[18px] md:leading-[34px] overflow-hidden max-w-none">
              <div className="min-w-0 invisible h-0 overflow-x-scroll whitespace-nowrap">
                back to you.
              </div>
            </div>
          </div>
          <p className="text-lg md:text-[32px] leading-[18px] md:leading-[34px] overflow-hidden">
            <span className="sr-only">
              Submit your project details below and we’ll get back to you.
            </span>
            <span aria-hidden="true">
              <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className="inline-block" style={{transform: "translateY(calc(0% + 0em)) translateZ(0px);"}}>
                  Submit your project details below and we’ll get
                </span>
              </span>
              <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className="inline-block" style={{transform: "translateY(calc(0% + 0em)) translateZ(0px);"}}>
                  back to you.
                </span>
              </span>
            </span>
          </p>
        </div>
        <p className="hidden md:block text-sm font-medium">
          (SCROLL)
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
