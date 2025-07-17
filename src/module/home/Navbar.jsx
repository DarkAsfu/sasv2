"use client"

import { ChevronDown, Search, Menu, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null)
  const navbarRef = useRef(null)
  const [dropdownTop, setDropdownTop] = useState("0px")

  useEffect(() => {
    if (navbarRef.current) {
      const navElement = navbarRef.current.querySelector("nav")
      if (navElement) {
        const navRect = navElement.getBoundingClientRect()
        const navbarRect = navbarRef.current.getBoundingClientRect()
        setDropdownTop(`${navRect.bottom - navbarRect.top}px`)
      }
    }
  }, [activeDropdown])

  const handleMouseEnter = (menu) => setActiveDropdown(menu)
  const handleMouseLeave = () => setActiveDropdown(null)

  const toggleMobileDropdown = (menu) => {
    setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu)
  }

  return (
    <div className="w-full bg-white relative" ref={navbarRef}>
      <div className="pt-4">
        {/* Logo and Main Header */}
        <div className="flex max-w-[1380px] mx-auto items-center mb-2 gap-2 px-4">
          <Image src="/sas_logo.png" width={250} height={100} alt="sas_logo" />
          {/* Hamburger Menu for Mobile */}
          <div className="ml-auto md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <Menu className="mt-1.5 w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="border-t border-b border-gray-200 hidden md:flex">
          <div className="max-w-[1380px] px-6 mx-auto flex items-center w-full">
            {/* Navigation Items */}
            <div className="flex space-x-8">
              {/* Insights Dropdown Trigger */}
              <div className="relative">
                <button
                  className={`py-5 text-primary text-lg font-medium flex items-center ${activeDropdown === "insights" ? "text-state-street-blue-dark" : "hover:text-state-street-blue-dark"}`}
                  onMouseEnter={() => handleMouseEnter("insights")}
                  onMouseLeave={handleMouseLeave}
                >
                  Insights{" "}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "insights" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Solutions Dropdown Trigger */}
              <div className="relative">
                <button
                  className={`py-5 text-primary text-lg font-medium flex items-center ${activeDropdown === "solutions" ? "text-state-street-blue-dark" : "hover:text-state-street-blue-dark"}`}
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                >
                  Solutions{" "}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* About Dropdown Trigger */}
              <div className="relative">
                <button
                  className={`py-5 text-primary text-lg font-medium flex items-center ${activeDropdown === "about" ? "border-state-street-blue-dark text-state-street-blue-dark" : "border-state-street-blue-medium hover:text-state-street-blue-dark"}`}
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  About{" "}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Search - Right aligned */}
            <div className="ml-auto flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-primary placeholder-state-street-blue-medium text-lg font-medium border-b border-state-street-blue-medium pb-1 pr-8 w-24 focus:w-32 transition-all duration-200"
                />
                <Search className="absolute right-0 top-0 w-5 h-5 text-primary mt-1" />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Desktop Mega Menu Container */}
      {activeDropdown && (
        <div
          className="absolute inset-x-0 bg-[#E7F5FF] shadow-lg z-50 hidden md:block"
          style={{ top: dropdownTop }}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          {activeDropdown === "insights" && (
            <div className="max-w-[1380px] mx-auto py-8 px-6 grid grid-cols-4 gap-8">
              {/* Insights content */}
              <div>
                <h1 className="text-4xl font-bold text-primary mb-6">Insights</h1>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Market Views</h2>
                <ul className="space-y-2">
                  {["Global Outlook", "Economic Analysis", "Investment Themes"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Research</h2>
                <ul className="space-y-2">
                  {["Whitepapers", "Reports", "Publications"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Events</h2>
                <ul className="space-y-2">
                  {["Webinars", "Conferences"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeDropdown === "solutions" && (
            <div className="max-w-[1380px] mx-auto py-8 px-6 grid grid-cols-4 gap-8">
              {/* Solutions content */}
              <div>
                <h1 className="text-4xl font-bold text-primary mb-6">Solutions</h1>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Services</h2>
                <ul className="space-y-2">
                  {["Asset Servicing", "Investment Management", "Data & Analytics"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Clients</h2>
                <ul className="space-y-2">
                  {["Asset Managers", "Asset Owners", "Official Institutions"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Technology</h2>
                <ul className="space-y-2">
                  {["Front-to-Back", "Alpha"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeDropdown === "about" && (
            <div className="max-w-[1380px] mx-auto py-8 px-6 grid grid-cols-4 gap-8">
              {/* About content */}
              <div>
                <h1 className="text-4xl font-bold text-primary mb-6">About</h1>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Our Story</h2>
                <ul className="space-y-2">
                  {["Our Company", "2024 Annual Report", "Industry Recognition", "Office Locations"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Our People</h2>
                <ul className="space-y-2">
                  {["Our Team", "Leadership"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-primary transition-colors flex items-center"
                    >
                      Careers <span className="ml-1 text-sm">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Our Impact</h2>
                <ul className="space-y-2">
                  {[
                    "Sustainability",
                    "Operating Responsibly",
                    "Inclusion and Diversity",
                    "Sustainability Reports, Policies and Disclosures",
                    "State Street Foundation",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Image src="/sas_logo.png" width={250} height={100} alt="sas_logo" />
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-b border-state-street-blue-medium pb-2 pr-8 text-primary placeholder-state-street-blue-medium text-lg font-medium focus:outline-none"
              />
              <Search className="absolute right-0 top-1 w-5 h-5 text-primary" />
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              {/* Insights Mobile */}
              <div>
                <button
                  className="w-full text-left py-2 text-primary text-xl font-medium flex items-center justify-between"
                  onClick={() => toggleMobileDropdown("insights")}
                >
                  Insights{" "}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileActiveDropdown === "insights" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "insights" && (
                  <div className="pl-4 pt-2 space-y-3 bg-white rounded-md mt-2 py-3">
                    <h3 className="font-semibold text-primary text-lg px-2">Market Views</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Global Outlook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Economic Analysis
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Investment Themes
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Research</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Whitepapers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Reports
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Publications
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Events</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Webinars
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Conferences
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button
                  className="w-full text-left py-2 text-primary text-xl font-medium flex items-center justify-between"
                  onClick={() => toggleMobileDropdown("solutions")}
                >
                  Solutions{" "}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileActiveDropdown === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "solutions" && (
                  <div className="pl-4 pt-2 space-y-3 bg-white rounded-md mt-2 py-3">
                    <h3 className="font-semibold text-primary text-lg px-2">Services</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Asset Servicing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Investment Management
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Data & Analytics
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Clients</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Asset Managers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Asset Owners
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Official Institutions
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Technology</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Front-to-Back
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Alpha
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* About Mobile */}
              <div>
                <button
                  className="w-full text-left py-2 text-primary text-xl font-medium flex items-center justify-between"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  About{" "}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileActiveDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "about" && (
                  <div className="pl-4 pt-2 space-y-3 bg-white rounded-md mt-2 py-3">
                    <h3 className="font-semibold text-primary text-lg px-2">Our Story</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Our Company
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          2024 Annual Report
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Industry Recognition
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Office Locations
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Our People</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Leadership
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary flex items-center">
                          Careers <span className="ml-1 text-sm">↗</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-primary text-lg px-2 pt-2">Our Impact</h3>
                    <ul className="space-y-2 text-gray-700 px-2">
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Sustainability
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Operating Responsibly
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Inclusion and Diversity
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          Sustainability Reports, Policies and Disclosures
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-primary">
                          State Street Foundation
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}