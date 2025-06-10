import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./assets/bg2.jpg";
import { FaGoogle, FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [lang, setLang] = useState<"th" | "en">("th");

  const translations = {
    th: {
      title: "ลงทะเบียน",
      email: "อีเมล",
      password: "รหัสผ่าน",
      username: "ชื่อผู้ใช้",
      conpassword: "ยืนยันรหัสผ่าน",
      login: "ลงทะเบียน",
      haveAccount: "มีบัญชีแล้ว?",
      register: "เข้าสู่ระบบ",
      home: "หน้าแรก",
      success: "✅ เข้าสู่ระบบสำเร็จ!",
      fillAll: "กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน",
      enUserN: "กรอกชื่อผู้ใช้",
      enPass: "กรอกรหัสผ่าน",
      enMail: "กรอกอีเมล",
      enConPass: "ยืนยันรหัสผ่านของคุณ",
      RegisterGoo: "สมัครด้วย Google",
      RegisterFace: "สมัครด้วย Facebook",
      RegisterIns: "สมัครด้วย Instagram",
      RegisterTwit: "สมัครด้วย Twitter",
    },
    en: {
      title: "Register",
      email: "Email",
      password: "Password",
      username: "Username",
      conpassword: "ConfirmPassword",
      login: "Register",
      haveAccount: "already have an account?",
      register: "login",
      home: "Home",
      success: "✅ Login successful!",
      fillAll: "Please enter both email and password.",
      enUserN: "Enter your username",
      enPass: "Enter your password",
      enMail: "Enter your email",
      enConPass: "Confirm your password",
      RegisterGoo: "Register with Google",
      RegisterFace: "Register with Facebook",
      RegisterIns: "Register with Instagram",
      RegisterTwit: "Register with Twitter",
    },
  };

  const t = translations[lang];
  // const navigate = useNavigate();

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
        <div className="border-2 bg-white border-dashed border-blue-400 rounded-lg shadow-lg p-4 max-w-md w-full relative">
          <div className="absolute border-2 border-secondary rounded  hover:bg-secondary  top-2 right-4">
            <button
              className="text-sm text-blue-600 hover:bg-secondary hover:text-white py-1 px-5"
              onClick={() => setLang(lang === "th" ? "en" : "th")}
            >
              {lang === "th" ? "EN" : "ไทย"}
            </button>
          </div>
          <button
            className="bg-primary border border-blue-400 text-black px-4 py-2 rounded hover:bg-secondary hover:text-white mb-4 transition duration-300"
            onClick={() => (window.location.href = "/")}
          >
            {t.home}
          </button>
          <h3 className="text-2xl font-extrabold text-pink-500  ml-2 mb-6 text-center">
            {t.title}
          </h3>
          <div>
            <label htmlFor="email" className="block mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder={t.enMail}
            />

            <label htmlFor="UserName" className="block mb-2">
              {t.username}
            </label>
            <input
              type="UserName"
              id="UserName"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder={t.enUserN}
            />

            <label htmlFor="password" className="block mb-2">
              {t.password}
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder={t.enPass}
            />

            <label htmlFor="ConfirmPassword" className="block mb-2">
              {t.conpassword}
            </label>
            <input
              type="ConfirmPassword"
              id="ConfirmPassword"
              className="w-full p-3 border border-gray-300 rounded mb-2"
              placeholder={t.enConPass}
            />
          </div>

          <button
            className="bg-primary text-black border border-blue-400 font-bold p-3 rounded hover:bg-secondary hover:text-white w-full transition duration-300"
            onClick={handleRegister}
          >
            {t.login}
          </button>

          <p>
            {t.haveAccount}{" "}
            <span
              className=" font-extrabold text-pink-500  cursor-pointer hover:text-secondary "
              onClick={() => (window.location.href = "/login")}
            >
              {t.register}
            </span>
          </p>
            <div className="flex gap-4 mt-2 ">
              <button
                className="flex text-sm items-center justify-center border border-gray-300 rounded p-2 hover:bg-secondary hover:text-white transition duration-300"
                onClick={() => {
                  // TODO: Implement Google registration logic here
                  alert("Register with Google clicked");
                }}
                type="button"
              >
                <FaGoogle className="text-xl text-green-600 mr-2 " />
                {t.RegisterGoo}
              </button>
              <button
                className=" flex text-sm items-center justify-center border border-gray-300 rounded p-4 hover:bg-secondary hover:text-white transition duration-300"
                onClick={() => {
                  // TODO: Implement Facebook registration logic here
                  alert("Register with Facebook clicked");
                }}
                type="button"
              >
                <FaFacebook className="text-xl text-blue-600 mr-2" />
                {t.RegisterFace}
              </button>
            </div>
            <div className="flex gap-4 mt-1">
              <button
                className=" flex text-sm items-center justify-center border border-gray-300 rounded p-4 hover:bg-secondary hover:text-white transition duration-300"
                onClick={() => {
                  // TODO: Implement Google registration logic here
                  alert("Register with Instagram clicked");
                }}
                type="button"
              >
                <FaInstagram className="text-xl text-pink-600 mr-2" />
                {t.RegisterIns}
              </button>
              <button
                className=" flex text-sm items-center justify-center border border-gray-300 rounded p-4 hover:bg-secondary hover:text-white transition duration-300"
                onClick={() => {
                  // TODO: Implement Facebook registration logic here
                  alert("Register with Twitter clicked");
                }}
                type="button"
              >
                <FaTwitter className="text-xl text-blue-400 mr-2" />
                {t.RegisterTwit}
              </button>
            </div>
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
