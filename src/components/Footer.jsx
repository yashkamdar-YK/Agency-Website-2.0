"use client";

import { ArrowUp, ArrowRight, Heart, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {

  return (
    <footer className=" border-t-1 border-black py-12 px-6 md:px-12 lg:px-14 relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-24">
        <div className="font-bold text-2xl tracking-tight">APEXLABS</div>
        <div className="flex gap-4">
          <Button
            data-cal-namespace="15min"
            data-cal-link="ankit0panchal/15min"
            data-cal-config='{"layout":"month_view"}'
            className={"cursor-pointer"}
          >
            LETS TALK
          </Button>
          {/* <Button  variant="outline">
            <Play size={18} /> MENU
          </Button> */}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-24">
        {/* Address Column */}
        <div className="lg:col-span-3">
          <h1 className="text-lg leading-5.5">
            Suite 2 <br /> Kalane Nagar <br /> Indore, 452002 <br /> M.P India
          </h1>
        </div>

        {/* Links Column */}
        <div className="space-y-8 lg:col-span-4">
          {/* <div>
            <Link href="#" className="text-sm block hover:underline">
              <h1 className="text-xl">Twitter/ X</h1>
            </Link>
            <Link href="#" className="text-sm block hover:underline">
              <h1 className="text-xl">Instagram</h1>
            </Link>
            <Link href="#" className="text-sm block hover:underline">
              <h1 className="text-xl">Linkedin</h1>
            </Link>
          </div> */}

          <div>
            <h1 className="text-lg">General enquiries</h1>
            <Link
              href="mailto:hello@moonlab.co"
              className="text-sm hover:underline"
            >
              <h1 className="text-xl">hello@apexlabs.in</h1>
            </Link>
          </div>

          <div>
            <h1 className="text-lg">For Business</h1>
            <Link
              href="mailto:hello@moonlab.co"
              className="text-sm hover:underline"
            >
              <h1 className="text-xl">hello@apexlabs.in</h1>
            </Link>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="lg:col-span-5">
          <h1 className="lg:text-5xl text-4xl font-medium mb-6">
            Subscribe to
            <br />
            our newsletter
          </h1>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-2 border-black rounded-lg py-3 px-5 pr-12 text-lg focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[16px]">
        <div>@2025 Apexlabs</div>
        <div className="flex items-center mt-4 md:mt-0">
          Build by Apexlabes with{" "}
          <Heart size={14} className="mx-1 fill-black" />
        </div>
      </div>

      {/* Back to Top Button */}
      {/* <Link
        href="#top"
        className="absolute bottom-12 right-6 md:right-12 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-colors"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <ArrowUp size={20} />
      </Link> */}
    </footer>
  );
}
