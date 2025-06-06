import React from "react";
import bg from "./assets/grass.jpg";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const Register_ui: React.FC = () => {
  return (
    <body>
      <div
        className="relative bg-fixed bg-cover min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <div
          className="min-h-screen  flex items-center justify-center px-4  "
        >
          <div className="ring-4 rounded-lg shadow-lg px-10 py-10 max-w-md w-full  ">
            <button
              className=" bg-primary text-black p-2 rounded  hover:bg-secondary hover:text-white "
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
            <h3 className="text-3xl font-bold mb-4 text-center text-blue-400">
              Register
            </h3>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded "
                placeholder="Enter your email"
              />
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                className="w-full p-3 border border-gray-300 rounded "
                placeholder="Enter your username"
              />
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded "
                placeholder="Enter your password"
              />
              <label htmlFor="ConPassword">ConfirmPassword</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded mb-4"
                placeholder="Enter your password"
              />
            </div>
            <button
              className=" bg-primary text-black p-4 rounded hover:bg-secondary hover:text-white w-full "
              onClick={() => (window.location.href = "/home")}
            >
              Register
            </button>

            <p>
              already have an account?
              <span
                className=" text-primary font-bold cursor-pointer hover:text-secondary "
                onClick={() => (window.location.href = "/login")}
              >
                {" Login "}
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default Register_ui;
