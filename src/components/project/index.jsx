"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };
  

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    console.log(secondImagePercent);
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={manageMouseMove}
      className="md:flex mt-[10vh] gap-8"
    >
      <div
        ref={firstImage}
        className="relative"
        style={{
          width:
            window.innerWidth < 768
              ? "100%"
              : window.innerWidth >= 768 && window.innerWidth < 1024
                ? "50%"
                : reversed
                  ? "33.33%"
                  : "66.66%",
        }}
      >
        <div className="relative pb-[66%]">
          <Image
            src={`/images/${projects[0].src}`}
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="p-2.5">
          <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
            {projects[0].name}
          </h3>
          <p className="text-[1em] mt-0 text-[#bbbbbb]">
            {projects[0].description}
          </p>
          <p className="text-[1em] mt-0 text-[#656565]">{projects[0].year}</p>
        </div>
      </div>

      <div
        ref={secondImage}
        className="relative"
        style={{
          width:
            window.innerWidth < 768
              ? "100%"
              : window.innerWidth >= 768 && window.innerWidth < 1024
                ? "50%"
                : reversed
                  ? "66.66%"
                  : "33.33%",
        }}
      >
        <div className="relative pb-[66%]">
          <Image
            src={`/images/${projects[1].src}`}
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="p-2.5">
          <h3 className="text-[1.2em] mb-[5px] mt-0 font-normal">
            {projects[1].name}
          </h3>
          <p className="text-[1em] mt-0 text-[#bbbbbb]">
            {projects[1].description}
          </p>
          <p className="text-[1em] mt-0 text-[#656565]">{projects[1].year}</p>
        </div>
      </div>
    </div >
  );
}
