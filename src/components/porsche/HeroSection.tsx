
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollChevron from "./ScrollChevron";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      <HeroContent />
      <ScrollChevron />
    </section>
  );
};

export default HeroSection;
