import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="footer-container"
    >
      <div className="footer-inner">
        <motion.p
          className="footer-text"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Built with{" "}
          <Heart className="footer-heart" /> by <span className="footer-name">Ayansh Jain</span>
        </motion.p>
        <p className="footer-copy">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
