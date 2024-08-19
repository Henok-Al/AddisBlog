import { ReactNode } from "react";
import CategoryFormContextProvider from "./contexts/CategoryFormContext";

interface CategoryFormLayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: CategoryFormLayoutProps) {
  return <CategoryFormContextProvider>{children}</CategoryFormContextProvider>;
}
