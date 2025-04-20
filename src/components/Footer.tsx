
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Portfolio
            </a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Portfolio. Все права защищены.
          </p>
          
          <p className="text-sm text-primary-foreground/70 mt-2 md:mt-0">
            Разработано с ❤️ и React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
