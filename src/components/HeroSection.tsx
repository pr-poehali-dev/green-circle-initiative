
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503919005314-c31ce19c67b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Добро пожаловать в зоопарк "Баба Фрося"</h1>
          <p className="text-xl mb-8">Познакомьтесь с удивительным миром животных и станьте частью нашей семьи</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900">
              Купить билет
            </Button>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-yellow-500 text-white hover:bg-yellow-500/20">
                Наши мероприятия
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
