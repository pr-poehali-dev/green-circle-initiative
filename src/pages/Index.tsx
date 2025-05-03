
import Header from "@/components/porsche/Header";
import HeroSection from "@/components/porsche/HeroSection";
import ModelsSection from "@/components/porsche/ModelsSection";
import FeaturesSection from "@/components/porsche/FeaturesSection";
import PaymentSystem from "@/components/porsche/PaymentSystem";
import ContactSection from "@/components/porsche/ContactSection";
import CallToAction from "@/components/porsche/CallToAction";
import Footer from "@/components/porsche/Footer";

const PorscheLanding = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <ModelsSection />
      <FeaturesSection />
      <PaymentSystem />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PorscheLanding;
