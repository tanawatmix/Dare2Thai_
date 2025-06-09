import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "./../assets/thai.png";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ username: string; role: string } | null>(
    null
  );
  const { t, i18n } = useTranslation();

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
  };

  const changeLanguage = (lng: "en" | "th") => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-primary p-4 px-8  shadow-md fixed w-full z-50">
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
            className="font-bold text-black hover:text-neutral"
          >
            {t("place")}
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="font-bold text-black hover:text-neutral"
          >
            {t("home")}
          </button>

          {isLoggedIn ? (
            <>
              <span className="text-black font-bold">
                {t("hello_user", { name: user?.username })}
              </span>
              <button
                onClick={handleLogout}
                className="font-bold text-red-500 hover:text-red-700"
              >
                {t("logout")}
              </button>
              <button
                className="font-bold text-black hover:text-pink-400"
                onClick={() => (window.location.href = "/profile")}
              >
                <FiUser className="inline mr-1" /> {t("profile")}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="font-bold text-black hover:text-neutral"
              >
                {t("register")}
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="font-bold text-black hover:text-neutral "
              >
                {t("login")}
              </button>
            </>
          )}

          {/* Language Switch */}
          <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            className="ml-4 border rounded p-1 text-black"
          >
            <option value="th">ภาษาไทย</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
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
            {t("place")}
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="text-left font-bold text-black hover:text-pink-400"
          >
            {t("home")}
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="text-left font-bold text-black hover:text-pink-400"
              >
                {t("register")}
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="text-left font-bold text-black hover:text-pink-400"
              >
                {t("login")}
              </button>
            </>
          ) : (
            <>
              <span className="text-black font-bold">
                {t("hello_user", { name: user?.username })}
              </span>
              <button
                onClick={handleLogout}
                className="text-left font-bold text-red-500 hover:text-red-700"
              >
                {t("logout")}
              </button>
              <button
                onClick={() => (window.location.href = "/profile")}
                className="text-left font-bold text-black hover:text-pink-400"
              >
                <FiUser className="inline mr-1" /> {t("profile")}
              </button>
            </>
          )}

          {/* Language Switch */}
          <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            className="border rounded p-1 text-black mt-2"
            defaultValue={i18n.language}
          >
            <option value="th">ภาษาไทย</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
