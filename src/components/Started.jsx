"use client";
import React from "react";

const Started = () => {
  return (
    <section className="w-full bg-[#7E7B46] ">
      <div className="container mx-auto px-6 sm:py-28 flex items-center justify-center text-secondary py-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 font-sans-serif">
            Get started today.
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-12">
            Taking the first step toward therapy can feel big, but you don’t
            have to figure it out alone. If you’re ready to explore support for
            anxiety, burnout, or trauma, I’m here to help.
            <br className="hidden sm:block" />
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
          <button className="border px-10 py-4 uppercase text-sm tracking-widest flex items-center gap-2 mx-auto hover:bg-background hover:text-[#8A8650] cursor-pointer transition-all duration-500 ease-in-out hover:shadow-sm hover:-translate-y-px max-sm:tracking-tight">
            Schedule a Free Consultation
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Started;
