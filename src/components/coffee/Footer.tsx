
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4A3933] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Coffee className="w-8 h-8 mr-2 text-[#D2A679]" />
            <h3 className="text-xl font-semibold">Утренний Аромат</h3>
          </div>
          <p className="text-gray-300">
            Кофейня, где каждый глоток – это маленькое путешествие в мир вкуса и уюта.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D2A679]">Навигация</h4>
          <nav className="space-y-2">
            <a href="#" className="block hover:text-[#D2A679] transition-colors">О нас</a>
            <a href="#menu" className="block hover:text-[#D2A679] transition-colors">Меню</a>
            <a href="#contact" className="block hover:text-[#D2A679] transition-colors">Контакты</a>
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D2A679]">Социальные сети</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#D2A679] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#D2A679] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#D2A679] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-8 pt-4 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          © 2025 Утренний Аромат. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
