import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";

interface HomeProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Home({ toggleTheme, isDark }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <CustomCursor />
          <div className="app-container">
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </>
      )}
    </>
  );
}
