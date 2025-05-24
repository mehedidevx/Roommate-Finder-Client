import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaBed } from "react-icons/fa";
import toast from "react-hot-toast";

const RoommateDetails = () => {
  const room = useLoaderData();
  const [interested, setInterested] = useState(false); // state for button and contact section
  const [count, setCount] = useState(room.interestedCount || 223);

  const images =
    room.images && room.images.length > 0
      ? room.images
      : ["https://i.postimg.cc/bwBW57Rg/steptodown-com571196.jpg"];

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-[#2A004F] to-[#3D006C] text-white rounded-2xl max-w-4xl mt-10 shadow-lg my-20">
      {/* Cover Image */}
      <div className="w-full rounded-t-2xl overflow-hidden mb-8">
        <img
          src={images[0]}
          alt={room.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Title and Poster */}
      <h1 className="text-4xl font-bold mb-2">{room.title}</h1>
      <p className="mb-6 text-sm text-white/70">
        Posted by:{" "}
        <span className="font-semibold">{room.name || "Demo User"}</span>
        <span className="ml-2 text-xs text-white/50">
          ({room.email || "email@example.com"})
        </span>
      </p>

      {/* Interested Count */}
      <p className="mb-8 text-white/70">
        {count} people are interested in this listing!
      </p>

      {/* More Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Room image ${idx + 2}`}
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-lg">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-pink-400 text-xl" />
          <span>{room.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaDollarSign className="text-green-400 text-xl" />
          <span>{room.rent} / month</span>
        </div>
        <div className="flex items-center gap-3">
          <FaBed className="text-blue-400 text-xl" />
          <span>{room.roomType}</span>
        </div>
        <div>
          <span className="font-semibold">Availability:</span>{" "}
          {room.availability || "Available Now"}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-white/80 leading-relaxed">
          {room.description || "No description available."}
        </p>
      </div>

      {/* Lifestyle Preferences */}
      {room.lifestylePreferences && room.lifestylePreferences.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lifestyle Preferences</h2>
          <ul className="list-disc list-inside space-y-1 text-white/90">
            {room.lifestylePreferences.map((pref, idx) => (
              <li key={idx}>{pref}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Interested Button */}
      <button
        onClick={() => {
          setInterested(true);
          setCount((prev) => prev + 1);
           toast.success("🎉 Congratulations! You're now marked as interested.");
        }}
        disabled={interested}
        className={`mt-10 w-full py-3 rounded-xl font-semibold transition 
    ${
      interested
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90"
    }
  `}
      >
        {interested ? "You're Interested!" : "I'm Interested!"}
      </button>

      {/* Contact Info */}
      {interested && (
        <div className="mt-10 p-6 bg-white/10 rounded-xl border border-white/20">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Contact Information
          </h2>
          <p className="text-lg text-white/90">Contact</p>
          <p className="text-white font-mono text-xl mb-2">{room.contact}</p>
          <p className="text-white/70 text-sm">
            Please be respectful and responsible when contacting the lister.
          </p>
        </div>
      )}
    </div>
  );
};

export default RoommateDetails;
