"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-white py-4 md:bg-blue-900 md:backdrop-blur-none shadow-2xl"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Carlos Vasquez Logo"
              width={40}
              height={40}
              className="transform group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <span
            className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-gray-800 md:text-white md:drop-shadow-md"
            }`}
          >
            <span className="hidden xs:inline">Carlos Vasquez</span>
            <span className="xs:hidden"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {[
            { path: "/", label: "Inicio" },
            { path: "/servicios", label: "Servicios" },
            { path: "/trabajos", label: "Trabajos Realizados" },
            { path: "/blog", label: "Blog" },
            { path: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-4 py-2 rounded-md transition-all duration-300 ${
                isActive(item.path)
                  ? `${scrolled ? "text-blue-600 font-semibold" : "text-blue-500 font-semibold"}`
                  : `${
                      scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-gray-700 md:text-white md:hover:text-blue-200 md:drop-shadow-md"
                    }`
              }`}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.label}
              {(isActive(item.path) || hoveredItem === item.path) && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    scrolled ? "bg-blue-600" : "bg-blue-500 md:bg-white"
                  } transform origin-left transition-transform duration-300 ${
                    hoveredItem === item.path ? "scale-x-100" : "scale-x-0"
                  } ${isActive(item.path) ? "scale-x-100" : ""}`}
                ></span>
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className={`hidden md:block btn-primary transition-all duration-300 ${
            scrolled ? "" : "md:bg-white md:text-blue-600 md:hover:bg-blue-100"
          }`}
        >
          Solicitar Cotización
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-3" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-gray-700 top-3 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ top: "60px" }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {[
            { path: "/", label: "Inicio" },
            { path: "/servicios", label: "Servicios" },
            { path: "/trabajos", label: "Trabajos Realizados" },
            { path: "/blog", label: "Blog" },
            { path: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg py-2 border-b border-gray-100 ${
                isActive(item.path) ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary text-center my-4" onClick={() => setIsMenuOpen(false)}>
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </header>
  )
}
