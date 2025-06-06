import React from "react";
import bg from "./assets/grass.jpg";

import Navbar from "./components/navbar";

const Login: React.FC = () => {
  return (
    <div
      className="relative bg-fixed bg-cover min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="ring-4 rounded-lg shadow-lg p-10 max-w-md w-full  ">
          <button
            className="bg-primary text-black px-4 py-2 rounded hover:bg-secondary hover:text-white mb-4"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
          <h3 className=" text-3xl font-bold text-center text-blue-400 mb-6">
            Login
          </h3>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded mb-6"
              placeholder="Enter your password"
            />
          </div>

          <button
            className=" bg-primary text-black font-bold p-3 rounded hover:bg-secondary hover:text-white w-full mb-4"
            onClick={() => (window.location.href = "/home")}
          >
            Login
          </button>

          <p className="text-center">
            Don't have an account?
            <span
              className="text-primary font-bold cursor-pointer hover:text-secondary ml-1"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const login_ui = () => {
//   return (
//     <div>
//       <h4 className="text-6xl font-extrabold  text-accent bottom-0 left-0">HOME</h4>
//       di
//     </div>
//   )
// }

// export default login_ui
