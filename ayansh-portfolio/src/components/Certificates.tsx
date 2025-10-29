import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "React  – HackerRank",
    link: "https://www.hackerrank.com/certificates/e517674405b5",
    issuer: "HackerRank",
  },
  {
    title: "Hackathon Participation",
    link: "#",
    issuer: "JIIT Hackathon",
  },
];

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      ref={ref}
      className={`certificates-section ${isVisible ? "fade-in" : ""}`}
    >
      <h2 className="certificates-title">Certificates & Achievements</h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3>{cert.title}</h3>
            <p>Issued by {cert.issuer}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
