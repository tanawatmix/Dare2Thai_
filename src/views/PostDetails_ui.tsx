import { useLocation, useParams, useNavigate } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const PostDetailsUI = () => {
  const { state } = useLocation();
  const { postId } = useParams();
  const navigate = useNavigate();

  console.log("PostDetailsUI state:", state); // ตรวจสอบข้อมูลที่ได้รับ

  const { title, Image, type, province, description } = state;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-pink-50 p-20">
        {/* แสดงรายละเอียดโพสต์ */}
        <div className="w-auto h-auto mx-auto bg-white p-4 rounded shadow">
          <img
            src={Image}
            alt={title}
            className="w-full h-80 object-contain rounded"
          />
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <p className="text-gray-600 mt-2">
            {type} - {province}
          </p>
          <p>{description}</p> {/* ใช้ description ที่ destructure มา */}
          {/* ปุ่มไปหน้าแชท */}
          <button
            onClick={() => navigate(`/chat/${postId}`, { state: { title } })}
            className="mt-6 w-full bg-primary hover:bg-pink-600 text-black py-2 rounded"
          >
            พูดคุย
          </button>
          <button
            onClick={() => navigate("/member")}
            className="mt-2 w-full bg-primary hover:bg-pink-600 text-gray-800 py-2 rounded"
          >
            กลับไปหน้าก่อนหน้า
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailsUI;
