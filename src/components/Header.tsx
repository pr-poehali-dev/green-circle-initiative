import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-800/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/favicon.svg" 
            alt="Баба Фрося" 
            className="h-12 w-auto" 
          />
          <span className="text-xl font-bold text-white">Баба Фрося</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:text-yellow-300 transition">Главная</Link>
          <Link to="/animals" className="text-white hover:text-yellow-300 transition">Животные</Link>
          <Link to="/prices" className="text-white hover:text-yellow-300 transition">Цены</Link>
          <Link to="/contacts" className="text-white hover:text-yellow-300 transition">Контакты</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 text-green-900 font-medium py-2 px-4 rounded-full transition"
          >
            Купить билет
          </a>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;