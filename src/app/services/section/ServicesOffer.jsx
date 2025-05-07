import ServiceCards from "@/components/ServiceCards";
import { Button } from "@/components/ui/button";
import React from "react";

const ServicesOffer = () => {
  return (
    <div className="w-full px-4 lg:px-13">
      <div className="w-full h-[1px] bg-black " />
      <div className="flex items-center py-8 justify-between lg:text-[42px] text-2xl font-bold">
        <h1>(SERVICES)</h1>
      </div>

      <ServiceCards />
      <ServiceCards />
      <ServiceCards />

    </div>
  );
};

export default ServicesOffer;
