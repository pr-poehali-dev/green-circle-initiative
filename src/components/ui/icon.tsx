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

// Кастомная иконка заполненного сердечка
const HeartFilled = ({ size = 24, color, className, strokeWidth = 2 }: Omit<IconProps, "name">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Расширенный набор иконок
const CustomIcons = {
  HeartFilled
};

const Icon = ({ name, color, size = 24, className, strokeWidth = 2, fallback }: IconProps) => {
  // Проверяем, существует ли иконка в Lucide
  const LucideIcon = (LucideIcons as any)[name];

  // Проверяем, существует ли кастомная иконка
  const CustomIcon = (CustomIcons as any)[name];

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

  if (CustomIcon) {
    return (
      <CustomIcon
        color={color}
        size={size}
        className={className}
        strokeWidth={strokeWidth}
      />
    );
  }

  // Если иконка не найдена и указан fallback, используем его
  if (fallback && (LucideIcons as any)[fallback]) {
    const FallbackIcon = (LucideIcons as any)[fallback];
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