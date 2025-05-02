
import Header from "@/components/porsche/Header";
import HeroSection from "@/components/porsche/HeroSection";
import ModelsSection from "@/components/porsche/ModelsSection";
import FeaturesSection from "@/components/porsche/FeaturesSection";
import PriceCalculator from "@/components/porsche/PriceCalculator";
import CallToAction from "@/components/porsche/CallToAction";
import ContactSection from "@/components/porsche/ContactSection";
import Footer from "@/components/porsche/Footer";

/**
 * Главная страница лендинга по продаже Porsche
 * Состоит из нескольких секций, каждая из которых вынесена в отдельный компонент
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <ModelsSection />
      <FeaturesSection />
      <PriceCalculator />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
