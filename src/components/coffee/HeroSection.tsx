
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center" 
      style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900?coffee-shop')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Утренний Аромат</h1>
        <p className="text-xl mb-6">Специалити кофе с душой</p>
        <Button variant="secondary" size="lg">Наше меню</Button>
      </div>
    </section>
  );
};

export default HeroSection;
