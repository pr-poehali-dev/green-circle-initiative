import { motion } from "framer-motion";

const FloatingParticles = () => {
  return (
    <div className="hidden lg:block">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background: `radial-gradient(circle, ${
              [
                "#3b82f6",
                "#06d6a0",
                "#f59e0b",
                "#ec4899",
                "#8b5cf6",
                "#f97316",
              ][i % 6]
            }60, transparent)`,
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 5) * 15}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2.5, 1],
            x: [0, Math.sin(i) * 15, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 6 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;