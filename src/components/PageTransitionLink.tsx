import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PageTransitionLinkProps {
  to: string;
  children: React.ReactNode;
  iconName?: string;
  className?: string;
  delay?: number;
}

export default function PageTransitionLink({
  to,
  children,
  iconName,
  className,
  delay = 300,
}: PageTransitionLinkProps) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      // Добавляем класс для затемнения экрана при переходе
      document.body.classList.add("page-transition-active");

      // Задержка перед переходом, чтобы анимация успела проиграться
      const timer = setTimeout(() => {
        navigate(to);
        // Удаляем класс после перехода
        document.body.classList.remove("page-transition-active");
        setIsTransitioning(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, navigate, to, delay]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {iconName && <Icon name={iconName} className="mr-2" />}
      {children}
    </Button>
  );
}
