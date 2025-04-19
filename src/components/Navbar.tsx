import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-background border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">ТехЛид</Link>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/#about">Обо мне</NavLink>
          <NavLink to="/#skills">Навыки</NavLink>
          <NavLink to="/#projects">Проекты</NavLink>
          <NavLink to="/#experience">Опыт</NavLink>
          <NavLink to="/#contact">Контакты</NavLink>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NavLink to="/#about" onClick={toggleMenu}>Обо мне</NavLink>
            <NavLink to="/#skills" onClick={toggleMenu}>Навыки</NavLink>
            <NavLink to="/#projects" onClick={toggleMenu}>Проекты</NavLink>
            <NavLink to="/#experience" onClick={toggleMenu}>Опыт</NavLink>
            <NavLink to="/#contact" onClick={toggleMenu}>Контакты</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick?: () => void }) => (
  <Link 
    to={to} 
    className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
