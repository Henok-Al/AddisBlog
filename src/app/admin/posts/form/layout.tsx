import { ReactNode } from "react";
import PostFormContextProvider from "./contexts/PostFormContext";

interface CategoryFormLayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: CategoryFormLayoutProps) {
  return <PostFormContextProvider>{children}</PostFormContextProvider>;
}
