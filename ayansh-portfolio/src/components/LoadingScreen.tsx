import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (progress >= 100) onComplete();
      }}
    >
      <div className="loading-content">
        <div className="loading-logo-wrapper">
          <motion.div
            className="loading-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            AJ
          </motion.div>
          <motion.div 
            className="loading-border"
            animate={{ 
              rotate: 360,
              borderColor: ["rgba(245, 158, 11, 0.2)", "rgba(245, 158, 11, 0.8)", "rgba(245, 158, 11, 0.2)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-orange-500 font-mono text-xl">
            {progress}%
          </div>
          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-orange-500"
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        <motion.div
          className="loading-dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="loading-dot"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
