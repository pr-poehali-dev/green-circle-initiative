import { motion } from "framer-motion";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";
import FloatingParticles from "./FloatingParticles";

const HeroImage = () => {
  return (
    <motion.div
      className="relative h-full flex items-center justify-center order-1 lg:order-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
        <MobileVersion />
        <DesktopVersion />
        <FloatingParticles />
      </div>
    </motion.div>
  );
};

export default HeroImage;