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
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(245, 158, 11, 0.8)" : "rgba(245, 158, 11, 0.4)",
          backgroundColor: isHovering ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5
        }}
      />
    </div>
  );
}
