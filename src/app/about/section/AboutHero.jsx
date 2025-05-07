import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="pt-6 md:pt-11">
      <div className="relative w-full">
        <h2 className="text-[42px] font-bold md:text-[120px] uppercase leading-[42px] md:leading-[98px] overflow-hidden">
          <span className="sr-only">APEX LABS </span>
          <span aria-hidden="true">
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span
                className="inline-block"
                style={{
                  transform: "translateY(calc(0% + 0em)) translateZ(0px)",
                }}
              >
                APEX&nbsp;
              </span>
            </span>
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span
                className="inline-block"
                style={{
                  transform: "translateY(calc(0% + 0em)) translateZ(0px)",
                }}
              >
                LABS&nbsp;
              </span>
            </span>
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <span
                className="inline-block"
                style={{
                  transform: "translateY(calc(0% + 0em)) translateZ(0px)",
                }}
              >
                &nbsp;
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
                heart of your brand.
              </div>
            </div>
          </div>
          <p className="text-lg md:text-[32px] leading-[18px] md:leading-[34px] overflow-hidden">
            <span className="sr-only">
              Holistic boutique experiences that express the
            </span>
            <span aria-hidden="true">
              <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span
                  className="inline-block"
                  style={{
                    transform: "translateY(calc(0% + 0em)) translateZ(0px)",
                  }}
                >
                  Holistic boutique experiences that express the
                </span>
              </span>
              <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span
                  className="inline-block"
                  style={{
                    transform: "translateY(calc(0% + 0em)) translateZ(0px)",
                  }}
                >
                  heart of your brand.
                </span>
              </span>
            </span>
          </p>
        </div>
        <p className="hidden md:block text-sm font-medium">(SCROLL)</p>
      </div>
      <img
        alt="Brand Focused "
        fetchPriority="high"
        width="1340"
        height="751"
        decoding="async"
        data-nimg="1"
        className="w-full pb-16 rounded-md"
        src="https://images.ctfassets.net/cnse5yd3zml3/5xbogf0357cdKS34esjOp3/bbe3dd8b77de222f8677f1c06df77364/brand-centric-services-hero.svg"
        style={{ color: "transparent" }}
      />
    </div>
  );
};

export default AboutHero;
