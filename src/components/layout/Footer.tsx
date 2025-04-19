import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-apple-gray py-8 mt-12">
      <div className="apple-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Покупайте и узнавайте</h3>
            <ul className="space-y-2">
              <li><Link to="/cards" className="text-xs text-apple-darkgray hover:text-black">Apple Gift Cards</Link></li>
              <li><Link to="/how-it-works" className="text-xs text-apple-darkgray hover:text-black">Как активировать</Link></li>
              <li><Link to="/faq" className="text-xs text-apple-darkgray hover:text-black">Часто задаваемые вопросы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-xs text-apple-darkgray hover:text-black">Поддержка клиентов</Link></li>
              <li><Link to="/delivery" className="text-xs text-apple-darkgray hover:text-black">Доставка</Link></li>
              <li><Link to="/payment" className="text-xs text-apple-darkgray hover:text-black">Способы оплаты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-xs text-apple-darkgray hover:text-black">О нас</Link></li>
              <li><Link to="/contact" className="text-xs text-apple-darkgray hover:text-black">Связаться с нами</Link></li>
              <li><Link to="/privacy" className="text-xs text-apple-darkgray hover:text-black">Конфиденциальность</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Следите за нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-apple-darkgray hover:text-black">
                <span className="sr-only">VK</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.802-.468-1.897-1.584-1.01-.936-1.397-1.06-1.649-1.06-.356 0-.445.106-.445.597v1.449c0 .42-.212.597-1.237.597-1.833 0-3.753-1.139-5.101-3.213C5.395 10.511 4.85 8.408 4.85 7.873c0-.277.106-.532.582-.532h1.628c.438 0 .607.192.776.649.839 2.33 2.207 4.169 2.782 4.169.212 0 .319-.106.319-.66V9.623c-.053-1.196-.662-1.292-.662-1.715 0-.212.192-.425.489-.425h2.559c.345 0 .49.196.49.618v3.321c0 .35.15.49.266.49.212 0 .396-.138.795-.554 1.205-1.397 2.05-3.529 2.05-3.529.117-.244.373-.468.778-.468h1.628c.49 0 .596.254.49.6-.202.947-2.316 4.064-2.316 4.064-.18.308-.244.436 0 .782.18.244.755.755 1.139 1.215.756.862 1.333 1.586 1.487 2.086.181.468-.106.702-.574.702z"/>
                </svg>
              </a>
              <a href="#" className="text-apple-darkgray hover:text-black">
                <span className="sr-only">Telegram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between text-xs text-apple-darkgray">
            <p>Copyright © {currentYear} Apple Gift Cards. Все права защищены.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/legal" className="hover:text-black">Юридическая информация</Link>
              <Link to="/privacy" className="hover:text-black">Конфиденциальность</Link>
              <Link to="/terms" className="hover:text-black">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;