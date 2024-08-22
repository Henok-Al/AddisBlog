import { ReactNode } from "react";
import AuthorFormContextProvider from "./contexts/AuthorFormContext";

interface CategoryFormLayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: CategoryFormLayoutProps) {
  return <AuthorFormContextProvider>{children}</AuthorFormContextProvider>;
}
