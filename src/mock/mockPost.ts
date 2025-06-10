import pic from "../views/assets/Twice.png";
import pic1 from "../views/assets/nay.jpg";
import pic2 from "../views/assets/heejin.jpg";

export type Post = {
    postId: number;
    image: string;
    title: string;
    type: string;
    province: string;
    description: string;
};

const mockPosts: Post[] = [
    {
        postId: 1,
        image: pic,
        title: "ร้านอาหารน่านั่ง",
        type: "ร้านอาหาร",
        province: "กรุงเทพมหานคร",
        description: "บรรยากาศดี อาหารอร่อย",
    },
    {
        postId: 2,
        image: pic1,
        title: "ภูเขาสวย",
        type: "สถานที่ท่องเที่ยว",
        province: "เชียงใหม่",
        description: "เหมาะกับการถ่ายรูป",
    },
    {
        postId: 3,
        image: pic2,
        title: "โรงแรมริมทะเล",
        type: "โรงแรม",
        province: "ภูเก็ต",
        description: "วิวสวยติดทะเล",
    },
    {
        postId: 4,
        image: pic2,
        title: "คาเฟ่สุดชิค",
        type: "คาเฟ่",
        province: "กรุงเทพมหานคร",
        description: "กาแฟหอม อาหารว่างอร่อย",
    },
    {
        postId: 5,
        image: pic, 
        title: "สวนสาธารณะกลางเมือง",
        type: "สวนสาธารณะ",
        province: "กรุงเทพมหานคร",
        description: "เหมาะสำหรับพักผ่อนและออกกำลังกาย",
    },
    {
        postId: 6,
        image: pic,
        title: "ร้านอาหารน่านั่ง",
        type: "ร้านอาหาร",
        province: "กรุงเทพมหานคร",
        description: "บรรยากาศดี อาหารอร่อย",
    },
    {
        postId: 7,
        image: pic1,
        title: "ภูเขาสวย",
        type: "สถานที่ท่องเที่ยว",
        province: "เชียงใหม่",
        description: "เหมาะกับการถ่ายรูป",
    },
    {
        postId: 8,
        image: pic2,
        title: "โรงแรมริมทะเล",
        type: "โรงแรม",
        province: "ภูเก็ต",
        description: "วิวสวยติดทะเล",
    },
    {
        postId: 9,
        image: pic2,
        title: "คาเฟ่สุดชิค",
        type: "คาเฟ่",
        province: "กรุงเทพมหานคร",
        description: "กาแฟหอม อาหารว่างอร่อย",
    },
    {
        postId: 10,
        image: pic,
        title: "สวนสาธารณะกลางเมือง",
        type: "สวนสาธารณะ",
        province: "กรุงเทพมหานคร",
        description: "เหมาะสำหรับพักผ่อนและออกกำลังกาย",
    },
    {
        postId: 11,
        image: pic1,
        title: "ร้านอาหารริมทะเล",
        type: "ร้านอาหาร",
        province: "ชลบุรี",
        description: "อาหารทะเลสดใหม่ วิวทะเลสวย",
    },
    {
        postId: 12,
        image: pic2,
        title: "พิพิธภัณฑ์ศิลปะ",
        type: "พิพิธภัณฑ์",
        province: "กรุงเทพมหานคร",
        description: "งานศิลปะหลากหลายรูปแบบ",
    },
    {
        postId: 13,
        image: pic,
        title: "ตลาดนัดสุดฮิป",
        type: "ตลาดนัด",
        province: "กรุงเทพมหานคร",
        description: "ของกินและของใช้มากมาย",
    },
    {
        postId: 14,
        image: pic1,
        title: "สวนสัตว์เปิด",
        type: "สวนสัตว์",
        province: "เชียงใหม่",
        description: "สัตว์น่ารักมากมายให้ชม",
    },
    {
        postId: 15,
        image: pic2,
        title: "โรงแรมหรูใจกลางเมือง",
        type: "โรงแรม",
        province: "กรุงเทพมหานคร",
        description: "บริการระดับพรีเมียม วิวเมืองสวยงาม",
    },
   
    // ... (rest of your posts, unchanged)
];

export default mockPosts;
