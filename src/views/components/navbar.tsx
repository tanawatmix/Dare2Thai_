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

  const toggleMenu = () => setIsOpen((prev) => !prev);

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

  // Helper for nav buttons
  const NavButton = ({
    to,
    children,
    className = "",
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & { to: string }) => (
    <button
      onClick={() => (window.location.href = to)}
      className={`transition duration-300 font-bold px-2 py-1 rounded hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-200 ${
        darkMode
          ? "bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent"
          : "bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <nav className="border-b bg-primary dark:bg-secondary py-4 px-6 fixed w-full z-50 shadow transition duration-500">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => (window.location.href = "/home")}
        >
          <img src={logo} alt="logo" className="h-10 w-20 object-contain" />
          <span
            className={`ml-2 text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent select-none ${
              darkMode
                ? "bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400"
                : ""
            }`}
          >
            Dare2Thai
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavButton to="/Posts">{t("place")}</NavButton>
          <NavButton to="/home">{t("home")}</NavButton>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="font-bold text-red-500 hover:text-red-700 transition"
              >
                {t("logout")}
              </button>
              <NavButton to="/profile" className="flex items-center">
                <FiUser className="mr-1 text-xl text-secondary dark:text-white dark:text-primary" />
                {t("hello_user", { name: user?.username })}
              </NavButton>
            </>
          ) : (
            <>
              <NavButton to="/register">{t("register")}</NavButton>
              <NavButton to="/login">{t("login")}</NavButton>
            </>
          )}

          {/* Language Switch */}
            <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            value={i18n.language}
            className="border rounded px-2 py-1 text-black border-secondary dark:text-white dark:border-white dark:bg-secondary hover:text-secondary transition duration-300"
            >
            <option value="th">ภาษาไทย</option>
            <option value="en">ENGLISH</option>
            </select>
            
          {/* Dark Mode Toggle */}
          <label className="flex items-center cursor-pointer ml-2">
            <div className="relative">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className="block bg-accent dark:bg-accent w-12 h-6 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            <span className="ml-2 text-secondary dark:text-white text-sm">
              {darkMode ? "LightMode☀️" : "DarkMode🌙"}
            </span>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-secondary dark:text-white">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 bg-primary dark:bg-secondary rounded shadow p-4">
          <NavButton to="/Posts">{t("place")}</NavButton>
          <NavButton to="/home">{t("home")}</NavButton>
          {!isLoggedIn ? (
            <>
              <NavButton to="/register">{t("register")}</NavButton>
              <NavButton to="/login">{t("login")}</NavButton>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="font-bold text-red-500 hover:text-red-700 transition"
              >
                {t("logout")}
              </button>
              <NavButton
                to="/profile"
                className="flex items-center justify-center "
              >
                <FiUser className="mr-1 text-secondary dark:text-primary " />
                {t("hello_user", { name: user?.username })}
              </NavButton>
            </>
          )}

          <select
            onChange={(e) => changeLanguage(e.target.value as "en" | "th")}
            value={i18n.language}
            className="border rounded text-center px-2 py-1 text-black border-secondary dark:text-white dark:border-white dark:bg-secondary hover:text-secondary"
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
