// import { useState } from "react";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: ส่งข้อมูลไปเก็บหรือ API
//     console.log({ title, desc, image });
//     alert("โพสต์เรียบร้อย!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
//       <Navbar />

//       <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow-md">
//         <h2 className="text-xl font-semibold mb-4 text-center">สร้างโพสต์ใหม่</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="ชื่อร้าน/โพสต์"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded px-4 py-2"
//             required
//           />
//           <textarea
//             placeholder="รายละเอียด"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             className="w-full border rounded px-4 py-2"
//             rows={4}
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files?.[0] || null)}
//             className="w-full"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//           >
//             โพสต์
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CreatePost;
