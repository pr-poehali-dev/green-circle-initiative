
import Header from "@/components/coffee/Header";
import HeroSection from "@/components/coffee/HeroSection";
import AboutSection from "@/components/coffee/AboutSection";
import MenuSection from "@/components/coffee/MenuSection";
import ContactSection from "@/components/coffee/ContactSection";
import Footer from "@/components/coffee/Footer";

const CoffeeShopLanding = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#4A3933]">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CoffeeShopLanding;
