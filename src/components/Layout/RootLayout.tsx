import { ReactNode, useEffect, useState } from "react";
import Navbar from "../Organism/Navbar";
import Footer from "../Organism/Footer";

type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the root element
  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-velbetRed">
      <Navbar onSwitch={toggleTheme} theme={theme} />
      {children}
      <Footer />
    </div>
  );
}
