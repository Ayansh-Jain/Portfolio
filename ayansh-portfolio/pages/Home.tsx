import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
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
import ScrollProgress from "../src/components/ui/ScrollProgress";
import NoiseOverlay from "../src/components/ui/NoiseOverlay";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

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
          <NoiseOverlay />
          <ScrollProgress />
          <div className="app-container">
            <Navbar />
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
