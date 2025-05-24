import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#551e80]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12 ">Why Choose RoommateFind?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card bg-[#eecbcb] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body items-center text-center">
              <div className="text-primary mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title text-xl mb-2">Compatibility Matching</h3>
              <p className="text-base-content/70">
                Our smart algorithm helps you find roommates based on lifestyle, habits, and interests.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="card bg-[#e5eecb] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body items-center text-center">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="card-title text-xl mb-2">Location-Based Search</h3>
              <p className="text-base-content/70">
                Easily find roommates or rooms in your desired neighborhood or city.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="card bg-[#cbe7ee] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body items-center text-center">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="card-title text-xl mb-2">Verified Profiles</h3>
              <p className="text-base-content/70">
                We encourage profile verification to build a trustworthy community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;