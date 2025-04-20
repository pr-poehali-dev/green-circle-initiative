
import { Link } from "react-router-dom";
import { GiftIcon, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <GiftIcon className="h-8 w-8 text-[#9b87f5] mr-2" />
              <span className="text-xl font-bold">Apple Cards</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Официальный партнер по продаже подарочных карт для экосистемы Apple. 
              Мы предлагаем карты различных номиналов с мгновенной доставкой 
              по всей России и странам СНГ.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-[#9b87f5] transition-colors"
                aria-label="VK"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.64 13.25 13.64C12.93 13.64 12.84 13.73 12.84 14.17V15.62C12.84 16.01 12.72 16.27 11.59 16.27C9.5 16.27 7.18 15.06 5.53 12.69C3.12 9.28 2.51 6.57 2.51 6.12C2.51 5.86 2.6 5.62 3.11 5.62H4.57C4.99 5.62 5.15 5.83 5.31 6.27C6.21 9.05 7.85 11.45 8.55 11.45C8.75 11.45 8.84 11.36 8.84 10.83V8.37C8.77 7.24 8.18 7.15 8.18 6.76C8.18 6.57 8.34 6.37 8.59 6.37H10.93C11.29 6.37 11.42 6.57 11.42 6.99V10.23C11.42 10.59 11.59 10.72 11.7 10.72C11.9 10.72 12.07 10.59 12.44 10.23C13.76 8.77 14.72 6.54 14.72 6.54C14.83 6.3 15.03 6.08 15.45 6.08H16.91C17.44 6.08 17.54 6.36 17.44 6.76C17.23 7.78 14.86 11.19 14.86 11.19C14.7 11.44 14.65 11.56 14.86 11.84C15.03 12.05 15.57 12.53 15.94 12.96C16.69 13.78 17.27 14.46 17.41 14.97C17.56 15.46 17.33 15.27 18.15 16.27Z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#9b87f5] transition-colors"
                aria-label="Telegram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.19 15.89 14.17 15.59 15.94C15.46 16.67 15.19 16.92 14.93 16.95C14.36 17.02 13.93 16.6 13.38 16.24C12.52 15.67 12.03 15.32 11.2 14.77C10.26 14.13 10.88 13.79 11.43 13.21C11.56 13.07 14.2 10.7 14.25 10.49C14.26 10.45 14.26 10.31 14.17 10.24C14.08 10.17 13.96 10.19 13.87 10.21C13.74 10.24 12.13 11.34 9.03 13.5C8.6 13.8 8.22 13.94 7.87 13.93C7.49 13.92 6.76 13.73 6.21 13.57C5.55 13.37 5.03 13.26 5.07 12.89C5.09 12.7 5.35 12.5 5.84 12.31C9.17 10.85 11.36 9.9 12.42 9.45C15.43 8.16 16.07 7.94 16.5 7.94C16.59 7.94 16.79 7.96 16.92 8.07C17.03 8.17 17.06 8.29 17.07 8.39C17.06 8.5 17.08 8.69 16.64 8.8Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="#cards" className="text-gray-400 hover:text-white transition-colors">Карты</Link>
              </li>
              <li>
                <Link to="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#9b87f5] mr-2 mt-0.5" />
                <span className="text-gray-400">support@applegiftcards.ru</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#9b87f5] mr-2 mt-0.5" />
                <span className="text-gray-400">+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#9b87f5] mr-2 mt-0.5" />
                <span className="text-gray-400">Москва, ул. Цифровая, д. 42</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Apple Cards. Все права защищены.</p>
          <p className="mt-2">
            Apple, the Apple logo, and Apple Gift Card are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
