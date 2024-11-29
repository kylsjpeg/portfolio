import ProfileHeader from "@/app/components/fb_old_ui/ProfileHeader";
import Sidebar from "@/app/components/fb_old_ui/Sidebar";
import Post from "@/app/components/fb_old_ui/Post";
import ContactsSidebar from "@/app/components/fb_old_ui/ContactsSidebar";

export default function AboutMe() {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 mt-[160px] px-4">
        {/* Left Sidebar */}
        <div className=" lg:col-span-3">
          <Sidebar />
        </div>
        {/* Main Feed */}
        <div className="lg:col-span-6 lg:mt-[-150px]">
          <Post />
        </div>
        {/* Right Sidebar */}
        <div className="lg:col-span-3 lg:mt-[-150px]">
          <ContactsSidebar />
        </div>
      </div>
    </div>
  );
}
