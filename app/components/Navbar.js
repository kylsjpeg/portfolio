"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  // Example navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
  ];

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: pathname === item.href,
  }));

  return (
    <nav className="mt-5 w-full fixed z-10 flex justify-center">
      <div className="w-[300px] flex justify-center items-center h-16 bg-white text-[#0f0d0e] shadow-custom border-[5px] rounded-full border-[#231f20]">
        {/* Navigation Tabs */}
        <div className="hidden md:flex space-x-6">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-accent ${
                item.current ? "text-accent font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
