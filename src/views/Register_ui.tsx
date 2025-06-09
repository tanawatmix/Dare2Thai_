import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./assets/bg2.jpg";

const Login: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.href = "/login"; 
    }, 1000); // แสดง 2 วินาทีก่อนเปลี่ยนหน้า
  };

  return (
    <div
      className=" bg-fixed bg-cover min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
      
    > 

      <div className="relative  min-h-screen flex items-center justify-center px-4 ">
        <div className="border-2 bg-white border-dashed border-blue-400 rounded-lg shadow-lg p-10 max-w-md w-full">
          <button
            className="bg-primary border border-blue-400 text-black px-4 py-2 rounded hover:bg-secondary hover:text-white mb-4 transition"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
          <h3 className="text-2xl font-extrabold text-pink-500  ml-2 mb-6 text-center">
            Register
          </h3>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder="Enter your email"
            />

            <label htmlFor="UserName" className="block mb-2">
              UserName
            </label>
            <input
              type="UserName"
              id="UserName"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder="Enter your UserName"
            />

            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder="Enter your password"
            />

            <label htmlFor="ConfirmPassword" className="block mb-2">
              ConfirmPassword
            </label>
            <input
              type="ConfirmPassword"
              id="ConfirmPassword"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder="Enter your ConfirmPassword"
            />
          </div>

          <button
            className="bg-primary text-black border border-blue-400 font-bold p-3 rounded hover:bg-secondary hover:text-white w-full transition "
            onClick={handleRegister}
          >
            Register
          </button>

          <p>
            Already have an account?
            <span
              className=" font-extrabold text-pink-500  cursor-pointer hover:text-secondary "
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </span>
          </p>
        </div>

        {/* แจ้งเตือน Login สำเร็จ */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 10, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-10 bg-primary border-2 border-dashed border-black text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 font-bold px-6 py-3 rounded-lg shadow-lg text-center"
            >
              ✅ ลงทะเบียนสำเร็จ!
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "linear" }}
                className="h-1 bg-white mt-3 rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Login;
