import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GiftCardGrid from "@/components/GiftCardGrid";
import InstructionsSection from "@/components/InstructionsSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GiftCardGrid />
        <InstructionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
