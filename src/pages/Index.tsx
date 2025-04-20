
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { Calculator } from "@/components/Calculator";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-slate-800 dark">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Features />
        <Products />
        <Calculator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
