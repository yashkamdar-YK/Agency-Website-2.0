import React from "react";
import { Button } from "./ui/button";

const ServiceCards = () => {
  return (
    <section className="pb-16">
      <div className="w-full h-[1px] bg-black"></div>
      <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">
        • S / 02
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-[22px] font-bold">DESIGN</h1>
            <p className="py-8 leading-[1.5rem]">
              At UJS©, visibility isn’t enough. We delve deep to create
              narratives that captivate <br /> audiences. Moving beyond mere
              design, we breathe life into brands, striking a balance <br />{" "}
              between strategy and creativity.
            </p>
            <Button>LEARN MORE</Button>
          </div>
          <div className="text-sm pb-6">
            <h1 className="font-bold">SERVICE</h1>
            <h2>Research / Strategy / Design</h2>
          </div>
        </div>
        <div className="flex justify-end h-[600px] w-auto">
          <img src="/ujs_services_design.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
