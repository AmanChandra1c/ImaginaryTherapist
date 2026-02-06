import React from "react";

const Chat = () => {
  return (
    <>
      <section className="bg-foreground">
        <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-12">
          {/* Image Section - First on mobile, second on desktop */}
          <div className="order-1 lg:order-2 flex items-center justify-center p-6 lg:p-10">
            <div className="w-full max-w-md lg:w-[80%]">
              <img
                className="rounded-t-full w-full h-auto"
                src="/Dr. Maya Reynolds.png"
                alt=""
              />
            </div>
          </div>

          {/* Text Section - Second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 flex items-center mt-4 lg:mt-0 flex-col justify-center px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col w-full max-w-xl">
              <h2 className="relative text-start inline-block text-3xl font-sans-serif sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Hi, I’m Dr. Maya Reynolds, PsyD
              </h2>
              <p className="text-start my-6 text-lg sm:text-xl font-medium opacity-80 leading-relaxed">
                I work with adults who feel overwhelmed, stuck, or exhausted by
                the pressure of daily life. Using a compassionate,
                trauma-informed approach, I help clients navigate anxiety,
                process past experiences, and reconnect with a sense of balance
                and calm.
                <br /> <br />
                You don’t have to go through this alone. Therapy is a space to
                feel heard, supported, and gently guided toward growth.
              </p>
            </div>
            <div className="flex items-center justify-center w-full max-w-xl mt-8 lg:mt-20">
              <button className="border px-8 py-3 text-md font-medium flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out hover:shadow-sm hover:-translate-y-px max-sm:tracking-tight">
                Let's Chat
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
    </>
  );
};

export default Chat;
