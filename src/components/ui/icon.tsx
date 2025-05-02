
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

// Добавляем специальный значок HeartFilled
const HeartFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Дополнительные иконки можно добавить здесь
const CustomIcons: { [key: string]: React.FC } = {
  HeartFilled,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  fallback?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  fallback = "CircleAlert",
  className,
  ...props 
}) => {
  let IconComponent: React.FC<any>;

  // Сначала проверяем, есть ли иконка в нашем списке кастомных иконок
  if (name in CustomIcons) {
    IconComponent = CustomIcons[name];
  } 
  // Затем ищем в библиотеке Lucide
  else if (name in LucideIcons) {
    IconComponent = (LucideIcons as { [key: string]: React.FC<any> })[name];
  } 
  // Если не найдено, используем fallback
  else {
    IconComponent = (LucideIcons as { [key: string]: React.FC<any> })[fallback];
    console.warn(`Icon "${name}" not found, using "${fallback}" instead`);
  }

  return <IconComponent size={size} className={cn(className)} {...props} />;
};

export default Icon;
