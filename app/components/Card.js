import Image from "next/image";

function ProjectCard({ title, description, mobileLink, webLink, imageUrl }) {
  return (
    <div className="relative bg-[#fffce3] rounded-none border-4 border-[#0f0d0e] shadow-custom flex flex-col justify-between h-full p-4">
      <div>
        <Image
          src={imageUrl}
          alt="Image"
          width={250}
          height={250}
          unoptimized={true}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <h3 className="font-krona text-xl font-bold mt-2">{title}</h3>
          <p className="text-gray mt-1">{description}</p>
        </div>

        {/* Conditionally render the buttons */}
        <div className="space-x-2 mt-4">
          {webLink && (
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#121212] px-4 py-1 rounded-sm hover:bg-[#121212] hover:text-white"
            >
              View Web
            </a>
          )}
          {mobileLink && (
            <a
              href={mobileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#121212] px-4 py-1 rounded-sm hover:bg-[#121212] hover:text-white"
            >
              View Mobile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
