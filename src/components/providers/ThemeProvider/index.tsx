'use client'
import { GlobalStyle, darkTheme, lightTheme } from "@/styles/theme";
import { PropsWithChildren, createContext, useState } from "react";
import { ThemeProvider as Theme } from "styled-components";

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};