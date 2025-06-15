import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Verification from "@/components/Verification";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Payment from "@/components/Payment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Verification />
      <FAQ />
      <Support />
      <Payment />
      <Footer />
    </div>
  );
};

export default Index;
