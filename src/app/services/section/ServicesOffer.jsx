'use client";'
import ServiceCards from "@/components/ServiceCards";
import { Button } from "@/components/ui/button";
import React from "react";

const ServicesOffer = () => {
  return (

    <section>
      <div>
        <div className="h-[1px] w-full overflow-hidden relative">
          <div className="h-[1px] bg-black w-full absolute" style={{ transform: "translateX(0%) translateZ(0px);" }}></div>
        </div>
        <div className="flex justify-between py-8">
          <h3 className="font-bold text-[22px] lg:text-[42px] uppercase">
            (Services)
          </h3>
          <img
            alt="Services - scroll down"
            loading="lazy"
            width="33"
            height="33"
            decoding="async"
            data-nimg="1"
            src="/arrow-bottom.svg"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <ServiceCards service="DESIGN" serviceNo="• S / 01" productImg="/ujs_services_design.png" />
      <ServiceCards service="WEB DEVELOPMENT" serviceNo="• S / 02" productImg="/ujs_services_design.png" />
      <ServiceCards service="APP DEVELOPMENT" serviceNo="• S / 03" productImg="/ujs_services_design.png" />

    </section>
  );
};

export default ServicesOffer;


