import React, { useState } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";

import { FaPlus, FaSearch } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import postImage from "./assets/nay.jpg";
import postImage2 from "./assets/heejin.jpg";
import postImage3 from "./assets/twice1.png";

const PostPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  const postsPerPage = 12;

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const placeTypes = ["ร้านอาหาร", "สถานที่ท่องเที่ยว", "โรงแรม"];
  const provinces = [
    "กรุงเทพมหานคร",
    "กระบี่",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "เชียงราย",
    "เชียงใหม่",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พระนครศรีอยุธยา",
    "พะเยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แพร่",
    "พังงา",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "แม่ฮ่องสอน",
    "ยโสธร",
    "ยะลา",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุโขทัย",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "หนองคาย",
    "หนองบัวลำภู",
    "อ่างทอง",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "อุบลราชธานี",
  ];

  // ฟังก์ชันสุ่มค่าใน array
  function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const dummyPosts = Array.from({ length: 150 }).map((_, i) => ({
    postId: `post-${i}`,
    image: i % 3 === 0 ? postImage : i % 3 === 1 ? postImage2 : postImage3,
    title: `ร้านน่าชิม ${i + 1}`,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor o eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: getRandomItem(placeTypes),
    province: getRandomItem(provinces),
  }));

  // ✅ กรองโพสต์จาก dropdown
  const filteredPosts = dummyPosts.filter((post) => {
    return (
      (selectedType === "" || post.type === selectedType) &&
      (selectedProvince === "" || post.province === selectedProvince)
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = () => {
    // setCurrentPage(1); // รีเซ็ตไปหน้าที่ 1
    setIsDrawerOpen(false); // ปิด drawer
  };

  return (
    <div className="relative bg-fixed bg-cover min-h-screen bg-gradient-to-t from-pink-100 to-white">
      <Navbar />

      <div className="p-20">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 pt-8">
          <button
            onClick={() => alert("โพสต์")}
            className="flex items-center bg-primary text-black px-4 py-2 rounded mb-4 md:mb-0 hover:bg-secondary hover:text-white transition"
          >
            <FaPlus className="mr-3" />
            โพสต์
          </button>
          <FaSearch
            className="text-gray-700 cursor-pointer text-2xl"
            onClick={toggleDrawer(true)}
          />
        </div>
      </div>

      {/* ✅ Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-[320px] p-6 space-y-4 bg-white h-full overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ค้นหาร้าน</h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              ประเภทสถานที่
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">ทั้งหมด</option>
              {placeTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              จังหวัด
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">ทั้งหมด</option>
              {provinces.map((province, i) => (
                <option key={i} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded shadow"
          >
            ค้นหา
          </button>
          <button
            onClick={() => {
              setSelectedType("");
              setSelectedProvince("");
            }}
            className="text-sm underline text-pink-600 hover:text-pink-800"
          >
            ล้างตัวกรอง
          </button>
        </div>
      </Drawer>

      {/* ✅ โพสต์ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-8">
        {currentPosts.map((post) => (
          <PostCard
            key={post.postId}
            Image={post.image}
            title={post.title}
            type={post.type}
            province={post.province}
            postId={post.postId}
            description={post.description}
          />
        ))}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center pb-12 gap-2">
          {/* << ปุ่มย้อนกลับหน้าแรก */}
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(1)}
              className="px-2 py-1 border rounded hover:bg-pink-100"
            >
              {"<<"}
            </button>
          )}

          {/* < ปุ่มย้อนหน้า */}
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-2 py-1 border rounded hover:bg-pink-100"
            >
              {"<"}
            </button>
          )}

          {/* แสดงเฉพาะ 5 หน้า */}
          {Array.from({ length: 5 }, (_, i) => {
            const pageNumber = i + Math.max(1, currentPage - 2);
            if (pageNumber > totalPages) return null;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-4 py-2 rounded ${
                  currentPage === pageNumber
                    ? "bg-pink-500 text-white"
                    : "bg-white border border-gray-300"
                } hover:bg-pink-400 hover:text-white transition`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* > ปุ่มถัดไป */}
          {currentPage < totalPages && (
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-2 py-1 border rounded hover:bg-pink-100"
            >
              {">"}
            </button>
          )}

          {/* >> ปุ่มไปหน้าสุดท้าย */}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-2 py-1 border rounded hover:bg-pink-100"
            >
              {">>"}
            </button>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PostPage;
