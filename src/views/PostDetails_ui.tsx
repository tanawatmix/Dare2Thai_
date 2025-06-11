import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import bp from "./assets/bp.jpg"; // Background image
import wp from "./assets/wp.jpg"; // Background image

const PostDetailsUI = () => {
  const { state } = useLocation();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  if (!state) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="text-center text-gray-700 dark:text-gray-200">
            ไม่พบข้อมูลโพสต์
            <button
              onClick={() => navigate("/Posts")}
              className="block mx-auto mt-6 px-6 py-2 rounded bg-primary text-white hover:bg-accent dark:bg-secondary dark:hover:bg-primary"
            >
              กลับไปหน้ารายการโพสต์
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, Image, type, province, description } = state;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="relative bg-fixed bg-center bg-cover transition duration-500 flex-1"
        style={{
          backgroundImage: `url(${darkMode ? bp : wp})`,
        }}
      >
        <div className="max-w-2xl mx-auto bg-primary dark:bg-secondary border border-blue-400 dark:border-pink-400 p-8 rounded-2xl  mt-5">
          <img
            src={Image}
            alt={title}
            className="w-full h-72 object-contain rounded-xl shadow mb-6 border border-blue-400 dark:border-pink-400"
          />
          <h2 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">{title}</h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium dark:bg-blue-900 dark:text-blue-200">
              {type}
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium dark:bg-green-900 dark:text-green-200">
              {province}
            </span>
          </div>
          <p className="text-secondary dark:text-primary mb-8 leading-relaxed">{description}</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate(`/chat/${postId}`, { state: { title } })}
              className="w-full py-3 border border-blue-400 dark:border-pink-400 rounded-lg bg-primary dark:bg-secondary text-secondary font-semibold shadow hover:bg-accent dark:hover:bg-primary dark:hover:text-secondary dark:text-white transition"
            >
              พูดคุย
            </button>
            <button
              onClick={() => navigate("/Posts")}
              className="w-full py-3 border border-blue-400 dark:border-pink-400 rounded-lg bg-primary dark:bg-secondary text-secondary font-semibold shadow hover:bg-accent dark:hover:bg-primary dark:hover:text-secondary dark:text-white transition"
            >
              กลับไปหน้าก่อนหน้า
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailsUI;
