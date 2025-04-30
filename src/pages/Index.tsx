
import Hero from "@/components/Hero";
import ModelFeatures from "@/components/ModelFeatures";
import PorscheGallery from "@/components/PorscheGallery";
import TestDriveSection from "@/components/TestDriveSection";
import PerformanceSpecs from "@/components/PerformanceSpecs";
import CustomizeSection from "@/components/CustomizeSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <ModelFeatures />
      <PorscheGallery />
      <PerformanceSpecs />
      <CustomizeSection />
      <TestDriveSection />
      <Footer />
    </div>
  );
};

export default Index;
