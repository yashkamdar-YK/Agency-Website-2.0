import ServiceCards from "@/components/ServiceCards";
import { Button } from "@/components/ui/button";
import React from "react";

const ServicesOffer = () => {
  return (
    <div className="w-full px-4 lg:px-13">
      <div className="w-full h-[1px] bg-black " />
      <div className="flex items-center py-8 justify-between text-[42px] font-bold">
        <h1>(SERVICE)</h1>
      </div>

      <ServiceCards />
      <ServiceCards />
      <ServiceCards />

    </div>
  );
};

export default ServicesOffer;
