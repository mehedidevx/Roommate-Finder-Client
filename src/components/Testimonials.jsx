import React from "react";

const Testimonials = () => {
  const feedback = [
    {
      message:
        "This platform helped me find the perfect roommate in Dhaka within a week!",
      name: "— Rahim Uddin",
    },
    {
      message:
        "Safe, reliable, and easy to use. Highly recommended for students!",
      name: "— Sumaiya Ahmed",
    },
    {
      message:
        "I was struggling to find a budget-friendly place. This site made it simple!",
      name: "— Tanvir Hasan",
    },
  ];

  return (
    <section className="py-12 bg-[#230636]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedback.map((item, index) => (
            <div
              key={index}
              className="bg-[#3f1270] text-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-sm mb-3">"{item.message}"</p>
              <h4 className="font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
