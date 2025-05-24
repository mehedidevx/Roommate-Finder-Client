import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaBed } from "react-icons/fa";

const BrowseListings = () => {
  const roommates = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const images = [
    "https://i.postimg.cc/bwBW57Rg/steptodown-com571196.jpg",
    "https://i.postimg.cc/bNY5wyCL/steptodown-com231447.jpg",
    "https://i.postimg.cc/7ZGm5fg1/steptodown-com352528.jpg",
    "https://i.postimg.cc/3NB77Nxm/steptodown-com253798.jpg",
    "https://i.postimg.cc/jdxtcHMX/steptodown-com982481.jpg",
    "https://i.postimg.cc/X7s3zrh0/steptodown-com291031.jpg"
  ];

  const visibleRoommates = showAll ? roommates : roommates.slice(0, 6);

  return (
    <section className="py-12 bg-base-100 min-h-150">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse Listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {visibleRoommates.map((room, index) => (
            <div
              key={room._id}
              className="bg-gradient-to-b from-[#2A004F] to-[#3D006C] text-white p-4 rounded-2xl shadow-lg w-full"
            >
              <img
                src={images[index % images.length]}
                alt={room.title}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <div className="flex items-center text-sm mt-2 gap-1">
                <FaMapMarkerAlt className="text-pink-400" />
                <span>{room.location}</span>
              </div>
              <div className="flex items-center text-sm mt-1 gap-1">
                <FaDollarSign className="text-green-400" />
                <span>{room.rent} / month</span>
              </div>
              <div className="flex items-center text-sm mt-1 gap-1">
                <FaBed className="text-blue-400" />
                <span>{room.roomType}</span>
              </div>
             <Link to={`/roommateDetails/${room._id}`}>
              <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
                View Details
              </button>
             
             
             </Link>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && roommates.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseListings;
