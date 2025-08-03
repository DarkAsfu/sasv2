import { Poppins, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/module/home/Navbar";
import Footer from "@/module/home/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sas Corporation Bd",
  description: "Sas Corporation Bd",
  verification: {
    google: "QtgV2dxHVCgkU1ClY3p9YVTEpM0r-0-DJ8K5J5ljwO4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      {/* ✅ Google Tag Manager (Script) */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TWQSH7D5');
        `}
      </Script>

      <body
        className={`${poppins.variable} ${libreBaskerville.variable} ${inter.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWQSH7D5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <div className="mt-14 md:mt-40">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
