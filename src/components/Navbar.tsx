
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/80 border-b border-zinc-800/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">БетонМастер</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-zinc-200 hover:text-white transition-colors">Главная</Link>
          <Link to="#products" className="text-zinc-200 hover:text-white transition-colors">Продукция</Link>
          <Link to="#calculator" className="text-zinc-200 hover:text-white transition-colors">Калькулятор</Link>
          <Link to="#contact" className="text-zinc-200 hover:text-white transition-colors">Контакты</Link>
        </nav>
        
        <Button className="hidden md:flex backdrop-blur-sm bg-zinc-800/70 text-white border border-zinc-700/50 hover:bg-zinc-700/80">
          <Phone className="mr-2 h-4 w-4" />
          +7 (999) 123-45-67
        </Button>
        
        <Button variant="ghost" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>
    </header>
  );
};
