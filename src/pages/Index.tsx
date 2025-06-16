import Header from "@/components/Header";
import Products from "@/components/Products";
import Verification from "@/components/Verification";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Payment from "@/components/Payment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 blur-3xl transform -rotate-6 scale-110"></div>
        <div className="relative pt-24">
          <Products />
          <Verification />
        </div>
      </div>
      <FAQ />
      <div className="bg-gradient-to-t from-gray-50 to-white">
        <Support />
        <Payment />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
