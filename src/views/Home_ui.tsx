import { useRef, useContext } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "../themeContext";
// import bg from "./assets/bg2.jpg";


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

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      // py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent text-xl text-center font-bold px-20
      className={`relative bg-fixed bg-center min-h-screen bg-cover transition duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage:{
        'light-bg': "url(https://img.freepik.com/free-photo/empty-room-background-with-white-walls_23-2151020041.jpg?semt=ais_hybrid&w=740)",
        'dark-bg': "url('https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-waves_23-2150853543.jpg?semt=ais_hybrid&w=740')",
        }[darkMode ? 'dark-bg' : 'light-bg']
      }}
    >
      <Navbar />

      <div className="relative">
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <p className={`text-6xl font-extrabold transition duration-500  bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent mb-4 text-center mt-40
            ${darkMode ? "bg-gray-900 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent" : "bg-white text-black"}  `}>
            Dare2Thai
          </p>
          <p
            className={`transition duration-500 py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent text-xl text-center font-bold px-20
            ${darkMode ? "bg-gray-900 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent" : "bg-white text-black"}`}
          >
            Dare2Thai
            เป็นแพลตฟอร์มที่เชื่อมโยงผู้คนที่รักการท่องเที่ยวและการสำรวจสถานที่ใหม่
            ๆ ในประเทศไทย
            <br />
            <button
              onClick={() => (window.location.href = "/member")}className={`text-sm font-bold py-4 px-6 rounded transition duration-500 mt-4 shadow-lg
              ${darkMode ? "bg-gray-900 text-white" : "bg-pink-500 text-white hover:bg-secondary"}`}
            >
              เริ่มต้นสำรวจ
            </button>
          </p>

          {/* วิดีโอ YouTube */}
          <div className="w-full max-w-xl mx-auto mt-20 aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vCZNHfgpIwk?autoplay=1&mute=1"
              title="เที่ยวไทย"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* แกลเลอรี */}
          <div className="w-full mt-14 relative max-w-8xl mx-auto">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black dark:text-white rounded-full p-3 shadow-lg"
              onClick={() => scroll("left")}
            >
              ❮
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black dark:text-white rounded-full p-3 shadow-lg"
              onClick={() => scroll("right")}
            >
              ❯
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 px-8 overflow-x-scroll scroll-smooth no-scrollbar"
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`min-w-[260px] sm:min-w-[300px] h-[180px] rounded-xl shadow-xl overflow-hidden cursor-pointer ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
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
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-150"
                  />
                  <style>Add commentMore actions
                    {`
                  .no-scrollbar::-webkit-scrollbar {
                  display: none;
                  }
                  .no-scrollbar {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                  }
                `}
                  </style>
                </div>
              ))}
            </div>
          </div>

          {/* เนื้อหาสรุปประเทศไทย */}
          <h1
            className={`transition duration-500 py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent text-xl text-center font-bold px-20
            ${darkMode ? "bg-gray-900 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent" : "bg-white text-black"}`}
          >
            ประเทศไทยถือเป็นหนึ่งในจุดหมายปลายทางยอดนิยมของนักท่องเที่ยวทั่วโลก...
          </h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomeUI;
