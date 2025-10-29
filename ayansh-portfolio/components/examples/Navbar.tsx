import Navbar from "../Navbar";
import { useState } from "react";

export default function NavbarExample() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="h-screen">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <div style={{ paddingTop: "5rem", textAlign: "center" }}>
        <p>Scroll down to see navbar effects</p>
      </div>
    </div>
  );
}
