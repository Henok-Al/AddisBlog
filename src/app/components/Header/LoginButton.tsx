"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import { useState, useEffect, useRef } from "react";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useAdmin } from "@/lib/firebase/admin/read";

const LoginButton = () => {
  const { user, isLoading, handleSignInWithGoogle, handleLogout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { data: adminData, isLoading: adminLoading } = useAdmin({
    uid: user?.uid,
  });

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (isLoading || adminLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={user?.photoURL}
            alt="profilePhoto"
            className="object-cover h-10 w-10 rounded-full"
          />
          <div className="hidden md:block">
            <h1 className="font-bold">{user?.displayName}</h1>
            <h1 className="text-sm text-gray-500">{user?.email}</h1>
          </div>
          <AiOutlineCaretDown className="text-gray-700" />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <Link
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            {adminData && (
              <Link
                href="/admin"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Admin
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out"
    >
      <BsGoogle className="text-xl" />
      <span>Login</span>
    </button>
  );
};

export default LoginButton;
