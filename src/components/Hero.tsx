
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, PawPrint, Heart, Stars } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat h-[600px]" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')", 
                backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-purple-700/60"></div>
      
      {/* Летающие пузыри/воздушные шары */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-400/50 animate-float"
            style={{
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-4 border-dashed border-yellow-400 shadow-xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Привет, друзья!</span>
            <span className="block text-yellow-300 drop-shadow-md">Зоопарк «Баба Фрося»</span>
          </h1>
          <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
            Здесь тебя ждут удивительные друзья-животные! 
            Приходи играть, учиться и веселиться! 🦁 🐘 🦒 🐒
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 rounded-full px-8 transition-all transform hover:scale-110 hover:rotate-3 shadow-lg border-4 border-pink-300 text-lg font-bold">
              <Link to="/tickets" className="flex items-center gap-2">
                <PawPrint className="h-6 w-6" />
                <span>Билетики!</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-yellow-400 text-purple-900 border-4 border-yellow-300 hover:bg-yellow-500 rounded-full px-8 transition-all transform hover:scale-110 hover:rotate-3 shadow-xl text-lg font-bold">
              <Link to="/events" className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                <span>Праздники!</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-cyan-500 text-white hover:bg-cyan-600 rounded-full px-8 transition-all transform hover:scale-110 hover:rotate-3 shadow-lg border-4 border-cyan-300 text-lg font-bold">
              <Link to="/map" className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>Где мы?</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute -bottom-6 -right-6 transform rotate-12">
          <span role="img" aria-label="Львенок" className="text-6xl">🦁</span>
        </div>
        <div className="absolute -top-6 -left-6 transform -rotate-12">
          <span role="img" aria-label="Жираф" className="text-6xl">🦒</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
