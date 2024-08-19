import { ReactNode } from "react";
import CategoryFormContextProvider from "./contexts/CategoryFormContext";

export default function Layout(children: ReactNode) {
  return <CategoryFormContextProvider>{children}</CategoryFormContextProvider>;
}
