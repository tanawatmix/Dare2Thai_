import pic from "../views/assets/mimi.jpg";
import pic1 from "../views/assets/nay.jpg";
import pic2 from "../views/assets/twice1.png";


export type Post = {
    postId: number;
    images: string[];
    title: string;
    type: string;
    province: string;
    description: string;
};

const mockPosts: Post[] = [
    {
        postId: 1,
        images: [pic, pic1, pic2,pic1, pic2,pic1, pic2,],
        title: "ร้านอาหารน่านั่ง",
        type: "ร้านอาหาร",
        province: "กรุงเทพมหานคร",
        description: "บรรยากาศดี อาหารอร่อย",
    },
    {
        postId: 2,
        images: [pic1, pic2],
        title: "ภูเขาสวย",
        type: "สถานที่ท่องเที่ยว",
        province: "เชียงใหม่",
        description: "เหมาะกับการถ่ายรูป",
    },
    {
        postId: 3,
        images: [pic2, pic],
        title: "โรงแรมริมทะเล",
        type: "โรงแรม",
        province: "ภูเก็ต",
        description: "วิวสวยติดทะเล",
    },
    {
        postId: 4,
        images: [pic2, pic1],
        title: "คาเฟ่สุดชิค",
        type: "คาเฟ่",
        province: "กรุงเทพมหานคร",
        description: "กาแฟหอม อาหารว่างอร่อย",
    },
    {
        postId: 5,
        images: [pic, pic2],
        title: "สวนสาธารณะกลางเมือง",
        type: "สวนสาธารณะ",
        province: "กรุงเทพมหานคร",
        description: "เหมาะสำหรับพักผ่อนและออกกำลังกาย",
    },
    // ... ทำแบบเดียวกันกับโพสอื่นๆ
];

export default mockPosts;
