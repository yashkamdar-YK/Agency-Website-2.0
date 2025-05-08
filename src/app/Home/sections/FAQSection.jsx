"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Pixel Bloom",
      answer:
        "Pixel Bloom is an innovative AI solutions provider that helps businesses leverage artificial intelligence to optimize operations and drive growth.",
      isOpen: false,
    },
    {
      question: "What types of AI models do you offer?",
      answer:
        "We offer a wide range of AI solutions including language processing, predictive analytics, and custom AI solutions based on your specific requirements.",
      isOpen: true,
    },
    {
      question: "How can I benefit from Pixel Bloom's services?",
      answer:
        "Our AI models help you enhance your business operations, automate repetitive tasks, and provide valuable data-driven insights.",
      isOpen: false,
    },
    {
      question: "How do I get started with Pixel Bloom?",
      answer:
        "Getting started is easy. Simply contact our team for a consultation, and we'll guide you through the process of implementing AI solutions tailored to your needs.",
      isOpen: false,
    },
    {
      question: "Are your AI models customizable?",
      answer:
        "Yes, all our AI models can be customized to meet your specific business requirements and integrate seamlessly with your existing systems.",
      isOpen: false,
    },
    {
      question: "How is data privacy handled?",
      answer:
        "We take data privacy very seriously. All data is encrypted, stored securely, and processed in compliance with relevant data protection regulations.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <section className="w-full pb-16 lg:pb-[108px]">
      <div className="w-full h-[1px] bg-black "></div>
      <p className="uppercase font-bold text-xs pt-[2rem] pb-[1.75rem]">• W / 05</p>
      <div className="flex items-center justify-between text-xl font-bold pb-6">
        <h1 className="underline uppercase">FAQ</h1>
        <h2>0.5</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 border-2 border-zinc-600 h-fit rounded-[8px] cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-[500] text-[20px]">{faq.question}</h3>
              <button className="flex-shrink-0 ml-2">
                {faq.isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>
            {faq.isOpen && (
              <div className="mt-2  lg:w-[85%] text-[16px] text-gray-800">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
