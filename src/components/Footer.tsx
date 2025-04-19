import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-primary">ТехЛид</Link>
            <p className="text-muted-foreground mt-2">Технический Лидер и Full Stack Разработчик</p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors">
              Обо мне
            </Link>
            <Link to="/#skills" className="text-foreground hover:text-primary transition-colors">
              Навыки
            </Link>
            <Link to="/#projects" className="text-foreground hover:text-primary transition-colors">
              Проекты
            </Link>
            <Link to="/#experience" className="text-foreground hover:text-primary transition-colors">
              Опыт
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-muted-foreground">
          <p>&copy; {year} Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
