
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <img src="/logo-b.svg" alt="Porsche" className="h-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">Porsche Клуб</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/#models" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Наши авто</Link>
          <Link to="/#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Преимущества</Link>
          <Link to="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Связаться с нами</Link>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          Запишитесь на тест-драйв
        </Button>
      </div>
    </header>
  );
};

export default Header;
