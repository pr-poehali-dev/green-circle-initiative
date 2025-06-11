import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroGeometric
      badge="Партнерская программа"
      title1="Зарабатывайте до 30%"
      title2="с Poehali.dev"
    />
  );
};

export default Hero;
