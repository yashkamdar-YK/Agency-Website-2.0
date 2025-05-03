"use client"

import { useState } from "react"
import Image from "next/image"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: "jane",
      companyName: "Jane",
      logoSrc: "/client/ampersan.svg?height=40&width=120",
      quote:
        "Timescale's hyperfunctions significantly reduce our development time and continuous aggregates make it easier to do analysis on high volumes of data, plus with lower server costs.",
      author: "Evert Van Cauwenberg",
      position: "CTO",
      company: "Jane.be",
    },
    {
      id: "trading-strategy",
      companyName: "Trading Strategy",
      logoSrc: "/client/palas.svg?height=40&width=120",
      quote:
        "The software development team at your agency delivered our trading platform ahead of schedule. Their expertise in financial technology has been instrumental to our success.",
      author: "Michael Chen",
      position: "CEO",
      company: "Trading Strategy",
    },
    {
      id: "messari",
      companyName: "Messari",
      logoSrc: "/client/waites.svg?height=40&width=120",
      quote:
        "Working with your team has transformed our data analytics capabilities. The custom solutions they built have given us a competitive edge in the market.",
      author: "Sarah Johnson",
      position: "Head of Product",
      company: "Messari",
    },
    {
      id: "square-roots",
      companyName: "Square Roots",
      logoSrc: "/client/warner.svg?height=40&width=120",
      quote:
        "The mobile application your team developed has revolutionized how we connect with our customers. The intuitive design and robust functionality exceeded our expectations.",
      author: "David Williams",
      position: "Founder",
      company: "Square Roots",
    },
  ]

  const [activeTab, setActiveTab] = useState(testimonials[0].id)

  const activeTestimonial = testimonials.find((t) => t.id === activeTab) || testimonials[0]

  return (
    <section className="w-full bg-black py-16 px-4 lg:px-13">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left column - Company logos */}
          <div className="flex flex-col">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id}>
                <button
                  onClick={() => setActiveTab(testimonial.id)}
                  className={`w-full text-left py-6 flex items-center transition-opacity duration-300 ${
                    activeTab === testimonial.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="w-full">
                    <Image
                      src={testimonial.logoSrc || "/placeholder.svg"}
                      alt={testimonial.companyName}
                      width={200}
                      height={50}
                      className="h-10 object-contain object-left"
                    />
                  </div>
                </button>
                {index < testimonials.length - 1 && <div className="border-t border-gray-800 w-full"></div>}
              </div>
            ))}
          </div>

          {/* Right column - Testimonial content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-[#e3fa4f] text-6xl font-serif leading-none">"</div>
            </div>
            <div className="mb-8">
              <p className="text-white text-xl md:text-2xl leading-relaxed">{activeTestimonial.quote}</p>
            </div>
            <div>
              <p className="text-white">
                {activeTestimonial.author}
                <br />
                <span className="text-gray-400">
                  {activeTestimonial.company}, {activeTestimonial.position}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
