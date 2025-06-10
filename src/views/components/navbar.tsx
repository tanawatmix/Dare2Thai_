import React, { useState, useEffect, useContext } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "./../assets/thai.png";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../themeContext";

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

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
    <nav className="border-b bg-primary dark:bg-secondary p-4 px-8 fixed w-full z-50 transition duration-500">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span
            className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent dark:text-white ml-2 cursor-pointer"
            onClick={() => (window.location.href = "/home")}
          >
            Dare2Thai
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => (window.location.href = "/member")}
            className="font-bold dark:text-primary dark:hover:text-pink-400 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary"
          >
            {t("place")}
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="font-bold dark:text-primary dark:hover:text-pink-400 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary"
          >
            {t("home")}
          </button>

          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="font-bold text-red-500  hover:text-red-700"
              >
                {t("logout")}
              </button>
              <button
                className="font-bold dark:text-primary dark:hover:text-pink-400 text-black hover:text-pink-400"
                onClick={() => (window.location.href = "/profile")}
              >
                <FiUser className="inline mr-1" />{" "}
                {t("hello_user", { name: user?.username })}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="font-bold dark:text-primary dark:hover:text-pink-400 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary"
              >
                {t("register")}
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="font-bold dark:text-primary dark:hover:text-pink-400 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary"
              >
                {t("login")}
              </button>
            </>
          )}

          {/* Language Switch */}
          <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            className="border rounded p-1 text-secondary mt-2 border-secondary dark:text-white dark:border-white dark:bg-secondary hover:text-secondary"
          >
            <option value="th">ภาษาไทย</option>
            <option value="en">ENGLISH</option>
          </select>
          <button
            onClick={toggleDarkMode}
            className="border border-secondary text-secondary dark:text-white dark:border-white dark:bg-secondary py-1 px-2 rounded transition duration-300 hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-black"
          >
            {darkMode ? "LightMode☀️" : "DarkMode🌙"}
          </button>
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
            className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
          >
            {t("place")}
          </button>
          <button
            onClick={() => (window.location.href = "/home")}
            className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
          >
            {t("home")}
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => (window.location.href = "/register")}
                className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
              >
                {t("register")}
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
              >
                {t("login")}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
              >
                {t("logout")}
              </button>
              <button
                onClick={() => (window.location.href = "/profile")}
                className="font-bold dark:text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent hover:text-secondary dark:hover:text-pink-400"
              >
                <FiUser className=" inline mr-1 Dark:text-white" />
                {t("hello_user", { name: user?.username })}
              </button>
            </>
          )}

          {/* Language Switch */}
          <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            className="border rounded p-1 text-black mt-2 border-secondary dark:text-white dark:border-white dark:bg-secondary hover:text-secondary"
            defaultValue={i18n.language}
          >
            <option value="th">ภาษาไทย</option>
            <option value="en">ENGLISH</option>
          </select>
          <button
            onClick={toggleDarkMode}
            className="border border-secondary text-black dark:text-white dark:border-white dark:bg-secondary py-1 px-2 rounded transition duration-300 hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-black"
          >
            {darkMode ? "LightMode☀️" : "DarkMode🌙"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
