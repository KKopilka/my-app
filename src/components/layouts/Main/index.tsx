import { PropsWithChildren, useContext } from "react";

// import { ThemeContext } from "@/components/providers/ThemeProvider";
import Header from "./Header/Header";
// import "@/styles/globals.css";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
//   const context = useContext(ThemeContext);
  return (
        <><Header /><main>{children}</main></>
    );
};
