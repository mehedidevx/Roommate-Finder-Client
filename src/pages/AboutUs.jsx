import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-[#2a0640]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          About Us
        </h2>
        <div className="bg-gradient-to-b from-[#6200a9] to-[#3a005f] p-8 rounded-2xl shadow-xl text-white">
          <p className="mb-4">
            <strong>Roommate Finder</strong> is a community-driven platform that helps people find the perfect roommate quickly and securely. Whether you are a student, a job holder, or someone moving to a new city, our goal is to make your search for shared accommodation hassle-free.
          </p>
          <p className="mb-4">
            We believe that finding a compatible roommate shouldn't be stressful. Our platform offers verified listings, secure communication, and tools to connect people with similar interests and living preferences.
          </p>
          <p>
            Built with ❤️ using modern technologies like React.js, Firebase, and Tailwind CSS, our mission is to create a safe, reliable, and user-friendly space for those seeking shared living arrangements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
