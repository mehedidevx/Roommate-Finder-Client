import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FiHome, FiUser, FiPlusCircle, FiList, FiMenu, FiX } from "react-icons/fi";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
      isActive
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        : "hover:bg-white/10 hover:text-purple-400"
    }`;

  return (
    <div className="bg-[#0f0c29] min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 top-0 ${
          sidebarOpen ? "left-0" : "-left-64"
        } h-full w-64 bg-[#1f1b3a] text-white flex flex-col p-5 transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-6 md:justify-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          {/* Close button for mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink to="/" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
            <FiHome /> <span>Home</span>
          </NavLink>
          <NavLink to="/dashboard/add-listing" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
            <FiPlusCircle /> <span>Add Listing</span>
          </NavLink>
          <NavLink to="/dashboard/myListing" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
            <FiList /> <span>My Listings</span>
          </NavLink>
          <NavLink to="/dashboard/my-profile" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
            <FiUser /> <span>My Profile</span>
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} RoommateFind
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto w-full">
        {/* Top Navbar for mobile */}
        <div className="md:hidden mb-4">
          <button
            className="text-2xl text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
