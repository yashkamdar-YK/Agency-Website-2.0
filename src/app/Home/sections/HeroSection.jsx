'use client';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="w-full mt-10 px-8 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                {/* Left Content */}
                <div className="space-y-8">
                    <h1 className="text-[20vw] leading-[0.85] font-black tracking-tight">
                        STUDIO
                    </h1>

                    <p className="text-4xl font-medium leading-snug text-black">
                        Building brands through<br />
                        strategy-led design and<br />
                        conceptual thinking.
                    </p>

                    <a href="#about" className="text-xs font-bold underline underline-offset-2">
                        LEARN MORE ABOUT US
                    </a>
                </div>

                {/* Right Content */}
                <div className="relative w-full flex justify-center lg:justify-center">
                    <div className="w-[320px] h-[200px] bg-black rounded-md overflow-hidden shadow-lg">
                        <video
                            src="/montage.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-md shadow-xl"
                        />


                    </div>
                    <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-[-3rem] lg:right-0 text-sm text-black text-center">
                        Urbanjava Studio<br />
                        Showreel (22–24)
                    </div>
                </div>
            </div>

            {/* Bottom right scroll hint */}
            <div className="text-[12px] font-bold text-right mt-10">
                (SCROLL)
            </div>
        </section>
    );
};

export default HeroSection;
