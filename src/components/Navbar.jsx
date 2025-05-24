import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiLogIn,
  FiUserPlus,
  FiSun,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AuthContext } from "../providers/AuthProvider";
import { RiMenuFold2Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 px-2 py-1 rounded ${
      isActive
        ? "bg-white/20 text-purple-400"
        : "hover:bg-white/10 hover:text-purple-400"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-2 py-1 rounded ${
      isActive
        ? "bg-white/20 text-purple-400"
        : "hover:bg-white/10 hover:text-purple-400"
    }`;

  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]  shadow-md dark:bg-black">
      <div className="navbar container mx-auto text-white flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
              RoommateFind
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            <li>
              <NavLink to="/" className={navLinkClass}>
                <FiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse" className={navLinkClass}>
                <FiSearch /> Browse
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-listing" className={navLinkClass}>
                   <span className="font-semibold"> ➕ Add Listing</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myListing" className={navLinkClass}>
                    <span className="flex items-center justify-center gap-1 font-semibold">
                      {" "}
                      <RiMenuFold2Line /> My Listings
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="navbar-end hidden md:flex gap-2 items-center">
          <div>
            <label className="swap swap-rotate  items-center ">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off flex items-center justify-center h-7 w-7 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {!user ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 hover:text-blue-400"
              >
                <FiLogIn /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded text-white"
              >
                <FiUserPlus /> Signup
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-1 hover:text-red-400"
              >
                <FiLogOut /> Logout
              </button>
              <img
                onClick={() => navigate("/my-profile")}
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer border border-blue-400"
                title={user?.displayName || "Profile"}
              />
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f1b3a] px-4 pb-4 text-white space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <FiHome className="inline" /> Home
          </NavLink>
          <NavLink
            to="/browse"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <FiSearch className="inline" /> Browse
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-listing"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                ➕ Add Listing
              </NavLink>
              <NavLink
                to="/myListing"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                📂 My Listings
              </NavLink>
            </>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="block hover:text-yellow-400 px-2 py-1 rounded"
            title="Toggle Dark Mode"
          >
            <FiSun className="inline" /> Dark Mode
          </button>

          {!user ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <FiLogIn className="inline" /> Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <FiUserPlus className="inline" /> Signup
              </NavLink>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="block hover:text-red-400 px-2 py-1 rounded"
              >
                <FiLogOut className="inline" /> Logout
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/my-profile");
                }}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10"
              >
                <img
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer border border-blue-400"
                />
                <span>{user?.displayName || "Profile"}</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
