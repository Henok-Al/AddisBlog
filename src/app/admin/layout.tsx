import AuthContextProvider from "@/lib/contexts/AuthContext";
import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AuthContextProvider>
        <section className="flex">
          <Sidebar />
          {children}
        </section>
      </AuthContextProvider>
    </>
  );
}
