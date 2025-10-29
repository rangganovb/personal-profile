import React from "react";
import { Briefcase } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-gray shadow-sm">
      <div className="container mx-auto max-w-[1440px] px-16">
        <div className="flex justify-between items-center h-22 py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Briefcase className="w-7 h-7 text-[#3668A5]" />
            <a
              href="/"
              className="text-xl font-bold text-[#0B0C63] tracking-wide hover:text-[#3668A5] transition-colors"
            >
              My Profile<span className="text-[#64ADD2]">.</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-base font-semibold text-grayish-blue hover:text-[#3668A5] transition-colors
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#64ADD2] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Hire Me Button */}
            <button className="px-5 py-2 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-[#3668A5] to-[#64ADD2] hover:scale-105 active:scale-95 transition-transform shadow-md">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-[#0B0C63] hover:text-[#3668A5] transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
