// MobileMenu.jsx
"use client";

import React, { useState } from "react";
import { Home, List, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex justify-between items-center px-7 py-3 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-500">
                Addis<span className="text-gray-800">Blog</span>
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="px-7 py-3">
            <li className="flex items-center gap-2 py-2">
              <Home />
              HOME
            </li>
            <li className="flex items-center gap-2 py-2">
              <List />
              BLOGS
            </li>
            <li className="flex items-center gap-2 py-2">
              <MessageCircle />
              Contact Us
            </li>
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out">
            <BsGoogle className="text-xl" />
            <span>Login With Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
