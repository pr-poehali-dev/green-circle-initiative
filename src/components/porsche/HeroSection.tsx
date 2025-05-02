
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&h=1300&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">PORSCHE</h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">Воплощение совершенства в каждой детали. Испытайте непревзойденные характеристики и элегантный дизайн.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">Тест-драйв</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">Каталог моделей</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
