import { useRef, useContext, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "../themeContext";
import bp from "./assets/bp.jpg"; // Background image
import wp from "./assets/wp.jpg"; // Background image


const images = [
  "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T123322.980.png",
  "https://www.scb.co.th/content/media/personal-banking/stories-tips/traveling-thailand/traveling-thailand5.jpg",
  "https://content.skyscnr.com/m/101c2e3b26827c4d/original/GettyImages-472699356.jpg?resize=1800px:1800px&quality=100",
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsUjIbmiEcqGTAplE6rsu5LmPq0IP7vZS8ASy5qvnYYde7wSEWD1QkN.jpg",
  "https://tonkit360.com/wp-content/uploads/2021/10/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A21-1024x683.jpg",
  "https://www.chillpainai.com/src/wewakeup/scoop/images/1acefd76e1d13a2933acc46dbbe611b9a0cd3b65.jpg",
  "https://www.kkday.com/th/blog/wp-content/uploads/colton-duke-pit2V7NJ_e4-unsplash.jpg",
  "https://www.chillpainai.com/src/wewakeup/scoop/images/d8d6d962a509bce12dbf32dcf9fa5aac716eaa05.jpg",
  "https://f.ptcdn.info/769/044/000/ob1ahrm9zPblJUdIXnV-o.jpg",
];

const HomeUI = () => {
  const { darkMode } = useContext(ThemeContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div
      className={`relative min-h-screen transition duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, ${
          darkMode ? "rgba(184, 70, 255, 0.5)" : "rgba(255, 144, 153, 0.5)"
        }, transparent 80%), url(${darkMode ? bp : wp})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="relative">
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          {/* Title */} 
          <h1
            className={`text-6xl font-extrabold mb-4 text-center mt-40 drop-shadow-lg transition duration-500 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent ${
              darkMode
                ? "from-blue-500 via-purple-300 to-pink-400"
                : "from-pink-500 via-pink-400 to-orange-300"
            }`}
          >
            Dare2Thai
          </h1>

          {/* Description */}
          <div
            className={`max-w-3xl backdrop-blur-sm rounded-xl shadow-xl bg-white/70 dark:bg-gray-900/70 p-8 mt-4 mb-8 transition duration-500`}
          >
            <p className="text-xl font-bold text-center mb-4">
              Dare2Thai
              เป็นแพลตฟอร์มที่เชื่อมโยงผู้คนที่รักการท่องเที่ยวและการสำรวจสถานที่ใหม่
              ๆ ในประเทศไทย
            </p>
            <p className="text-base text-center mb-4">
              เราเชื่อว่าการเดินทางไม่ใช่แค่การเปลี่ยนสถานที่
              แต่คือการเปิดมุมมองใหม่ ๆ ให้กับชีวิต
              ไม่ว่าคุณจะเป็นนักเดินทางสายลุย นักถ่ายภาพธรรมชาติ
              หรือผู้ที่หลงใหลในวัฒนธรรมท้องถิ่น ที่นี่คือพื้นที่สำหรับคุณ
              สำรวจเส้นทางลับ หมู่บ้านเล็ก ๆ ที่ยังไม่ถูกรุกล้ำด้วยนักท่องเที่ยว
              และสัมผัสวิถีชีวิตที่แท้จริงของผู้คน ค้นพบจุดหมายใหม่ ๆ
              ที่คุณอาจไม่เคยรู้ว่ามีอยู่บนแผนที่ของไทย
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => (window.location.href = "/Posts")}
                className={`text-sm font-bold py-3 px-8 rounded-full transition duration-300 mt-2 shadow-lg hover:scale-110 hover:shadow-xl ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-purple-700"
                    : "bg-pink-500 text-white hover:bg-orange-400"
                }`}
              >
                เริ่มต้นสำรวจ
              </button>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="w-full max-w-2xl mx-auto mt-10 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 dark:border-gray-800/60">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vCZNHfgpIwk?autoplay=1&"
              title="เที่ยวไทย"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Gallery */}
          <div className="w-full mt-16 relative max-w-7xl mx-auto">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-700/90 text-black dark:text-white rounded-full p-3 shadow-lg transition"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              ❮
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-700/90 text-black dark:text-white rounded-full p-3 shadow-lg transition"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              ❯
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 px-12 backdrop-blur-sm overflow-x-scroll scroll-smooth no-scrollbar py-4"
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`min-w-[260px] sm:min-w-[320px] h-[200px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer border-4 border-primary dark:border-accent bg-primary dark:bg-accent transition-transform hover:scale-105`}
                  onClick={() => {
                    const container = scrollRef.current;
                    const item = container?.children[index] as
                      | HTMLElement
                      | undefined;
                    if (container && item) {
                      const containerRect = container.getBoundingClientRect();
                      const itemRect = item.getBoundingClientRect();
                      const scrollLeft =
                        item.offsetLeft -
                        container.offsetLeft -
                        containerRect.width / 2 +
                        itemRect.width / 2;
                      container.scrollTo({
                        left: scrollLeft,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-95"
                  />
                </div>
              ))}
            </div>
            <style>
              {`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}
            </style>
          </div>

          {/* Thailand Summary */}
          <div
            className={`max-w-4xl backdrop-blur-sm rounded-xl shadow-xl bg-white/70 dark:bg-gray-900/70 p-8 mt-16 mb-20 transition duration-500`}
          >
            <h2
              className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent ${
                darkMode
                  ? "from-blue-500 via-purple-300 to-pink-400"
                  : "from-pink-500 via-pink-400 to-orange-300"
              }`}
            >
              สัมผัสเสน่ห์แบบประเทศไทย
            </h2>
            <p className="text-base text-center">
              ประเทศไทยถือเป็นหนึ่งในจุดหมายปลายทางยอดนิยมของนักท่องเที่ยวทั่วโลก
              ด้วยความหลากหลายทางวัฒนธรรม ธรรมชาติที่งดงาม
              และอาหารที่มีรสชาติอร่อยเลิศ
              ที่นี่คุณจะได้สัมผัสกับบรรยากาศที่อบอุ่นและเป็นมิตรจากคนไทยที่มีน้ำใจ
              หากคุณชื่นชอบทะเล ชายหาดที่สวยงามของภูเก็ต กระบี่
              และเกาะสมุยจะไม่ทำให้คุณผิดหวัง น้ำทะเลใสสีฟ้าคราม ทรายขาวละเอียด
              เหมาะแก่การพักผ่อนและทำกิจกรรมทางน้ำ
              สำหรับคนรักธรรมชาติและการผจญภัย
              เชียงใหม่และเชียงรายในภาคเหนือจะพาคุณไปพบกับขุนเขาสูง
              ป่าไม้เขียวขจี และวัฒนธรรมชนเผ่าที่น่าสนใจ
              อย่าพลาดการเยี่ยมชมวัดโบราณและตลาดกลางคืนที่เต็มไปด้วยของฝากพื้นเมือง
              ในกรุงเทพฯ เมืองหลวงที่เต็มไปด้วยความทันสมัยและวัฒนธรรมดั้งเดิม
              คุณจะได้ชมวัดพระแก้ว พระบรมมหาราชวัง และตลาดน้ำที่มีสีสัน
              รวมทั้งสถานที่ช้อปปิ้งและร้านอาหารหลากหลาย นอกจากนี้
              อย่าลืมลิ้มลองอาหารไทยที่ขึ้นชื่อ เช่น ต้มยำกุ้ง ผัดไทย
              แกงเขียวหวาน และส้มตำ ที่มีรสชาติจัดจ้านและสมดุลระหว่างเปรี้ยว
              หวาน เผ็ด และเค็ม ประเทศไทยมีเทศกาลและประเพณีที่น่าสนใจตลอดทั้งปี
              เช่น สงกรานต์ ลอยกระทง และงานวัฒนธรรมท้องถิ่น
              ที่จะทำให้คุณได้สัมผัสวิถีชีวิตและความเชื่อของคนไทยอย่างแท้จริง
              ไม่ว่าคุณจะมาเพื่อพักผ่อน ช้อปปิ้ง หรือเรียนรู้วัฒนธรรม
              ไทยก็มีทุกอย่างให้ครบครัน
              พร้อมบริการที่อบอุ่นและเป็นกันเองที่คุณจะประทับใจไม่รู้ลืม
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeUI;
