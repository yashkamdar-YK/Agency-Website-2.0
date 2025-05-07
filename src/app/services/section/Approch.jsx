import React from "react";

export const Approch = () => {
  return (
    <section>
      <div className="pb-[64px]">
        <div className="h-[1px] w-full overflow-hidden relative">
          <div
            className="h-[1px] bg-black w-full absolute"
            style={{ transform: "translateX(0%) translateZ(0px);" }}
          ></div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2 items-center ">
            <div className="w-[0.3rem] h-[0.3rem] bg-black rounded-full"></div>
            <p className="uppercase font-medium text-xs">S / 01</p>
          </div>
          <div className="grid md:grid-cols-2 gap-y-16 gap-x-8 pt-[33px] relative">
            <div>
              <div className="md:pb-16 relative flex gap-[6px]">
                <h3 className="inline-block text-lg md:text-[32px] leading-[20px] md:leading-[34px] font-normal">
                  At UJS©, we understand the pivotal role a strong brand plays
                  in the success of any business venture.{" "}
                </h3>
              </div>
              <div className="hidden md:block">
                <div></div>
              </div>
            </div>
            <div>
              <p className="text-[15px] pb-3">
                That’s why we approach our services with a holistic mindset,
                recognizing that branding is the cornerstone upon which all
                other elements rest. Whether we’re crafting compelling designs,
                developing engaging content, or executing strategic marketing
                campaigns, our focus remains unwaveringly on amplifying your
                brand’s presence and resonance in the market.
              </p>
              <p className="text-[15px] pb-3">
                By integrating our expertise across branding, design, content,
                and marketing, we ensure that every aspect of your brand’s
                identity is cohesive, compelling, and geared toward achieving
                your goals. Furthermore, our commitment to excellence extends
                beyond the initial project delivery. We believe in fostering
                long-term partnerships with our clients, offering ongoing
                support and guidance to adapt to the evolving needs of your
                brand.
              </p>
            </div>
            <div className="md:hidden">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
