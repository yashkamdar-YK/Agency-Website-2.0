"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function WhyusSection() {
  return (
    <section className="w-full text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300">
        {/* Left column */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block border border-gray-500 rounded-full px-4 py-1 text-sm">CLIENTS</div>
            <p className="text-lg">
              Doconomy is a market-leading provider of innovative solutions that enable banks to accelerate the green
              transition.
            </p>
          </div>
          <div className="mt-10">
            <button className="flex items-center text-base font-medium mt-4">
              EXPLORE <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Middle column */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-300">
          {/* Users section */}
          <div className="p-8 md:p-10 border-b border-gray-300">
            <div className="mb-2 text-sm">NUMBER OF USERS*</div>
            <div className="text-7xl md:text-8xl font-medium">700M</div>
          </div>

          {/* Countries section */}
          <div className="p-8 md:p-10 flex-grow">
            <div className="mb-4 text-sm">COUNTRIES</div>
            <div className="relative h-[200px] md:h-[250px] w-full">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="World map with highlighted countries"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="p-8 md:p-10 border-t border-gray-300">
            <p className="mb-4">
              For more detailed information about our markets and work, please get in touch with our team.
            </p>
            <p className="text-sm">* Potential user reach based on connected bank and financial institutions</p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {/* Clients section */}
          <div className="p-8 md:p-10 border-b border-gray-300">
            <div className="mb-2 text-sm">NUMBER OF CLIENTS</div>
            <div className="text-7xl md:text-8xl font-medium">100+</div>
          </div>

          {/* Markets section */}
          <div className="p-8 md:p-10 flex-grow">
            <div className="mb-2 text-sm">NUMBER OF MARKETS</div>
            <div className="text-7xl md:text-8xl font-medium">30+</div>
          </div>
        </div>
      </div>
    </section>
  )
}
