import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Roommate Matching",
      desc: "Get perfectly matched with roommates based on preferences and lifestyle.",
    },
    {
      title: "Verified Listings",
      desc: "Browse through verified rooms and apartments to ensure safety and reliability.",
    },
    {
      title: "Secure Payments",
      desc: "Pay your rent securely through our platform without any hidden fees.",
    },
  ];

  return (
    <section className="py-12 bg-[#2f0a47]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#8e2de2] to-[#4a00e0] p-6 rounded-2xl shadow-lg text-white"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
