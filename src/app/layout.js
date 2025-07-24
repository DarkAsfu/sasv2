import { Poppins, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/module/home/Navbar";
import Footer from "@/module/home/Footer";

// Configure Poppins (sans-serif)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Configure Libre Baskerville (serif - similar to Labantiqua)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Sas Corporation Bd",
  description: "Sas Corporation Bd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${libreBaskerville.variable} ${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}