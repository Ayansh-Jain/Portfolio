import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "rgba(245, 158, 11, 0.15)",
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              boxShadow: `0 0 30px ${glowColor}, 0 20px 60px rgba(0,0,0,0.4)`,
            }
          : undefined
      }
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      {children}
    </motion.div>
  );
}
