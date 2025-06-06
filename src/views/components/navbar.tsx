import React, { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "./../assets/thai.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary   p-4 px-8 shadow-md fixed w-full  ">
      <div className="flex items-center justify-between b">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent ml-2">
            Dare2Thai
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => (window.location.href = "/member")} className="font-bold text-black hover:text-pink-400">สถานที่ท่องเที่ยว</button>
          <button onClick={() => (window.location.href = "/home")} className="font-bold text-black hover:text-pink-400">Home</button>
          <button onClick={() => (window.location.href = "/register")} className="font-bold text-black hover:text-pink-400">Register</button>
          <button onClick={() => (window.location.href = "/login")} className="font-bold text-black hover:text-pink-400">Login</button>
          <button onClick={() => (window.location.href = "/profile")} className="font-bold text-black hover:text-pink-400 flex text-xl items-center">
            <FiUser className="mr-1" /> 
          </button>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <button onClick={() => (window.location.href = "/member")} className="text-left font-bold text-black hover:text-pink-400">สถานที่ท่องเที่ยว</button>
          <button onClick={() => (window.location.href = "/home")} className="text-left font-bold text-black hover:text-pink-400">Home</button>
          <button onClick={() => (window.location.href = "/register")} className="text-left font-bold text-black hover:text-pink-400">Register</button>
          <button onClick={() => (window.location.href = "/login")} className="text-left font-bold text-black hover:text-pink-400">Login</button>
          <button onClick={() => (window.location.href = "/profile")} className="text-left font-bold text-black hover:text-pink-400 flex items-center">
            <FiUser className="mr-1" /> 
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
