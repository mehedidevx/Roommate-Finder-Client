import { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AuthContext } from "../providers/AuthProvider";
import { FcAbout } from "react-icons/fc";
import {
  MdOutlineContactPage,
  MdOutlineContactSupport,
  MdOutlineDashboard,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#1a2a6c] shadow-md backdrop-blur-md">
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
            <li>
              <NavLink to="/aboutUs" className={navLinkClass}>
                <FcAbout /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                <MdOutlineContactPage /> Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className={navLinkClass}>
                <MdOutlineContactSupport /> Support Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end hidden md:flex gap-2 items-center">
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
            <div className="relative" ref={dropdownRef}>
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer border border-blue-400"
                title={user?.displayName || "Profile"}
              />
              {dropdownOpen && (
                <ul className="absolute right-0 bg-[#1f1b3a] text-white p-2 rounded-md mt-2 shadow-md min-w-[200px] z-50">
                  <li className="px-3 py-1 text-sm text-purple-300 border-b border-white/20">
                    {user?.displayName || "User"}
                  </li>
                  <li>
                    <NavLink
                      to="/my-profile"
                      className={navLinkClass}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <CgProfile /> My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={navLinkClass}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <MdOutlineDashboard /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1 rounded hover:text-red-400 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-2">
                        {" "}
                        <IoLogOutOutline /> Logout
                      </div>
                    </button>
                  </li>
                </ul>
              )}
            </div>
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f1b3a] px-4 pb-4 text-white space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <FiHome /> Home
          </NavLink>
          <NavLink
            to="/browse"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <FiSearch /> Browse
          </NavLink>
          <NavLink
            to="/aboutUs"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <FcAbout /> About Us
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            <MdOutlineContactPage /> Contact Us
          </NavLink>

          <NavLink to="/support" className={navLinkClass}>
            <MdOutlineContactSupport /> Support Us
          </NavLink>

          {user && (
            <>
              <div className="border-b border-white/20 pb-2">
                <p className="text-purple-300">👋 {user?.displayName}</p>
              </div>
              <NavLink
                to="/my-profile"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                👤 My Profile
              </NavLink>
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                📂 Dashboard
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block hover:text-red-400 px-2 py-1 rounded"
              >
                🚪 Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <FiLogIn /> Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <FiUserPlus /> Signup
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
