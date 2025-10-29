import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I’m <strong>Ayansh Jain</strong>, a passionate Full Stack Developer dedicated
          to crafting clean, interactive, and visually engaging web experiences.
          I focus on writing optimized, maintainable code and transforming
          creative ideas into beautiful, functional websites.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          My expertise lies in modern frontend technologies like React, CSS
          animations, and JavaScript. I love building intuitive interfaces that
          merge performance with creativity — ensuring every interaction feels
          natural and delightful.
        </motion.p>

        <motion.div
          className="about-highlight"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          “Design is not just what it looks like and feels like — design is how
          it works.”
        </motion.div>
      </motion.div>
    </section>
  );
}
