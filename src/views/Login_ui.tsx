import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./assets/bg2.jpg";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lang, setLang] = useState<"th" | "en">("th");

  const translations = {
    th: {
      title: "เข้าสู่ระบบ",
      email: "อีเมล",
      password: "รหัสผ่าน",
      login: "เข้าสู่ระบบ",
      noAccount: "ยังไม่มีบัญชี?",
      register: "สมัครสมาชิก",
      home: "หน้าแรก",
      success: "✅ เข้าสู่ระบบสำเร็จ!",
      fillAll: "กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน",
    },
    en: {
      title: "Login",
      email: "Email",
      password: "Password",
      login: "Login",
      noAccount: "Don't have an account?",
      register: "Register",
      home: "Home",
      success: "✅ Login successful!",
      fillAll: "Please enter both email and password.",
    },
  };

  const t = translations[lang];
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert(t.fillAll);
      return;
    }else {
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 3000);
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "123",
        username: "somchai",
        email: email,
        role: "USER",
      })
    );
    setShowSuccess(true);
    setShowError(false);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/home");
    }, 1000);



  };

  return (
    <div
      className="bg-fixed bg-cover min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="border-2 bg-white border-dashed border-blue-400 rounded-lg shadow-lg p-10 max-w-md w-full relative">
          {/* ปุ่มเปลี่ยนภาษา */}
          <div className="absolute top-2 right-4 border-2 border-secondary rounded hover:bg-secondary hover:text-white ">
            <button
              className="text-sm text-blue-600 hover:bg-secondary hover:text-white py-1 px-5"
              onClick={() => setLang(lang === "th" ? "en" : "th")}
            >
              {lang === "th" ? "EN" : "ไทย"}
            </button>
          </div>

          {/* ปุ่มกลับหน้าแรก */}
          <button
            className="bg-primary border border-blue-400 text-black px-4 py-2 rounded hover:bg-secondary hover:text-white mb-4 transition"
            onClick={() => navigate("/")}
          >
            {t.home}
          </button>

          <h3 className="text-2xl font-extrabold text-pink-500 ml-2 mb-6 text-center">
            {t.title}
          </h3>

          <div>
            <label htmlFor="email" className="block mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="block mb-2">
              {t.password}
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded mb-6"
              placeholder={t.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-primary text-black font-bold p-3 border border-blue-400 rounded hover:bg-secondary hover:text-white w-full transition"
            onClick={handleLogin}
          >
            {t.login}
          </button>

          <p className="mt-4">
            {t.noAccount}
            <span
              className="font-extrabold text-pink-500 cursor-pointer hover:text-secondary transition ml-1"
              onClick={() => navigate("/register")}
            >
              {t.register}
            </span>
          </p>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-10 bg-primary border-2 border-dashed border-black text-white bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 font-bold px-6 py-3 rounded-lg shadow-lg text-center"
            >
              {t.success}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "linear" }}
                className="h-1 bg-white mt-3 rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-10 bg-red-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg text-center"
            >
              {t.fillAll}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
