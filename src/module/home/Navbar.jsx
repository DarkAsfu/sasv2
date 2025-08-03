"use client"

import useBlogsMenuItems from "@/hooks/useBlogsMenuItems"
import useClientMenuItems from "@/hooks/usePartnersInfo"
import useServiceMenuItems from "@/hooks/useServiceMenuItems"
import { ChevronDown, Search, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Navbar() {
  const { items: dynamicServiceItems, loading, error } = useServiceMenuItems();
  const { items: dynamicClientItems } = useClientMenuItems();
  const { items: dynamicFeatBlogs } = useBlogsMenuItems();
  console.log(dynamicServiceItems);
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

  // Menu data with URLs
  const menuData = {
    insights: {
      title: "Insights",
      sections: [
        {
          title: "Our Culture",
          items: [
            { name: "Gallery", url: "/gallery" },
            { name: "Client Review", url: "/client-review" }
          ]
        },
        {
          title: "Featured Blogs",
          items: dynamicFeatBlogs
        },
        {
          title: "Others",
          items: [
            // { name: "Event", url: "/insights/events/" },
            { name: "All Blogs", url: "/blogs/" }
          ]
        }
      ]
    },
    solutions: {
      title: "Solutions",
      sections: [
        {
          title: "Product & Services",
          items: dynamicServiceItems
        },
        {
          title: "Partners",
          // items: dynamicClientItems
          items: [
            { name: "All Partners", url: "/all-partners" },
          ]
        },
      ]
    },
    about: {
      title: "About",
      sections: [
        {
          title: "Our Story",
          items: [
            { name: "Our Company", url: "/about/our-story/company" },
            { name: "Annual Report", url: "/about/our-story/annual-report" },
            { name: "Industry Recognition", url: "/about/our-story/industry-recognition" },
            // { name: "Office Locations", url: "/contact#office-locations" }
          ]
        },
        {
          title: "Our People",
          items: [
            { name: "Leadership", url: "/about/our-people/leadership" },
            { name: "Our Team", url: "/about/our-people/team" },
            { name: "Careers", url: "/careers", external: true }
          ]
        },
        {
          title: "Contact Information",
          items: [
            { name: "Contact Form", url: "/contact" },
            { name: "Office Locations", url: "/contact#office-locations" }
          ]
        }
      ]
    }
  }

  return (
    <div className="w-full bg-white fixed z-100 top-0" ref={navbarRef}>
      <div className="">
        {/* Logo and Main Header */}
        <div className="flex max-w-[1380px] mx-auto items-center mb-2 gap-2 px-4">
          <Link href="/">
            <Image src="/sas_logo.png" width={250} height={100} alt="sas_logo" />
          </Link>
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
              {Object.entries(menuData).map(([key, menu]) => (
                <div className="relative" key={key}>
                  <button
                    className={`py-5 text-primary text-lg font-medium flex items-center ${activeDropdown === key ? "text-state-street-blue-dark" : "hover:text-state-street-blue-dark"}`}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.title}{" "}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Search - Right aligned */}
            {/* <div className="ml-auto flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-primary placeholder-state-street-blue-medium text-lg font-medium border-b border-state-street-blue-medium pb-1 pr-8 w-24 focus:w-32 transition-all duration-200"
                />
                <Search className="absolute right-0 top-0 w-5 h-5 text-primary mt-1" />
              </div>
            </div> */}
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
          <div className="max-w-[1380px] mx-auto py-8 px-6 grid grid-cols-4 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-6">{menuData[activeDropdown].title}</h1>
            </div>
            {menuData[activeDropdown].sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-primary mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item?.url}
                        className="text-gray-700 hover:text-primary transition-colors"
                        target={item.external ? "_blank" : undefined}
                      >
                        {item.name}
                        {item.external && <span className="ml-1 text-sm">↗</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/">
              <Image src="/sas_logo.png" width={250} height={100} alt="sas_logo" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {/* Mobile Search */}
            {/* <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-b border-state-street-blue-medium pb-2 pr-8 text-primary placeholder-state-street-blue-medium text-lg font-medium focus:outline-none"
              />
              <Search className="absolute right-0 top-1 w-5 h-5 text-primary" />
            </div> */}

            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              {Object.entries(menuData).map(([key, menu]) => (
                <div key={key}>
                  <button
                    className="w-full text-left py-2 text-primary text-xl font-medium flex items-center justify-between"
                    onClick={() => toggleMobileDropdown(key)}
                  >
                    {menu.title}{" "}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${mobileActiveDropdown === key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileActiveDropdown === key && (
                    <div className="pl-4 pt-2 space-y-3 bg-white rounded-md mt-2 py-3">
                      {menu.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="font-semibold text-primary text-lg px-2">{section.title}</h3>
                          <ul className="space-y-2 text-gray-700 px-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.url}
                                  className="block hover:text-primary"
                                  target={item.external ? "_blank" : undefined}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                  {item.external && <span className="ml-1 text-sm">↗</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {sectionIndex < menu.sections.length - 1 && (
                            <div className="pt-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}