import React from "react";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <section className="py-12 bg-[#2a0640]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Support
        </motion.h2>

        <motion.div
          className="bg-gradient-to-b from-[#6200a9] to-[#3a005f] p-8 rounded-2xl shadow-xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-4">
            Need help with using Roommate Finder? Our support team is always ready to assist you.
          </p>
          <p className="mb-4">
            Visit our <strong>FAQ section</strong> for quick answers or contact us directly for personalized support.
          </p>
          <p>
            <strong>Email Support:</strong> help@roommatefinder.com
          </p>
          <p>
            <strong>Live Chat:</strong> Available in the bottom-right corner from <strong>10 AM to 8 PM</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
