import { Image } from "antd";

function GDCard({ imageUrl }) {
  return (
    <div className="relative bg-[#fffce3] rounded-none border-4 border-[#0f0d0e] shadow-custom justify-center items-center h-full p-4 flex">
      <div className="flex justify-center items-center w-full">
        <Image
          src={imageUrl}
          alt="Image"
          width={250}
          height={250}
          unoptimized={true}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default GDCard;
