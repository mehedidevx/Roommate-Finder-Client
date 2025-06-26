import { Link, useLoaderData } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyListings = () => {
   const initialRoommates = useLoaderData();
  const { user } = useContext(AuthContext); // ইউজারের ইমেইল পাওয়ার জন্য
  const [roommates, setRoommates] = useState(
    initialRoommates.filter(room => room.email === user?.email)
  );


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-lemon.vercel.app/roommates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Delete Successful");
              Swal.fire({
                title: "Deleted!",
                text: "Your Roommate Finder Post has been deleted.",
                icon: "success",
              });
              const remainingRoommates = roommates.filter(
                (rom) => rom._id !== _id
              );
              setRoommates(remainingRoommates);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#0f1d38]">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-150 text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
          My Listings
        </h1>
        <Link to="/add-listing">
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 transition-all text-sm cursor-pointer sm:text-base">
            ➕ Add New Listing
          </button>
        </Link>
      </div>

      {roommates.length === 0 ? (
        <div className="bg-[#1c1f3a] rounded-xl shadow-lg p-6 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4">
            You haven't created any listings yet.
          </h2>
          <p className="text-purple-200 mb-6 text-sm sm:text-base">
            Start by creating your first listing now!
          </p>
          <Link to="/add-listing">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 transition-all cursor-pointer text-sm sm:text-base">
              ➕ Create Your First Listing
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-purple-800">
          <table className="min-w-full table-auto bg-[#1c1f3a] text-left rounded-xl">
            <thead>
              <tr className="text-xs sm:text-sm text-purple-300 uppercase tracking-wider">
                <th className="p-2 sm:p-4">Title</th>
                <th className="p-2 hidden md:block sm:p-4">Location</th>
                <th className="p-2 sm:p-4">Rent</th>
                <th className="p-2 sm:p-4">Status</th>
                <th className="p-2 sm:p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roommates.map((room) => (
                <tr
                  key={room._id}
                  className="border-t border-purple-800 hover:bg-[#2a2e51] transition"
                >
                  <td className="p-2 sm:p-4 text-sm sm:text-base font-semibold">
                    {room.title}
                  </td>
                  <td className="p-2 sm:p-4 hidden md:block text-sm sm:text-base">
                    {room.location}
                  </td>
                  <td className="p-2 sm:p-4 text-sm sm:text-base">
                    ${room.rent}
                  </td>
                  <td className="p-2 sm:p-4 text-sm sm:text-base text-green-400">
                    Available
                  </td>
                  <td className="p-2 sm:p-4  flex flex-col  md:flex-row justify-center items-center  gap-1 md:gap-2 sm:gap-4 text-lg">
                    <Link className=" border-gray-600 border-2 p-1 rounded-full" to={`/roommateDetails/${room._id}`}>
                      <FaEye className="text-blue-400 cursor-pointer hover:scale-110 transition" />
                    </Link>
                    <Link className="border-gray-600 border-2 p-1 rounded-full" to={`/updateRoommate/${room._id}`}>
                      <FaEdit className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
                    </Link>
                    <button className="border-gray-600 border-2 p-1 rounded-full" onClick={() => handleDelete(room._id)}>
                      <FaTrash className="text-red-500 cursor-pointer hover:scale-110 transition" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default MyListings;
