import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconProps = {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
  fallback?: string;
};

// Кастомная иконка заполненного сердечка (SVG напрямую)
const HeartFilledIcon = ({ size = 24, className }: Omit<IconProps, "name">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428c-1.077-1.067-1.5-2.895-1.5-4.572 0-3 2-5 5-5 1.711 0 3.375 1.062 4 3 0.625-1.938 2.289-3 4-3 3 0 5 2 5 5 0 1.677-0.423 3.505-1.5 4.572z" />
  </svg>
);

// Добавляем кастомную иконку в объект
const CustomIcons: Record<string, React.FC<Omit<IconProps, "name">>> = {
  HeartFilled: HeartFilledIcon
};

const Icon = ({ name, color, size = 24, className, strokeWidth = 2, fallback }: IconProps) => {
  // Сначала проверяем, есть ли кастомная иконка
  if (CustomIcons[name]) {
    const CustomIcon = CustomIcons[name];
    return <CustomIcon color={color} size={size} className={className} strokeWidth={strokeWidth} />;
  }

  // Затем проверяем стандартные иконки Lucide
  const LucideIcon = (LucideIcons as Record<string, any>)[name];
  if (LucideIcon) {
    return (
      <LucideIcon
        color={color}
        size={size}
        className={className}
        strokeWidth={strokeWidth}
      />
    );
  }

  // Если иконка не найдена и указан fallback, используем его
  if (fallback && (LucideIcons as Record<string, any>)[fallback]) {
    const FallbackIcon = (LucideIcons as Record<string, any>)[fallback];
    return (
      <FallbackIcon
        color={color}
        size={size}
        className={cn("text-yellow-500", className)}
        strokeWidth={strokeWidth}
      />
    );
  }

  // Если ничего не найдено, возвращаем предупреждение
  console.warn(`Icon "${name}" not found`);
  return (
    <LucideIcons.AlertCircle
      color="red"
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;