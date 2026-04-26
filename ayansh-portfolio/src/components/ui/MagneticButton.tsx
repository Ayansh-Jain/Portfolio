import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  // Use div instead of button to avoid DOM nesting issues (button inside button / a inside button)
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      role="button"
      tabIndex={0}
      className={`magnetic-wrap ${className}`}
      style={{ 
        x: springX, 
        y: springY, 
        display: className.includes("w-full") ? "block" : "inline-block", 
        cursor: "pointer" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
