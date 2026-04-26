import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      className={`split-text-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: 600 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="split-text-word"
          style={{ display: "inline-block", marginRight: "0.35em" }}
        >
          {Tag === "h1" || Tag === "h2" || Tag === "h3" ? (
            <Tag style={{ display: "inline", fontSize: "inherit", fontWeight: "inherit" }}>
              {word}
            </Tag>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}
