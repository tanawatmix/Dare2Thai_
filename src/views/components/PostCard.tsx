import { useNavigate } from "react-router-dom";

interface PostCardProps {
  Image: string;
  title: string;
  type: string;
  province: string;
  postId: string; // เพิ่ม ID สำหรับใช้งาน
  description?: string; // เพิ่ม description ถ้าต้องการ
}

const PostCard = ({
  Image,
  title,
  type,
  province,
  postId,
  description,
}: PostCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${postId}`, {
      state: { title, Image, type, province, description },
    });
  };


  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white rounded shadow p-2 hover:shadow-lg transition"
    >
      <img
        src={Image}
        alt={title}
        className="w-full h-40 object-contain rounded"
      />
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {type} - {province}
      </p>
    </div>
  );
};

export default PostCard;
