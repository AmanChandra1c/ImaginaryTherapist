"use client";
import React, { useState } from "react";

const FAQs = () => {
  const data = [
    {
      title: "Do you take insurance?",
      desc: "While I don’t accept insurance directly, I’m happy to support you with documentation so you can focus on therapy without added stress.",
    },
    {
      title: "What are your rates?",
      desc: "Session fees reflect the time, care, and personalized support that goes into creating a meaningful and effective therapy experience.",
    },
    {
      title: "Do you have any openings?",
      desc: "Openings are limited to ensure each client receives thoughtful, attentive care, so I encourage you to reach out to explore current availability.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 sm:py-32 bg-foreground">
      {/* Image */}
      <section className="w-full flex items-center justify-center sm:ml-6">
        <div className="sm:w-3/5 w-4/5 max-sm:mb-10 relative">
          <img
            className="rounded-t-full"
            src="https://plus.unsplash.com/premium_photo-1665990292452-4f9dbdc15eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRoZXJhcHklMjBzZXNzaW9ufGVufDB8MXwwfHx8MA%3D%3D"
            alt="FAQ visual"
          />
          <img
            className="absolute bottom-0 right-0 sm:translate-x-[30%] sm:translate-y-[40%] w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 object-cover object-bottom rounded-full"
            src="https://plus.unsplash.com/premium_photo-1664378617417-f317789ffc93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoZXJhcHklMjBzZXNzaW9ufGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full flex items-start justify-center flex-col">
        <div className="border-b sm:pb-18 pb-10 w-full">
          <h1 className="sm:text-5xl text-3xl font-semibold font-sans-serif">
            FAQs
          </h1>
        </div>

        <div className="w-full">
          {data.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b py-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex items-center gap-6">
                  <PlusMinus isOpen={isOpen} />
                  <h3 className="sm:text-4xl text-2xl font-medium">
                    {item.title}
                  </h3>
                </div>

                {/* Answer (smooth height animation) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-base sm:text-lg text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default FAQs;

const PlusMinus = ({ isOpen }) => {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center text-current">
      {/* Horizontal line */}
      <span className="absolute sm:w-8 w-6 h-px bg-current"></span>

      {/* Vertical line */}
      <span
        className={`absolute w-px sm:h-8 h-6 bg-current transition-all duration-500 ease-in-out ${
          isOpen ? "rotate-270" : "rotate-0"
        }`}
      ></span>
    </div>
  );
};
