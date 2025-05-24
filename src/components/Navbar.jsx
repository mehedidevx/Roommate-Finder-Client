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
      isActive ? "bg-white/20 text-purple-400" : "hover:bg-white/10 hover:text-purple-400"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-2 py-1 rounded ${
      isActive ? "bg-white/20 text-purple-400" : "hover:bg-white/10 hover:text-purple-400"
    }`;

  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-md">
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
                    ➕ Add Listing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myListing" className={navLinkClass}>
                    📂 My Listings
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="navbar-end hidden md:flex gap-2 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:text-yellow-400"
            title="Toggle Dark Mode"
          >
            <FiSun />
          </button>

          {!user ? (
            <>
              <Link to="/login" className="flex items-center gap-1 hover:text-blue-400">
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
              <button onClick={handleLogout} className="flex items-center gap-1 hover:text-red-400">
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
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl" aria-label="Toggle Menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f1b3a] px-4 pb-4 text-white space-y-3">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
            <FiHome className="inline" /> Home
          </NavLink>
          <NavLink to="/browse" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
            <FiSearch className="inline" /> Browse
          </NavLink>
          {user && (
            <>
              <NavLink to="/add-listing" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                ➕ Add Listing
              </NavLink>
              <NavLink to="/myListing" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
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
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                <FiLogIn className="inline" /> Login
              </NavLink>
              <NavLink to="/signup" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                <FiUserPlus className="inline" /> Signup
              </NavLink>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="block hover:text-red-400 px-2 py-1 rounded">
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
