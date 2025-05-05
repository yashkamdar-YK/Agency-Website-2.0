import React from "react";

const ContactHero = () => {
  return (
    <section className="w-full px-4 lg:px-13 lg:pb-16">
      <h1 className="text-[8vw] pt-12.5 leading-[0.85] uppercase font-black tracking-tight">
        let’s work togther
      </h1>

      <div className="flex justify-between gap-10 lg:pt-8 lg:pb-16 ">
        <div className="md:px-3 gap-5 flex flex-col">
          <p className="lg:text-[32px] text-xl font-medium leading-tight text-black">
          Submit your project details below and we’ll get <br />back to you.
          </p>
        </div>
        <div className="text-sm font-bold text-right">(SCROLL)</div>
      </div>
    </section>
  );
};

export default ContactHero;
