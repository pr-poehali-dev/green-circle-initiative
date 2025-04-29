
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat h-[600px]" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')", 
                backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Добро пожаловать в зоопарк</span>
          <span className="block text-green-400">«Баба Фрося»</span>
        </h1>
        <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
          Познакомьтесь с удивительным миром животных в нашем уютном зоопарке. 
          Мы заботимся о природе и приглашаем вас присоединиться к нам!
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/tickets">Купить билеты</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link to="/events">Узнать о мероприятиях</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
