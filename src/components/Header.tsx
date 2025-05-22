import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <Icon name="Apple" className="text-black" size={24} />
          <span className="ml-2 text-black font-medium text-lg">Gift Card</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-sm text-gray-800 hover:text-black transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/products"
            className="text-sm text-gray-800 hover:text-black transition-colors"
          >
            Карты
          </Link>
          <Link
            to="/instructions"
            className="text-sm text-gray-800 hover:text-black transition-colors"
          >
            Инструкция
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-black transition-colors">
            <Icon name="Search" size={20} />
          </button>
          <button className="text-gray-800 hover:text-black transition-colors">
            <Icon name="ShoppingBag" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
