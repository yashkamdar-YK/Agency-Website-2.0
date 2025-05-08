import { ArrowRight } from "lucide-react";
import SVGComponent from "../../../../public/svgviewer-react-output";

export default function WhyusSection() {
  return (
    <section className="w-full lg:pb-[108px] pb-16">
      <div className="">
        <div className="w-full h-[1px] bg-black "></div>
        <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">
          • W / 02
        </p>
        <div className="flex items-center justify-between text-xl font-bold pb-6">
          <h1 className="underline">OUR WORK</h1>
          <h2>0.2</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row">
        {/* Left column - 30% width */}
        <div className="w-full lg:w-[30%]  border border-gray-300 p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block border border-gray-500 rounded-full px-4 py-1 text-sm">
              CLIENTS
            </div>
            <p className="text-lg">
              Doconomy is a market-leading provider of innovative solutions that
              enable banks to accelerate the green transition.
            </p>
          </div>
          <div className="mt-10">
            <button className="flex items-center text-base font-medium mt-4">
              EXPLORE <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Middle column - 45% width */}
        <div className="w-full lg:w-[45%] md:w-[100%]  flex flex-col">
          {/* Users section */}
          <div className="border border-gray-300 p-8 md:p-10">
            <div className="mb-2 text-sm">NUMBER OF USERS*</div>
            <div className="text-7xl md:text-7xl font-medium">700M</div>
          </div>

          {/* Countries section */}
          <div className="border border-gray-300 p-8 md:p-10">
            <div className="mb-4 text-sm">COUNTRIES</div>
            <div className="relative h-[200px] md:h-[250px] w-full">
              <div className="absolute inset-0">
                <SVGComponent />
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border border-gray-300 p-8 md:p-10">
            <p className="mb-4">
              For more detailed information about our markets and work, please
            </p>
            <p className="text-sm">
              * Potential user reach based on connected bank and financial
              institutions
            </p>
          </div>
        </div>

        {/* Right column - 25% width */}
        <div className="w-full md:w-[100%] lg:w-[25%] md:flex-row flex lg:flex-col flex-col">
          {/* Clients section */}
          <div className="border border-gray-300 p-8 md:p-10">
            <div className="mb-2 text-sm">NUMBER OF CLIENTS</div>
            <div className="text-7xl md:text-5xl lg:text-[8rem] font-medium">
              100+
            </div>
          </div>

          {/* Markets section */}
          <div className="border border-gray-300 p-8 md:p-10 flex-grow">
            <div className="mb-2 text-sm">NUMBER OF MARKETS</div>
            <div className="text-7xl md:text-5xl lg:text-[7rem] mb-2 font-medium">
              30+
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              fugiat quia, possimus assumenda voluptas ratione commodi
              exercitationem repellendus aut nulla quo maxime inventore et
              quaerat, unde blanditiis officiis commodi expedita. ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
