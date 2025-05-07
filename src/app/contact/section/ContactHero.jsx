import React from "react";

const ContactHero = () => {
  return (
    <section className="w-full px-4 lg:px-13 lg:pb-16">
      <h1 className="lg:text-[8vw] text-[48px] leading-[52px] pt-12.5 lg:leading-[0.85] font-bold tracking-tight uppercase">
        let’s work togther
      </h1>

      <div className="flex justify-between gap-10 lg:pt-8 lg:pb-16 pt-4 pb-8 ">
        <div className="md:px-3 gap-5 flex flex-col">
          <p className="lg:text-[32px] text-xl font-medium leading-tight text-black">
            <span className="hidden lg:block">
              Submit your project details below and we’ll get <br />
              back to you.
            </span>
            <span className="lg:hidden block">
              {" "}
              Submit your project details <br /> below and we’ll get
              back to you.
            </span>
          </p>
        </div>
        <div className="text-sm font-bold text-right hidden lg:block ">
          (SCROLL)
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
