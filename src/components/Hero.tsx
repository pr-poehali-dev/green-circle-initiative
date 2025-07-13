import { motion, useScroll, useTransform, Variants } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax эффекты
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  // Функция плавного скролла к секции продуктов
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-gradient-hero text-white py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden min-h-[95vh] flex items-center">
      {/* Простой градиентный фон */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-hero"
        style={{ y: backgroundY }}
      />

      <motion.div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Левая колонка - контент */}
          <HeroContent onScrollToProducts={scrollToProducts} />

          {/* Правая колонка - изображение/панель */}
          <HeroImage />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
