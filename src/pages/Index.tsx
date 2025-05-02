
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LegoCharacter from "@/components/LegoCharacter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Анимированный фоновый слой */}
      <div className="animated-background"></div>
      <div className="background-pattern"></div>
      <div className="background-dots"></div>
      
      {/* Плавающие декоративные элементы */}
      <div className="floating-brick" style={{ 
        top: '15%', 
        left: '5%', 
        width: '60px', 
        height: '60px', 
        backgroundColor: 'var(--primary)', 
        borderRadius: '8px',
        animationDelay: '0s'
      }}></div>
      <div className="floating-brick" style={{ 
        top: '30%', 
        right: '7%', 
        width: '40px', 
        height: '40px', 
        backgroundColor: 'var(--primary)', 
        borderRadius: '6px',
        animationDelay: '2s'
      }}></div>
      <div className="floating-brick" style={{ 
        bottom: '25%', 
        left: '10%', 
        width: '50px', 
        height: '25px', 
        backgroundColor: 'var(--primary)', 
        borderRadius: '4px',
        animationDelay: '4s'
      }}></div>
      <div className="floating-brick" style={{ 
        bottom: '15%', 
        right: '15%', 
        width: '30px', 
        height: '30px', 
        backgroundColor: 'var(--primary)', 
        borderRadius: '5px',
        animationDelay: '6s'
      }}></div>
      
      <Header />
      <main className="flex-grow z-10">
        <Hero />
        <FeaturedProducts />
        <CategorySection />
        <Newsletter />
      </main>
      <div className="relative py-8 z-10">
        <LegoCharacter />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
