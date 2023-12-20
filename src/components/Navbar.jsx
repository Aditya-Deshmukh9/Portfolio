import React, { useState } from "react";
import { Link } from "react-scroll";
import ThemeBtn from "./ThemeBtn";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-black dark:text-white fixed top-0 w-full z-10 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 font-semibold">
          <div className="flex-shrink-0">
            <Link
              to="Home"
              className="text-3xl font-bold text-indigo-500 cursor-pointer"
            >
              AD
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="Home"
              smooth={true}
              duration={200}
              className="transition text-indigo-600 hover:text-black cursor-pointer dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={400}
              className="transition text-indigo-600 hover:text-black cursor-pointer dark:hover:text-white"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={400}
              className="transition text-indigo-600 hover:text-black cursor-pointer dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={400}
              className="transition text-indigo-600 hover:text-black cursor-pointer dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeBtn />
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute bg-white dark:bg-black dark:text-white top-16 left-0 right-0">
          <div className="flex flex-col items-center">
            <Link to="Home" className="p-4 hover:bg-gray-200">
              Home
            </Link>
            <Link to="about" className="p-4 hover:bg-gray-200">
              About
            </Link>
            <Link to="projects" className="p-4 hover:bg-gray-200">
              Projects
            </Link>
            <Link to="contact" className="p-4 hover:bg-gray-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
