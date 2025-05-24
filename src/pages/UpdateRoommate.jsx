import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
  const roommate = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries());
    console.log(updatedRoommate);

    fetch(`http://localhost:3000/roommates/${roommate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Updated Roommate Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Update Roommate Listing
      </h2>

      <form onSubmit={handleUpdateCoffee} className="space-y-4">
        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={roommate.title}
            placeholder="Looking for a roommate in NYC"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={roommate.location}
            placeholder="City, Area"
            className="input input-bordered w-full"
          />
        </div>

        {/* Rent Amount */}
        <div>
          <label className="label">Rent Amount</label>
          <input
            type="number"
            name="rent"
            defaultValue={roommate.rent}
            placeholder="500"
            className="input input-bordered w-full"
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="label">Room Type</label>
          <select
            name="roomType"
            defaultValue={roommate.roomType}
            className="select select-bordered w-full"
          >
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Lifestyle Preferences */}
        <div>
          <label className="label">Lifestyle Preferences</label>
          <input
            type="text"
            name="lifestyle"
            defaultValue={roommate.lifestyle}
            placeholder="Pets, Smoking, Night Owl, etc."
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={roommate.description}
            placeholder="Write something about the place and roommates..."
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="label">Contact Info</label>
          <input
            type="text"
            name="contact"
            defaultValue={roommate.contact}
            placeholder="Phone number, Messenger, etc."
            className="input input-bordered w-full"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="label">Availability</label>
          <select
            name="available"
            defaultValue={roommate.available}
            className="select select-bordered w-full"
          >
            <option value="Yes">Available</option>
            <option value="No">Not Available</option>
          </select>
        </div>

        {/* User Email */}
        <div>
          <label className="label">User Email</label>
          <input
            type="email"
            name="email"
            defaultValue={roommate.email}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="label">User Name</label>
          <input
            type="text"
            name="userName"
            defaultValue={roommate.userName}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4">
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRoommate;
