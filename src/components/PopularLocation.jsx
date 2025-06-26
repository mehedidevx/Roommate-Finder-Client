{/* Popular Locations Section */}
<section className="py-12 bg-[#2b1040]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">
      Popular Locations
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Barishal"].map((city, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-[#5e1e93] to-[#321048] text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{city}</h3>
          <p className="text-sm">
            Find affordable roommates and shared apartments in {city}.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-12 bg-[#1e072f]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#3a1360] text-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
        <p className="text-sm">
          All roommates and apartments are verified to ensure your safety and comfort.
        </p>
      </div>
      <div className="bg-[#3a1360] text-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
        <p className="text-sm">
          We help you find the best deals for shared accommodations within your budget.
        </p>
      </div>
      <div className="bg-[#3a1360] text-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
        <p className="text-sm">
          Our support team is available anytime to assist with your roommate search.
        </p>
      </div>
    </div>
  </div>
</section>
