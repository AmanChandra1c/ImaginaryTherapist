import React from "react";

const LiveCalm = () => {
  return (
    <>
      <section className="w-full bg-foreground">
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
          <div className="relative px-6 sm:px-10 py-10 sm:py-24 flex flex-col justify-between order-2">
            <div className="max-w-xl ">
              <h2 className="text-4xl sm:text-6xl tracking-tight font-semibold max-sm:tracking-tighter font-sans-serif">
                Live with more calm and clarity.
              </h2>

              <div className="text-xl font-medium opacity-90 leading-7 mt-10 space-y-4">
                <p>
                  Life can feel overwhelming—especially when you’re managing
                  anxiety, burnout, or high expectations in both your personal
                  and professional life.
                </p>

                <p>
                  You don’t have to carry it alone. Therapy offers a supportive
                  space to slow down, understand what’s holding you back, and
                  begin creating meaningful, lasting change.
                </p>
              </div>
            </div>

            <div className="border-t border-black/30 sm:mt-16 pt-6 flex justify-center">
              <button className="text-sm font-semibold tracking-widest flex items-center gap-2 w-full justify-center py-3 uppercase cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out hover:shadow-sm hover:-translate-y-px max-sm:tracking-tight">
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
          <div className="order-1 w-full h-[45vh] sm:h-auto overflow-hidden sm:order-2">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/533577883/photo/sunbeams-breaking-through-pine-tree-forest-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=j6uovwET0ajX3BoQ_h38PFnbK_yMwD7e_bECGd54Qxo="
              alt="You are not alone"
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default LiveCalm;
