import { useState, useEffect } from "react";
import Image from "next/image";

export default function SpinningTextCircle() {
  const [hasLoaded, setHasLoaded] = useState(false);

  // Trigger the "loaded" state after the initial load
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 1000); // 1s matches the animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="group relative w-full h-[80vh] mx-auto flex items-center justify-center overflow-hidden">
      {/* Spinning SVG Text */}
      <svg
        className={`absolute ${
          hasLoaded
            ? "group-hover:animate-spin-slow" // Slow spin on hover after load
            : "animate-spin-once-fast" // Fast spin on load
        }`}
        width="120%"
        height="120%"
        viewBox="0 0 200 200" // Keep it square for the circle to stay round
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="#0f0d0e" fontSize="8" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0%">
            · Responsive · Clean · Dynamic · User Friendly · Minimal · Cohesive
            · Intuitive · Functional · Innovative · Efficient · Fun
          </textPath>
        </text>
      </svg>

      {/* Center Image */}
      <div className="absolute w-[60vh] h-[60vh] rounded-full overflow-hidden">
        <Image
          src="/assets/logo.webp"
          alt="Profile"
          width={1000}
          height={1000}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
