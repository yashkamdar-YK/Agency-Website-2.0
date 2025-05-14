"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function CustomButton({ onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="relative py-4 px-12 bg-[#0a1525] text-white font-medium rounded-md overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Top left triangle that moves to bottom left on hover */}
      <div
        className="absolute w-3 h-3 transition-all duration-1000 ease-in-out"
        style={{
          top: isHovered ? "auto" : "8px",
          bottom: isHovered ? "8px" : "auto",
          left: "8px",
          transform: isHovered ? "rotate(-90deg)" : "rotate(0deg)",
          transformOrigin: "center",
          clipPath: "polygon(0 0, 0 100%, 100% 0)",
          background: "white",
        }}
      />

      {/* Bottom right triangle that moves to top right on hover */}
      <div
        className="absolute w-3 h-3 transition-all duration-1000 ease-in-out"
        style={{
          bottom: isHovered ? "auto" : "8px",
          top: isHovered ? "8px" : "auto",
          right: "8px",
          transform: isHovered ? "rotate(-90deg)" : "rotate(0deg)",
          transformOrigin: "center",
          clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
          background: "white",
        }}
      />

      {/* Button text */}
      <span className="relative z-10 tracking-wider">CONTACT US</span>
    </button>
  )
}
