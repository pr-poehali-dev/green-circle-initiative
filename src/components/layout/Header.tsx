import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="apple-container py-3 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5902zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.3085 3.251 3.251 0 0 0 -2.1168.8882 3.4218 3.4218 0 0 0 -.8779 2.1585 1.4177 1.4177 0 0 0 .031.2568 1.1339 1.1339 0 0 0 .2063.0207 3.0935 3.0935 0 0 0 1.9418-.7957z"></path>
          </svg>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="apple-nav-link">Главная</Link>
          <Link to="/cards" className="apple-nav-link">Gift Cards</Link>
          <Link to="/how-it-works" className="apple-nav-link">Как это работает</Link>
          <Link to="/faq" className="apple-nav-link">Вопросы и ответы</Link>
          <Link to="/contact" className="apple-nav-link">Контакты</Link>
        </nav>
        
        <div className="flex items-center space-x-5">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-black" />
            <span className="absolute -top-1 -right-1 bg-apple-red text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white absolute w-full border-b border-gray-100">
          <div className="apple-container py-5 flex flex-col space-y-4">
            <Link to="/" className="apple-nav-link block py-2" onClick={toggleMenu}>Главная</Link>
            <Link to="/cards" className="apple-nav-link block py-2" onClick={toggleMenu}>Gift Cards</Link>
            <Link to="/how-it-works" className="apple-nav-link block py-2" onClick={toggleMenu}>Как это работает</Link>
            <Link to="/faq" className="apple-nav-link block py-2" onClick={toggleMenu}>Вопросы и ответы</Link>
            <Link to="/contact" className="apple-nav-link block py-2" onClick={toggleMenu}>Контакты</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;