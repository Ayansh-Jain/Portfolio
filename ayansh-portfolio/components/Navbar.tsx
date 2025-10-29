import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Navbar({ toggleTheme, isDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <button className="logo" onClick={() => scrollToSection("home")}>
          AJ
        </button>

        <div className={`nav-items ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme}>
            {isDark ? <Sun /> : <Moon />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
