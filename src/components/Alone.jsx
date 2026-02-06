"use client";
import React from "react";

const Alone = () => {
  return (
    <section className="bg-hereground">
      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
        {/* Image */}
        <div className="w-full h-[45vh] sm:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/valeriia-miller.webp"
            alt="You are not alone"
          />
        </div>

        {/* Content */}
        <div className="relative px-6 sm:px-10 py-16 sm:py-24 flex flex-col justify-between">
          <div className="max-w-xl">
            {/* Heading */}
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-10 font-sans-serif">
              You don't have to do this all{" "}
              <span className="italic">alone.</span>
            </h2>

            {/* Intro */}
            <p className="text-lg sm:text-xl mb-8">
              If any of this feels familiar, support is available:
            </p>

            {/* Bullet list */}
            <ul className="space-y-4 text-lg sm:text-xl list-disc list-inside">
              <li>Constant worry, overthinking, or feeling on edge</li>
              <li>Feeling emotionally exhausted or burned out</li>
              <li>Difficulty focusing, resting, or slowing your mind</li>
              <li>Struggling with perfectionism or self-criticism</li>
              <li>Feeling disconnected from yourself or others</li>
            </ul>

            {/* Closing line */}
            <p className="text-lg sm:text-xl mt-10">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-black/30 mt-6 sm:mt-16 pt-6 flex justify-center">
            <button className="text-sm cursor-pointer font-semibold tracking-widest flex items-center justify-center py-3 gap-2 uppercase w-full hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out hover:shadow-sm hover:-translate-y-px max-sm:tracking-tight">
              Start Your Healing Journey
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
      </main>
    </section>
  );
};

export default Alone;
