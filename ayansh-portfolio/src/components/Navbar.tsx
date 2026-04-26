import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
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
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Desktop & Tablet Header */}
      <motion.header 
        className="fixed top-6 left-0 right-0 px-6 md:px-12 z-50 pointer-events-none flex justify-between items-start"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("home")}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 bg-[#111111] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl border border-white/5 shadow-2xl hover:bg-[#E67E22] hover:text-black transition-colors"
        >
          AJ.
        </button>

        {/* Desktop Nav Pill */}
        <div 
          className={`pointer-events-auto hidden md:flex items-center gap-1 bg-[#111111]/90 backdrop-blur-md border border-white/5 rounded-full px-2 py-2 shadow-2xl transition-all duration-300 ${isScrolled ? "bg-[#0A0A0A]/95 border-white/10" : ""}`}
        >
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className="text-white/70 hover:text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
          <a 
            href="#resume" 
            className="text-white/70 hover:text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-white/5"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="pointer-events-auto md:hidden w-12 h-12 bg-[#111111] text-white rounded-full flex items-center justify-center border border-white/5 shadow-2xl"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <motion.div 
        className={`fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            className="text-white/70 hover:text-[#E67E22] text-3xl font-bold uppercase tracking-widest transition-colors"
          >
            {item.label}
          </button>
        ))}
        <a 
          href="#resume" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-white/70 hover:text-[#E67E22] text-3xl font-bold uppercase tracking-widest transition-colors"
        >
          Resume
        </a>
      </motion.div>
    </>
  );
}
