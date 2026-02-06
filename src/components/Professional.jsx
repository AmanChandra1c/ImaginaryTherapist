"use client";
import React, { useState } from "react";

const Professional = () => {
  const data = [
    {
      title: "Education",
      desc: "I hold a Doctorate in Clinical Psychology (PsyD), with advanced training focused on evidence-based approaches to support adults navigating anxiety, trauma, and emotional burnout.",
    },
    {
      title: "Licensure",
      desc: "I am a licensed clinical psychologist in the state of California, committed to ethical, professional, and client-centered care.",
    },
    {
      title: "Certifications",
      desc: "My training includes trauma-informed and cognitive-behavioral approaches, allowing therapy to be both compassionate and grounded in proven methods.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-foreground">
      <main className="container mx-auto px-4 sm:py-24 py-12 mt-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-center font-sans-serif">
          My Professional Background
        </h2>

        {/* Accordion wrapper */}
        <div className="mt-16 max-w-3xl mx-auto">
          {data.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`py-4 border-t ${
                  index === data.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-xl sm:text-2xl font-semibold opacity-95">
                    {item.title}
                  </span>
                  <PlusMinus isOpen={isOpen} />
                </button>

                {/* Content (NO overlap, smooth) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="sm:pl-20 sm:pr-30 overflow-hidden text-lg font-medium opacity-90 ">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Professional;

const PlusMinus = ({ isOpen }) => {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <span className="absolute w-6 h-px bg-current" />
      <span
        className={`absolute h-6 w-px bg-current transition-all duration-500 ease-in-out ${
          isOpen ? "rotate-270" : "rotate-0"
        }`}
      />
    </div>
  );
};
