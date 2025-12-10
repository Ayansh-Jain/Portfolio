import { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Certificates from "../src/components/Certificates";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";
import LoadingScreen from "../src/components/LoadingScreen";
import CustomCursor from "../src/components/CustomCursor";


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
              <Experience />
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
