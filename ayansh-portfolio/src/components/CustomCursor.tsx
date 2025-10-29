import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "button" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="custom-cursor">
  <motion.div
    className="custom-cursor-dot"
    animate={{
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: isHovering ? 1.5 : 1,
    }}
    transition={{
      type: "spring",
      stiffness: 500,
      damping: 28,
    }}
  />
  <motion.div
    className="custom-cursor-ring"
    animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovering ? 2 : 1,
    }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 15,
    }}
  />
</div>
  );
}
