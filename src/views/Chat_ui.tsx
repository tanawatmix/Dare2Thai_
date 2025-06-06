import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import pic from "./assets/picture.png";
import send from "./assets/send.png";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

type Message = {
  type: "text" | "image";
  content: string;
};

const ChatUI = () => {
  const location = useLocation();
  const title = location.state?.title ?? "ไม่ทราบชื่อโพสต์";

  const { postId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "text", content: input }]);
      setInput("");
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMessages([...messages, { type: "image", content: imageUrl }]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col min-w-screen">
      <Navbar />

      <div className="flex-grow px-4 py-20 max-w-2xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">แชทสำหรับโพสต์: {title}</h1>

        <div className="bg-white rounded shadow h-96 overflow-y-auto p-4 mb-4">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">ยังไม่มีข้อความ</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="mb-2 text-right">
                {msg.type === "text" ? (
                  <div className="inline-block bg-pink-300 text-white px-3 py-1 rounded-lg">
                    {msg.content}
                  </div>
                ) : (
                  <div className="inline-block bg-pink-100 p-1 rounded-lg">
                    <img
                      src={msg.content}
                      alt="ส่งรูป"
                      className="max-w-xs max-h-48 rounded"
                    />
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={endOfMessagesRef} />
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="พิมพ์ข้อความ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-secondary"
          >
            <img src={send} alt="ส่ง" className="w-6 h-6" />
          </button>

          {/* ปุ่มเลือกรูป */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-secondary"
          >
            <img src={pic} alt="เลือกรูป" className="w-6 h-6 cursor-pointer" />
          </button>

          {/* input file แบบซ่อน */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageSelect}
            style={{ display: "none" }}
          />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-black py-2 rounded"
        >
          กลับ
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ChatUI;
