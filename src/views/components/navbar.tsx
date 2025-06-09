import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "./../assets/thai.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ username: string; role: string } | null>(
    null
  );

  JSON.stringify({
    id: "123",
    username: "somchai",
    email: "somchai@example.com",
    role: "USER", // อาจเป็น "USER", "OWNER", "ADMIN"
  });

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/home";
    // หรือใช้ reload ถ้าต้องการอัปเดตทุก state
    // window.location.reload();
  };

  return (
    <nav className="bg-primary p-4 px-8 shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span
            className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent ml-2 cursor-pointer"
            onClick={() => (window.location.href = "/home")}
          >
            Dare2Thai
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => (window.location.href = "/member")}
            className="font-bold text-black hover:text-pink-400"
          >
            สถานที่ท่องเที่ยว
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="font-bold text-black hover:text-pink-400"
          >
            Home
          </button>

          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="font-bold text-red-500 hover:text-red-700"
              >
                Logout
              </button>
              <button className="font-bold text-black hover:text-pink-400 pointer-cursor" onClick={() => (window.location.href = "/profile")}>
                สวัสดี, {user?.username}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="font-bold text-black hover:text-pink-400"
              >
                Register
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="font-bold text-black hover:text-pink-400"
              >
                Login
              </button>
            </>
          )}

          <button
            onClick={() => (window.location.href = "/profile")}
            className="font-bold text-black hover:text-pink-400 flex text-2xl border-2 rounded-full items-center border-black hover:border-pink-400 p-2"
          >
            <FiUser className="mr-1" />
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <button
            onClick={() => (window.location.href = "/member")}
            className="text-left font-bold text-black hover:text-pink-400"
          >
            สถานที่ท่องเที่ยว
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="text-left font-bold text-black hover:text-pink-400"
          >
            Home
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="text-left font-bold text-black hover:text-pink-400"
              >
                Register
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="text-left font-bold text-black hover:text-pink-400"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-left font-bold text-black hover:text-red-500"
            >
              Logout
            </button>
          )}

          <button
            onClick={() => (window.location.href = "/profile")}
            className="text-left font-bold text-black hover:text-pink-400 flex items-center"
          >
            <FiUser className="mr-1" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
