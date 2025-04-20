import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GiftIcon, 
  HomeIcon, 
  User2Icon, 
  HelpCircleIcon, 
  ShoppingCartIcon 
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type DockItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
};

const DockItem = ({ icon, label, to, isActive }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={to}
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex items-center justify-center p-2 rounded-full 
                   transition-all duration-300 ease-in-out
                   ${isHovered ? 'scale-125 bg-white/20 backdrop-blur-sm' : 'scale-100'}
                   ${isActive ? 'bg-white/10' : ''}`}
      >
        <div className="text-white">
          {icon}
        </div>
      </div>
      <span className={`absolute -top-8 text-white text-xs px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm
                       transition-opacity duration-200 
                       ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {label}
      </span>
      <div className={`h-1 w-1 rounded-full bg-white mt-1 transition-opacity duration-200 
                     ${isActive ? 'opacity-100' : 'opacity-0'}`} />
    </Link>
  );
};

export const AppleDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
        <DockItem 
          icon={<HomeIcon className="h-6 w-6" />} 
          label="Главная" 
          to="/" 
          isActive={true}
        />
        <DockItem 
          icon={<GiftIcon className="h-6 w-6" />} 
          label="Карты" 
          to="/cards" 
        />
        <DockItem 
          icon={<ShoppingCartIcon className="h-6 w-6" />} 
          label="Корзина" 
          to="/cart" 
        />
        <DockItem 
          icon={<HelpCircleIcon className="h-6 w-6" />} 
          label="Помощь" 
          to="/help" 
        />
        <div className="h-8 w-px bg-white/20 mx-1" />
        <div className="relative group">
          <ThemeToggle />
          <span className="absolute -top-8 text-white text-xs px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm
                          transition-opacity duration-200 
                          group-hover:opacity-100 opacity-0">
            Тема
          </span>
        </div>
        <DockItem 
          icon={<User2Icon className="h-6 w-6" />} 
          label="Профиль" 
          to="/profile" 
        />
      </div>
    </div>
  );
};
