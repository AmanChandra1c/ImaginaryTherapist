import React from 'react';

const Office = () => {
  return (
    <>
      <section className="bg-background py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full h-72 sm:h-80 lg:h-96 rounded overflow-hidden">
              <img
                src="/office1.jpeg"
                alt="Therapy office interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl sm:text-4xl font-sans-serif font-semibold text-primary">
                A Calm, Welcoming Space
              </h2>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-primary/80">
                My Santa Monica office is designed to feel calm, private, and
                welcoming—so you can take a breath and settle in as soon as you
                arrive. The space is intentionally quiet and thoughtfully
                arranged to support focus, comfort, and a sense of ease during
                our sessions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 md:order-1 order-2">
              <h3 className="text-2xl sm:text-4xl font-heading text-primary font-semibold">
                Designed With Your Comfort in Mind
              </h3>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-primary/80">
                From soft natural light to comfortable seating, every detail of
                the office is meant to create a safe and supportive environment.
                Whether you’re attending sessions in person or through a hybrid
                approach, your comfort, privacy, and emotional safety are always
                a priority.
              </p>

              <p className="text-sm sm:text-base font-medium text-primary">
                 Santa Monica, California
              </p>
            </div>

            <div className="w-full h-72 sm:h-80 lg:h-96 rounded overflow-hidden md:order-2 order-1">
              <img
                src="/office2.jpeg"
                alt="Counseling office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Office;