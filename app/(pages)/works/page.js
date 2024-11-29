"use client";
import React from "react";
import { Tabs } from "antd";

import ProjectCard from "@/app/components/Card";
import GDCard from "@/app/components/GDCard";

const categories = {
  "UI/UX Design": [
    {
      title: "Company Website - Initial Proposal",
      webLink:
        "https://www.figma.com/proto/JrMU7RIJVXXXEk6M42kgP5/Kyla-Rozette?node-id=1-1343",
      description:
        "This initial design focuses on creating a professional, clean, and user-friendly experience to introduce the brand and its offerings effectively.",
      image: "/assets/uiux/company_website_v1.webp",
    },
    {
      title: "Dashboard",
      webLink:
        "https://www.figma.com/proto/JrMU7RIJVXXXEk6M42kgP5/Kyla-Rozette?node-id=7-9985",
      mobileLink:
        "https://www.figma.com/proto/JrMU7RIJVXXXEk6M42kgP5/Kyla-Rozette?node-id=7-9998",
      description:
        "An intuitive and streamlined dashboard design, empowering users with easy access to different modules at a glance, all within a clean and organized interface",
      image: "/assets/uiux/dashboard.webp",
    },
    {
      title: "Company Website - Final Design",
      webLink:
        "https://www.figma.com/proto/JrMU7RIJVXXXEk6M42kgP5/Kyla-Rozette?node-id=2-5113",
      description:
        "The final design incorporates refined visual elements, optimized user flows, and features that create a seamless experience. The website now serves as both a showcase and a tool to connect with the potential clients effectively.",
      image: "/assets/uiux/company_website_v2.webp",
    },
    {
      title: "Login Page",
      webLink:
        "https://www.figma.com/proto/JrMU7RIJVXXXEk6M42kgP5/Kyla-Rozette?node-id=2003-1681",
      description:
        "Simple, secure, and user-friendly login page design, offering a seamless entry point with clear call-to-actions and a modern, welcoming interface.",
      image: "/assets/uiux/login.webp",
    },
  ],
  "Web Development": [
    {
      title: "Employee Self Service",
      description:
        "An efficient and intuitive Employee Self-Service platform, providing seamless access to personal information, leave requests, and more, all within a user-friendly and secure environment.",
      image: "/assets/web_development/ess.webp",
    },
    {
      title: "Company Website",
      webLink: "https://www.commerceone.com.ph/",
      description:
        "The company website serves as both a showcase and a tool to connect with the potential clients effectively.",
      image: "/assets/web_development/company_website.webp",
    },
  ],
  "Graphic Design": [
    {
      image: "/assets/graphic/1.png",
    },
    {
      image: "/assets/graphic/2.png",
    },
    {
      image: "/assets/graphic/3.png",
    },
    {
      image: "/assets/graphic/4.png",
    },
    {
      image: "/assets/graphic/5.png",
    },
    {
      image: "/assets/graphic/6.png",
    },

    {
      image: "/assets/graphic/8.png",
    },
    {
      image: "/assets/graphic/9.png",
    },
    {
      image: "/assets/graphic/10.png",
    },
  ],
};

const Works = () => {
  const items = Object.entries(categories).map(
    ([category, projects], index) => ({
      key: index.toString(),
      label: category,
      children: (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {category === "Graphic Design"
            ? projects.map((project, i) => <GDCard imageUrl={project.image} />)
            : projects.map((project, i) => (
                <div key={i} className="flex flex-col">
                  <ProjectCard
                    imageUrl={project.image}
                    title={project.title}
                    description={project.description}
                    webLink={project.webLink}
                    mobileLink={project.mobileLink}
                  />
                </div>
              ))}
        </div>
      ),
    })
  );

  return (
    <div className="grid grid-cols-10 mt-[4%] h-[80vh] w-full overflow-hidden">
      {/* Text Section - 20% */}
      <div className="col-span-1 flex items-center justify-center">
        <h1
          className="text-[100px] font-bold rotate-90 text-[#f3c55a]"
          style={{
            textShadow: "8px 8px 0 #121212",
            WebkitTextStroke: "3px #121212",
          }}
        >
          works✨
        </h1>
      </div>

      {/* Tabs Section - 80% */}
      {/* <div className="col-span-9 h-[75vh] w-[99%] bg-[#e396c5] rounded-none p-4 border-4 border-[#0f0d0e] shadow-custom "> */}
      <div className="col-span-9 h-[75vh] w-[99%] bg-white p-4 border-4 border-[#0f0d0e] shadow-custom ">
        <Tabs defaultActiveKey="0" items={items} />
      </div>
    </div>
  );
};

export default Works;
