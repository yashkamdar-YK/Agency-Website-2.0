"use client";
import React from "react";

export const CollaborateSection = () => {
  return (
    <div className="flex flex-col justify-center px-4 lg:px-13 pb-16 lg:pb-[108px]">
      <h1 className="text-[8vw] font-bold text-[#091423]  leading-[0.9]">
        let’s discuss your <br />
        <span className="inline-flex items-center gap-14">
          next
          <svg
            className="w-[35px] lg:w-[4.5vw] h-auto inline-block"
            width="65"
            height="66"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.7134 13.1963L37.1131 0.596053L29.511 8.19817L49.2162 27.9033L0.375508 27.9033L0.375509 38.6543L49.0505 38.6543L29.3274 58.3775L36.9295 65.9796L64.2548 38.6543H64.4976V28.254H49.7134V13.1963Z"
              fill="#091423"
            ></path>
          </svg>
          success
        </span>
      </h1>
      <div className="flex flex-col gap-6 lg:gap-8 items-center mt-20">
        <h1 className="text-xl"> Big ambitions? <br />We match the energy.</h1>
        
      </div>
    </div>
  );
};
