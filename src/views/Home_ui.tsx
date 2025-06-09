import { useRef } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import bg from "./assets/bg2.jpg";

const images = [
  "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T123322.980.png",
  "https://www.scb.co.th/content/media/personal-banking/stories-tips/traveling-thailand/traveling-thailand5.jpg",
  "https://content.skyscnr.com/m/101c2e3b26827c4d/original/GettyImages-472699356.jpg?resize=1800px:1800px&quality=100",
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsUjIbmiEcqGTAplE6rsu5LmPq0IP7vZS8ASy5qvnYYde7wSEWD1QkN.jpg",
  "https://tonkit360.com/wp-content/uploads/2021/10/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A21-1024x683.jpg",
  "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T123322.980.png",
  "https://www.scb.co.th/content/media/personal-banking/stories-tips/traveling-thailand/traveling-thailand5.jpg",
  "https://content.skyscnr.com/m/101c2e3b26827c4d/original/GettyImages-472699356.jpg?resize=1800px:1800px&quality=100",
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsUjIbmiEcqGTAplE6rsu5LmPq0IP7vZS8ASy5qvnYYde7wSEWD1QkN.jpg",
];

const HomeUI = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -320 : 320; // ขยับทีละ 1 รูปแบบพอดี
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <div className="relative">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300 bg-clip-text text-transparent mb-4 text-center mt-40">
            Dare2Thai
            <p className="text-lg md:text-xl text-white mb-8 text-center max-w-3xl mt-10">
              Dare2Thai
              เป็นแพลตฟอร์มที่เชื่อมโยงผู้คนที่รักการท่องเที่ยวและการสำรวจสถานที่ใหม่
              ๆ
              แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อเป็นศูนย์กลางในการแบ่งปันประสบการณ์การเดินทาง
              แนะนำจุดหมายปลายทางที่น่าสนใจ แลกเปลี่ยนความคิดเห็น
              เคล็ดลับการเดินทาง
              และสร้างเครือข่ายระหว่างนักท่องเที่ยวทั้งมือใหม่และมืออาชีพ
              ผู้ใช้งานสามารถสร้างโปรไฟล์ แชร์รีวิว รูปภาพ และสร้างกิจกรรม
              หาเพื่อนใหม่ เข้าถึงได้ง่ายผ่านอินเตอร์เนต
                <button
                onClick={() => (window.location.href = "/member")}
                className="text-sm bg-pink-500 hover:bg-secondary text-white font-bold py-4 px-6 rounded transition duration-300 mt-4 shadow-lg"
                >
                เริ่มต้นสำรวจ
                </button>
            </p>
          </h1>

          {/* แกลเลอรีรูปภาพแบบเลื่อนพร้อมลูกศร */}
          <div className="w-full mt-12 relative max-w-7xl mx-auto ">
            {/* ปุ่มซ้าย */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black rounded-full p-3 shadow-lg"
              onClick={() => scroll("left")}
            >
              ❮
            </button>

            {/* ปุ่มขวา */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black rounded-full p-3 shadow-lg"
              onClick={() => scroll("right")}
            >
              ❯
            </button>

            {/* รูปภาพ */}
            <div
              ref={scrollRef}
              className="flex gap-4 px-8 overflow-x-scroll scroll-smooth no-scrollbar "
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[260px] sm:min-w-[300px] h-[180px] rounded-xl shadow-xl overflow-hidden bg-white cursor-pointer "
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
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-150  "
                  />
                  <style>
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
          <p className="py-20 text-white text-xl text-center font-bold shadow-lg px-20">
            ประเทศไทยถือเป็นหนึ่งในจุดหมายปลายทางยอดนิยมของนักท่องเที่ยวทั่วโลก
            ด้วยความหลากหลายทางวัฒนธรรม ธรรมชาติที่งดงาม
            และอาหารที่มีรสชาติอร่อยเลิศ
            ที่นี่คุณจะได้สัมผัสกับบรรยากาศที่อบอุ่นและเป็นมิตรจากคนไทยที่มีน้ำใจ
            หากคุณชื่นชอบทะเล ชายหาดที่สวยงามของภูเก็ต กระบี่
            และเกาะสมุยจะไม่ทำให้คุณผิดหวัง น้ำทะเลใสสีฟ้าคราม ทรายขาวละเอียด
            เหมาะแก่การพักผ่อนและทำกิจกรรมทางน้ำ สำหรับคนรักธรรมชาติและการผจญภัย
            เชียงใหม่และเชียงรายในภาคเหนือจะพาคุณไปพบกับขุนเขาสูง ป่าไม้เขียวขจี
            และวัฒนธรรมชนเผ่าที่น่าสนใจ
            อย่าพลาดการเยี่ยมชมวัดโบราณและตลาดกลางคืนที่เต็มไปด้วยของฝากพื้นเมือง
            ในกรุงเทพฯ เมืองหลวงที่เต็มไปด้วยความทันสมัยและวัฒนธรรมดั้งเดิม
            คุณจะได้ชมวัดพระแก้ว พระบรมมหาราชวัง และตลาดน้ำที่มีสีสัน
            รวมทั้งสถานที่ช้อปปิ้งและร้านอาหารหลากหลาย นอกจากนี้
            อย่าลืมลิ้มลองอาหารไทยที่ขึ้นชื่อ เช่น ต้มยำกุ้ง ผัดไทย แกงเขียวหวาน
            และส้มตำ ที่มีรสชาติจัดจ้านและสมดุลระหว่างเปรี้ยว หวาน เผ็ด และเค็ม
            ประเทศไทยมีเทศกาลและประเพณีที่น่าสนใจตลอดทั้งปี เช่น สงกรานต์
            ลอยกระทง และงานวัฒนธรรมท้องถิ่น
            ที่จะทำให้คุณได้สัมผัสวิถีชีวิตและความเชื่อของคนไทยอย่างแท้จริง
            ไม่ว่าคุณจะมาเพื่อพักผ่อน ช้อปปิ้ง หรือเรียนรู้วัฒนธรรม
            ไทยก็มีทุกอย่างให้ครบครัน
            พร้อมบริการที่อบอุ่นและเป็นกันเองที่คุณจะประทับใจไม่รู้ลืม
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeUI;
