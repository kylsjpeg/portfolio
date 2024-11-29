const ProfileHeader = () => {
  return (
    <div className="relative ">
      {/* Cover Photo */}
      <div className="relative w-full h-40 object-cover  rounded-none">
        {/* Profile Info (overlapping cover photo) */}
        <div className="absolute bottom-4 left-6 ml-[300px]">
          <h1 className="font-krona text-3xl font-bold">About Kyla 🍯🐝</h1>{" "}
          <h2 className="text-1xl ">
            {" "}
            24 | BS Information Technology - Specializing in Web and Mobile App
            Development
          </h2>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="absolute left-4 bottom-0 transform translate-y-1/2 rounded-lg">
        <img
          src="/assets/profile.webp"
          alt="Profile"
          className="w-[285px] h-[285px] border-4 border-[#0f0d0e] rounded-none object-cover shadow-custom"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
