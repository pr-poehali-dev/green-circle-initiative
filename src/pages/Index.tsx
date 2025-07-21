import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <FeaturesSection />
      <Partners />
      <Contacts />

    </div>
  );
};

export default Index;