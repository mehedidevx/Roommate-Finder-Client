import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddListingForm = () => {
  const { user } = useContext(AuthContext);
  const { register } = useForm();

  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const roommateData = Object.fromEntries(formData);

    fetch("https://roommate-finder-server-lemon.vercel.app/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roommateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Roommate listing added successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Add Roommate Listing
        </h2>
        <form onSubmit={handleAddRoommate} className="space-y-5">
          {/* Form Group */}
          {[
            {
              label: "Title",
              name: "title",
              placeholder: "Looking for a roommate in NYC",
              type: "text",
              registerName: "title",
            },
            {
              label: "Location",
              name: "location",
              placeholder: "City, Area",
              type: "text",
              registerName: "location",
            },
            {
              label: "Rent Amount",
              name: "rentAmount",
              placeholder: "500",
              type: "number",
              registerName: "rent",
            },
            {
              label: "Lifestyle Preferences",
              name: "preferences",
              placeholder: "Pets, Smoking, Night Owl, etc.",
              type: "text",
              registerName: "lifestyle",
            },
            {
              label: "Contact Info",
              name: "contactInfo",
              placeholder: "Phone number, Messenger, etc.",
              type: "text",
              registerName: "contact",
            },
          ].map(({ label, name, placeholder, type, registerName }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                {...register(registerName, { required: true })}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Type
            </label>
            <select
              name="roomType"
              {...register("roomType")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              name="availability"
              {...register("available")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Yes">Available</option>
              <option value="No">Not Available</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              {...register("description")}
              placeholder="Write something about the place and roommates..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
          </div>

          {/* Read-only fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              Add Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingForm;
