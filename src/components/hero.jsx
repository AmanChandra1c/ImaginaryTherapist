"use client";

import Image from "next/image";

export default function TherapyLanding() {
  return (
    <main className="container mx-auto pt-10 flex items-center justify-center sm:pt-6 md:pt-8 lg:pt-12 max-sm:mb-20">
      <div className="max-w-7xl w-full mt-6 grid sm:grid-cols-2">
        <div className="w-full px-4 flex items-center justify-center ">
          <div className="rounded-t-full overflow-hidden sm:w-full">
            <img
              className="object-cover w-60 sm:w-full"
              src="https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFweSUyMG9mZmljZXxlbnwwfDF8MHx8fDA%3D"
              alt="office image"
            />
          </div>
        </div>
        <div className="sm:flex items-center sm:mt-44 flex-col">
          <div className="my-6 flex items-center flex-col">
            <h2 className="relative lg:text-7xl md:text-6xl text-4xl max-sm-leading-12 max-sm:tracking-tighter font-semibold font-sans-serif">
              Find calm
              <br />
              within chaose
              <svg
                className="absolute -bottom-6 left-0 w-full h-4 text-rose-300 opacity-60"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 7C50 3 150 1 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-center my-6 sm:text-xl text-lg max-sm:tracking-tight px-4 font-medium opacity-80">
              Helping adults navigate anxiety, trauma, burnout, and
              perfectionism with a warm, collaborative, and evidence-based
              approach.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="border sm:text-lg px-6 py-3 text-md font-medium flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out hover:shadow-sm hover:-translate-y-px max-sm:tracking-tight">
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
      </div>
    </main>
  );
}
