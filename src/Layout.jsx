import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import App from "./App.jsx";

function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <App />
      </ThemeProvider>
    </>
  );
}

export default Layout;
