import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">playPals</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/register" className="hover:text-gray-200">Register</Link>
          <Link to="/verify-otp" className="hover:text-gray-200">Verify OTP</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" /> // Close icon
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <Link to="/register" className="block hover:text-gray-200">Register</Link>
          <Link to="/verify-otp" className="block hover:text-gray-200">Verify OTP</Link>
          <Link to="/login" className="block hover:text-gray-200">Login</Link>
          <Link to="/dashboard" className="block hover:text-gray-200">Dashboard</Link>
        </div>
      )}
    </nav>
  );
}
