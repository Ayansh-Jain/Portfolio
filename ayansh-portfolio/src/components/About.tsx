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
  I’m <strong>Ayansh Jain</strong>, a Full Stack Developer passionate about building
  scalable, high-performance web applications from concept to deployment.
  I enjoy crafting clean architectures, writing maintainable code, and turning
  complex business requirements into reliable, user-friendly digital products.
</motion.p>

<motion.p
  className="about-text"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  My expertise spans modern frontend technologies like React, JavaScript, and CSS
  animations, along with backend development using Node.js, APIs, and databases.
  I focus on building seamless interfaces backed by robust logic, ensuring
  performance, security, and scalability across the entire stack.
</motion.p>

<motion.p
  className="about-text"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.45 }}
  viewport={{ once: true }}
>
  Alongside personal projects, I have real-world experience building and
  delivering production-ready websites and applications for various
  esteemed companies, collaborating with teams to ship solutions that are
  actively used in real business environments.
</motion.p>

<motion.div
  className="about-highlight"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  viewport={{ once: true }}
>
  “Great software is built at the intersection of thoughtful design,
  clean architecture, and real-world impact.”
</motion.div>
      </motion.div>
    </section>
  );
}
