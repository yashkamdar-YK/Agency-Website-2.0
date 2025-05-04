"use client";
import { CollaborateSection } from "./sections/CollaborateSection";
import FAQSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import ServiceSection from "./sections/ServiceSection";
import TestimonialSection from "./sections/TestimonialSection";
import WhyusSection from "./sections/WhyusSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WhyusSection />
      <ProjectSection />
      <TestimonialSection />
      <FAQSection />
      <CollaborateSection />
    </>
  );
}
