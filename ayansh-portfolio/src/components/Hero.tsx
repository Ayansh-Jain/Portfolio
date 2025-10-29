import { motion } from "framer-motion";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import profilePic from "../public/AyanshPfp.png"; // adjust path as needed

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="hero-section">
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={profilePic}
          alt="Ayansh Jain"
          className="hero-avatar"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Ayansh Jain — <br /> Full Stack Developer{" "}
          <span className="hero-bar">|</span>
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building clean, interactive, and scalable web applications with modern
          technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
