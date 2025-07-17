import Link from "next/link"
import { X, Linkedin, Youtube, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#000050] text-white py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1380px] mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-700">
          <Link href="#" className="text-base underline mb-4 md:mb-0">
            Contact Us
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link href="#" className="flex items-center space-x-1 text-sm underline">
              <X className="w-4 h-4" />
              <span>Twitter</span>
            </Link>
            <Link href="#" className="flex items-center space-x-1 text-sm underline">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link href="#" className="flex items-center space-x-1 text-sm underline">
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </Link>
            <Link href="#" className="flex items-center space-x-1 text-sm underline">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </Link>
          </div>
        </div>

        {/* Middle section */}
        <div className="pt-8 pb-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            <Link href="#" className="text-sm underline">
              US Patriot Act
            </Link>
            <Link href="#" className="text-sm underline">
              Community Reinvestment Act – Public File
            </Link>
            <Link href="#" className="text-sm underline">
              Notice of proposed acquisition
            </Link>
          </div>
          <div className="text-xs leading-relaxed space-y-1">
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-gray-700">
          <p className="text-xs mb-4 md:mb-0">
            © 2025{" "}
            <Link href="#" className="underline">
              Sas Corporation Bd
            </Link>{" "}
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="text-xs underline">
              Global Privacy Notice
            </Link>
            <Link href="#" className="text-xs underline">
              Cookie Settings
            </Link>
            <Link href="#" className="text-xs underline">
              Cookie Disclosure
            </Link>
            <Link href="#" className="text-xs underline">
              Legal
            </Link>
            <Link href="#" className="text-xs underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
