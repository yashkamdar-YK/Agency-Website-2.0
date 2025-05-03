"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      isOpen: true,
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
    <section className="w-full lg:h-screen py-16 px-4 lg:px-13">
      <div className="mb-2">
        <span className="text-sm font-medium flex items-center gap-2">
          <span className="inline-block w-4 h-0.5 bg-black"></span> FAQ
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl mb-4 md:mb-0">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="text-sm">Still have a question in mind?</p>
          <Button
            variant="default"
            className="bg-black text-white rounded-full px-4 py-2 h-auto flex items-center gap-2"
          >
            <MessageSquare size={16} />
            Contact Us
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 border-2 border-zinc-600 rounded-[8px] shadow-md cursor-pointer"
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
