import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Conditions from "@/components/Conditions";
import RewardSystem from "@/components/RewardSystem";
import Calculator from "@/components/Calculator";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Conditions />
      <RewardSystem />
      <Calculator />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
