import Image from "next/image";
import SpinningTextCircle from "./Spinning";

const HomeSection = () => {
  return (
    <div className="grid mt-[2%] grid-cols-1 lg:grid-cols-2 items-center max-h-[90%] gap-8 align-middle ">
      {/* Left Side: Text */}
      <div className="text-left w-full space-y-4">
        {/* <div className="border-[#0f0d0e] p-8 border-2 bg-[#FFB3DE] shadow-custom">
          <h1 className="font-extrabold text-[6vh] text-[#121212] leading-none">
            HEY THERE!
          </h1>
        </div> */}
        <h1
          className={`font-krona text-[6vh] font-bold text-[#0f0d0e] text leading-normal`}
        >
          Hello, I am{" "}
          <span className="p-2 bg-yellow-200"> Kyla Rozette! 🌙✨ </span>
        </h1>
        <p className="mt-2  text-[3vh] font-krona">
          UI/UX Designer and Developer 🎨💻
        </p>
        <p className="text-[3vh] text-gray-600 leading-none">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        </p>
        <button className="bg-[#121212] text-white px-6 py-2  hover:bg-[#121212]">
          Get in Touch
        </button>
      </div>

      {/* Right Side: Spinning Photo */}

      <SpinningTextCircle />
    </div>
  );
};

export default HomeSection;
