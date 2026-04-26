import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import profilePic from "/AyanshPfp.png";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-6, -15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [4, 12]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-20 pb-10" id="home" ref={containerRef}>
      
      {/* Top Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-32 z-20 text-orange-500 italic font-mono text-sm tracking-widest text-center w-full"
      >
        Full Stack Developer & Tech Enthusiast
      </motion.div>

      {/* Massive Typography Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10 px-4">
        
        {/* Floating Polaroids */}
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute left-[5%] top-[10%] w-48 md:w-72 aspect-square z-20"
        >
          <div className="w-full h-full bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-2xl rounded-sm transform transition-transform hover:scale-105">
            <div className="w-full h-full bg-black overflow-hidden">
              <img src={profilePic} alt="Ayansh Jain" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute right-[5%] bottom-[10%] w-48 md:w-72 aspect-[4/3] z-20"
        >
          <div className="w-full h-full bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-2xl rounded-sm transform transition-transform hover:scale-105">
            <div className="w-full h-full bg-black overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
              <div className="text-orange-500 font-mono text-xs p-4 opacity-70">
                {`const build = () => {
  return "scalable web apps";
}`}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Layers */}
        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter text-center m-0 mix-blend-difference z-30">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            AYANSH
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-outline hover:text-white transition-colors duration-500"
          >
            JAIN
          </motion.div>
        </h1>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
          Desktop Viewport Improves Visual Flow.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-16 z-20 text-orange-500 italic text-xl md:text-2xl font-serif text-center w-full"
      >
        — Building clean, interactive & scalable solutions
      </motion.div>

      {/* Circular Scroll Down Button */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-white/20 flex items-center justify-center z-30 group overflow-hidden"
      >
        <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/50 rounded-full transition-colors" />
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold z-10 group-hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M12 18V6"/></svg>
        </div>
        <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
          <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          <text className="text-[10px] uppercase tracking-[3px] fill-white/50">
            <textPath href="#curve" startOffset="0%">
              • scroll down • scroll down • scroll down
            </textPath>
          </text>
        </svg>
      </motion.button>
    </section>
  );
}
