import { Home, List, MessageCircle } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-7 py-2 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-orange-500">
          Addis<span className="text-gray-800">Blog</span>
        </span>
      </Link>
      <ul className="hidden md:flex gap-6 items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Home />
          HOME
        </Link>
        <Link href={"/categories"} className="flex items-center gap-2">
          <List />
          CATEGORIES
        </Link>
        <Link href={"/contactus"} className="flex items-center gap-2">
          <MessageCircle />
          Contact Us
        </Link>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
      <MobileMenu />
    </nav>
  );
};

export default Header;
