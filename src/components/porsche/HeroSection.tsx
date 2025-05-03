
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollChevron from "./ScrollChevron";

const HeroSection = () => {
  const scrollToModels = () => {
    document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroContent />
      </div>
      <ScrollChevron onClick={scrollToModels} />
    </section>
  );
};

export default HeroSection;
