const Sidebar = () => {
  return (
    <div className="bg-white p-4 rounded-none border-[#0f0d0e] border-4">
      {/* Intro Section */}
      <div className="mb-6">
        <h2 className="font-krona text-lg font-bold mb-2 p-2 bg-yellow-200">
          👧 Intro
        </h2>
        <p className="mt-6 text-[12px] font-bold">Roles</p>
        <p>🎨 UI/UX Designer</p>
        <p>💻 UI Developer</p>
        <p className="mt-6 text-[12px] font-bold">Location</p>
        <p>📍 Manila, Philippines</p>
      </div>
      {/* Photos Section */}
      {/* <div>
        <h2 className="text-lg font-bold mb-2">Photos</h2>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/100?text=Photo+${i + 1}`}
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover rounded"
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
