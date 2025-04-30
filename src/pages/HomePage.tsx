
import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AnimalsSection from "@/components/AnimalsSection";
import EventsSection from "@/components/EventsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import AnimatedAnimal from "@/components/AnimatedAnimal";
import Fireworks from "@/components/Fireworks";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Добавляем конфетти при загрузке страницы
    const showConfetti = () => {
      const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#FF69B4', '#87CEFA'];
      for (let i = 0; i < 15; i++) {
        createConfetti(colors);
      }
    };
    
    const createConfetti = (colors) => {
      const confetti = document.createElement('div');
      confetti.className = 'absolute w-3 h-3 rounded-full transition-all duration-3000';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.zIndex = '10';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.getElementById('confetti-container')?.appendChild(confetti);
      
      // Анимируем падение конфетти
      setTimeout(() => {
        confetti.style.top = '120vh';
        confetti.style.left = `calc(${confetti.style.left} + ${(Math.random() - 0.5) * 40}vw)`;
        confetti.style.opacity = '0';
      }, 100);
      
      // Удаляем конфетти после анимации
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    };
    
    // Запускаем конфетти при загрузке
    setTimeout(showConfetti, 1000);
    
    // Регулярно добавляем немного конфетти
    const confettiInterval = setInterval(() => {
      const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#FF69B4', '#87CEFA'];
      createConfetti(colors);
    }, 5000);
    
    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div className="pt-16">
      {/* Фейерверки */}
      <Fireworks />
      
      {/* Контейнер для конфетти */}
      <div id="confetti-container" className="fixed inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Плавающие облака на заднем плане */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="cloud absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-30 animate-float" style={{animationDuration: '30s'}}></div>
        <div className="cloud absolute top-40 right-20 w-24 h-12 bg-white rounded-full opacity-40 animate-float" style={{animationDuration: '25s', animationDelay: '5s'}}></div>
        <div className="cloud absolute top-60 left-1/3 w-40 h-20 bg-white rounded-full opacity-30 animate-float" style={{animationDuration: '35s', animationDelay: '10s'}}></div>
      </div>
      
      <div className="relative">
        <Hero />
        <AnimatedAnimal />
      </div>
      
      <div id="about" className="py-16 bg-gradient-to-b from-green-50 to-blue-50 relative">
        <div className="absolute right-10 top-10 animate-wiggle">
          <span role="img" aria-label="Обезьянка" className="text-4xl">🐒</span>
        </div>
        <AboutSection />
      </div>
      
      <div id="animals" className="py-16 bg-white relative">
        <div className="absolute left-10 top-10 animate-wiggle" style={{animationDelay: '0.5s'}}>
          <span role="img" aria-label="Слон" className="text-4xl">🐘</span>
        </div>
        <AnimalsSection />
      </div>
      
      <div id="events" className="py-16 bg-gradient-to-b from-blue-50 to-purple-50 relative">
        <div className="absolute right-10 top-10 animate-wiggle" style={{animationDelay: '1s'}}>
          <span role="img" aria-label="Попугай" className="text-4xl">🦜</span>
        </div>
        <EventsSection />
      </div>
      
      <div id="contacts" className="py-16 bg-white relative">
        <div className="absolute left-10 top-10 animate-wiggle" style={{animationDelay: '1.5s'}}>
          <span role="img" aria-label="Пингвин" className="text-4xl">🐧</span>
        </div>
        <ContactsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
