
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";
import ScrollChevron from "./ScrollChevron";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <HeroContent />
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollChevron />
      </div>
    </section>
  );
};

export default HeroSection;
