"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const LoginButton = () => {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } =
    useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return (
      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            handleLogout();
          }}
          className="flex items-center gap-3
      bg-black text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
        <Link href="/admin">
          <div className="flex gap-4 rounded-xl bg-blue-100 px-0 py-2">
            <img
              src={user?.photoURL}
              alt="profilePhoto"
              className="object-cover h-12 w-12 rounded-full "
            />
            <div>
              <h1 className="font-bold">{user?.displayName}</h1>
              <h1 className="text-sm text-gray-500">{user?.email}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <button
      onClick={() => {
        handleSignInWithGoogle();
      }}
      className="hidden md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center justify-center space-x-2 transition duration-300 ease-in-out"
    >
      <BsGoogle className="text-xl" />
      <span>Login With Google</span>
    </button>
  );
};

export default LoginButton;
