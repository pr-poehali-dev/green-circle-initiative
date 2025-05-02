
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
      {/* Анимированный фоновый слой (более яркий) */}
      <div className="animated-background"></div>
      <div className="background-pattern"></div>
      <div className="background-dots"></div>
      
      {/* Плавающие декоративные элементы (более яркие) */}
      <div className="floating-brick" style={{ 
        top: '15%', 
        left: '5%', 
        width: '60px', 
        height: '60px', 
        backgroundColor: 'hsl(0, 100%, 50%)', 
        borderRadius: '8px',
        animationDelay: '0s',
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)'
      }}></div>
      <div className="floating-brick" style={{ 
        top: '30%', 
        right: '7%', 
        width: '40px', 
        height: '40px', 
        backgroundColor: 'hsl(30, 100%, 50%)', 
        borderRadius: '6px',
        animationDelay: '2s',
        boxShadow: '0 0 15px rgba(255, 153, 0, 0.4)'
      }}></div>
      <div className="floating-brick" style={{ 
        bottom: '25%', 
        left: '10%', 
        width: '50px', 
        height: '25px', 
        backgroundColor: 'hsl(0, 100%, 60%)', 
        borderRadius: '4px',
        animationDelay: '4s',
        boxShadow: '0 0 15px rgba(255, 77, 77, 0.4)'
      }}></div>
      <div className="floating-brick" style={{ 
        bottom: '15%', 
        right: '15%', 
        width: '30px', 
        height: '30px', 
        backgroundColor: 'hsl(15, 100%, 55%)', 
        borderRadius: '5px',
        animationDelay: '6s',
        boxShadow: '0 0 15px rgba(255, 102, 77, 0.4)'
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
