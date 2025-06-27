import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-12 bg-[#2a0640]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="bg-gradient-to-b from-[#6200a9] to-[#3a005f] p-8 rounded-2xl shadow-xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-4">
            Have questions or need assistance? We're here to help! Reach out to our team anytime.
          </p>
          <p className="mb-4">
            <strong>Email:</strong> support@roommatefinder.com
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +880-123-456789
          </p>
          <p>
            Our team is available from <strong>9 AM to 6 PM (GMT+6)</strong> every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
