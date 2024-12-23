import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section: Logo and Dashboard */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <a href="/">MyLogo</a>
          </div>
          {/* Dashboard */}
          <a
            href="/dashboard"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Dashboard
          </a>
        </div>

        {/* Right Section: Sign In and Sign Up */}
        <div className="flex items-center space-x-4">
          <a
            href="/signin"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
