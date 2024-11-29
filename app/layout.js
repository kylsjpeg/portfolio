// import { Balsamiq_Sans } from "next/font/google";
import { Krona_One, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";

const krona = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Kyla Rozette ",
  description: "Kyla Rozette",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${krona.className} grid-background`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <main className="pt-16 mx-[10%]">{children}</main>
      </body>
    </html>
  );
}
