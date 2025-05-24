import React from "react";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our growing community today and take the first step towards<br />
          finding your ideal roommate or tenant.
        </p>
        
       <Link to="/signup"> <button className="btn btn-secondary btn-lg hover:bg-secondary-focus transition-colors duration-300">
          Create Your Profile Now
        </button></Link>
      </div>
    </section>
  );
};

export default CallToAction;