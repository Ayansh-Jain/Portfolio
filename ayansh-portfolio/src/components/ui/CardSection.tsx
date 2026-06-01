import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface CardSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function CardSection({ children, className = "", id }: CardSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const shadow = useTransform(scrollYProgress, [0, 1], ["0 8px 30px rgba(0,0,0,0.15)", "0 30px 80px rgba(0,0,0,0.45)"]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`card-section ${className}`}
      style={{ y, boxShadow: shadow }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
