const posts = [
  {
    title: "💻 Main Stack",
    // date: "Just Now",
    content: "Exploring the latest tech stacks for front-end development!",
    photos: [
      "/assets/techstack/tailwind.webp",
      "/assets/techstack/materialui.webp",
      "/assets/techstack/nextjs.webp",
      "/assets/techstack/reactjs.webp",
      "/assets/techstack/bootstrap.webp",
      "/assets/techstack/antd.webp",
    ],
  },
  {
    title: "🎨 Tools",
    // date: "Just Now",
    content: "These tools have been lifesavers for my projects.",
    photos: ["/assets/techstack/figma.webp", "/assets/techstack/mockplus.webp"],
  },
];

const Post = ({ post }) => {
  const photos = post.photos || []; // Fallback if no photos

  // Determine grid columns based on divisibility
  // let gridCols = "grid-cols-3"; // Default to 1 column
  // if (photos.length % 4 === 0) {
  //   gridCols = "grid-cols-3";
  // } else if (photos.length % 4 === 0) {
  //   gridCols = "grid-cols-2";
  // }

  return (
    <div className="bg-white p-4 rounded-none border-[#0f0d0e] border-4 mb-4">
      {/* User Info */}
      <div className="flex items-center">
        <div>
          <h2 className="font-krona w-full font-semibold p-2 bg-yellow-200">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mt-4">{post.content}</p>

      {/* Photos Section */}
      {photos.length > 0 && (
        <div className={`grid grid-cols-4 gap-2 mt-4`}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-[70px] object-contain"
              // className="w-full h-full object-cover rounded-none shadow-custom border-[#0f0d0e] border-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PostsList = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
