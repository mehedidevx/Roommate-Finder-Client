import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../assets/roommate-animation.json"; // তুমি চাইলে অন্য json ফাইলও ব্যবহার করতে পারো

const WhyChooseUs = () => {
  const features = [
    {
      title: "Compatibility Matching",
      description:
        "Our smart algorithm helps you find roommates based on lifestyle, habits, and interests.",
      bg: "bg-[#eecbcb]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#551e80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Location-Based Search",
      description:
        "Easily find roommates or rooms in your desired neighborhood or city.",
      bg: "bg-[#e5eecb]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#551e80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Verified Profiles",
      description:
        "We encourage profile verification to build a trustworthy community.",
      bg: "bg-[#cbe7ee]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#551e80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#551e80]">
      <div className="container mx-auto px-4">
        {/* Title with Typewriter */}
        <h2 className="text-4xl py-7  text-white font-bold text-center mb-4">
          <Typewriter
          
            words={['Why Choose RoommateFind?']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </h2>

      

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card ${feature.bg} shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl`}
            >
              <div className="card-body items-center text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl font-semibold mb-2 text-[#222]">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
        {/* Lottie Animation */}
        <div className="flex mt-20  justify-center mb-12">
          <div className="container mx-auto p-2   rounded-2xl ">
            <Lottie className="rounded-2xl" animationData={animationData} loop={true} />
          </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
