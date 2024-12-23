import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 flex justify-between bg-gray-300 h-20 items-center px-5 shadow-md">
      {/* Search bar */}
      <div className="ml-10 relative group hidden sm:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 pl-10 pr-4 py-2 border-2 border-gray-500 rounded-full focus:outline-none"
        />
        <IoMdSearch
          className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 left-3"
        />
      </div>

      {/* Navigation links */}
      <div className="flex gap-6 text-gray-600 text-center mr-auto ml-72">
        <Link to="/" className="hover:text-primary cursor-pointer transition">Home</Link>
        <Link to="/about" className="hover:text-primary cursor-pointer transition">About</Link>
        <Link to="/travel" className="hover:text-primary cursor-pointer transition">Travel</Link>
        <Link to="/eat" className="hover:text-primary cursor-pointer transition">Eat</Link>
        <Link to="/relax" className="hover:text-primary cursor-pointer transition">Relax</Link>
        <Link to="/videos" className="hover:text-primary cursor-pointer transition">Videos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
