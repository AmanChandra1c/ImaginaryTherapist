import React from "react";

const MySpecialties = () => {
  const data = [
    {
      name: "Anxiety Therapy",
      desc: "Living with anxiety can feel exhausting and overwhelming—whether it shows up as constant worry, overthinking, or feeling on edge. In therapy, we’ll work together to understand your anxiety and develop practical tools to help you feel calmer, more grounded, and in control.",
      img: "https://plus.unsplash.com/premium_photo-1664378802738-b429e2403b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFueGlldHklMjB0aGVyYXB5fGVufDB8fDB8fHww",
    },
    {
      name: "Trauma & Emotional Healing",
      desc: "Past experiences can continue to affect how you feel, think, and relate to others. Using a trauma-informed, compassionate approach, I help adults process difficult experiences safely and at a pace that feels supportive—so healing can happen without feeling rushed or re-traumatizing.",
      img: "https://plus.unsplash.com/premium_photo-1663090894347-35d4ecc2c622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Burnout & Perfectionism",
      desc: "Burnout and perfectionism often go hand in hand, especially for high-achieving adults. Therapy can help you break free from constant pressure, set healthier boundaries, and reconnect with a sense of balance, self-compassion, and meaning in your work and life.",
      img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1c3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <>
      <main className="container mx-auto sm:mt-10 mb-20 pt-1 pb-10">
        <div className="sm:my-16 my-8">
          <h1 className="text-center text-3xl sm:text-5xl font-semibold font-sans-serif">
            My Specialties
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 px-3 sm:px-14">
          {data.map((item, ind) => (
            <div key={ind} className="border p-4 bg-muteground">
              <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
              <p className="tracking-tight font-medium my-6 sm:my-12 opacity-80">
                {item.desc}
              </p>
              <div className="flex items-center justify-center">
                <img
                  className="sm:w-90 sm:h-90 w-48 h-48 rounded-full object-cover object-top"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MySpecialties;
