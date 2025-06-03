import * as LucideIcons from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
  showCategoriesButton?: boolean;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
  showCategoriesButton = false,
}: IconProps) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = {
    Электроника: ["Смартфоны", "Ноутбуки", "Планшеты", "Наушники", "Камеры"],
    Одежда: ["Мужская", "Женская", "Детская", "Обувь", "Аксессуары"],
    "Дом и сад": ["Мебель", "Декор", "Кухня", "Инструменты", "Растения"],
    Автотовары: ["Запчасти", "Аксессуары", "Шины", "Масла", "Электроника"],
    Спорт: ["Фитнес", "Футбол", "Теннис", "Плавание", "Велосипеды"],
  };

  if (showCategoriesButton && name === "Menu") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <IconComponent size={size} className={className} />
            <span className="text-sm font-medium">Категории</span>
            <LucideIcons.ChevronDown size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="start">
          {Object.entries(categories).map(([mainCategory, subcategories]) => (
            <div key={mainCategory}>
              <DropdownMenuItem
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  setExpandedCategory(
                    expandedCategory === mainCategory ? null : mainCategory,
                  );
                }}
              >
                <span>{mainCategory}</span>
                <LucideIcons.ChevronRight
                  size={16}
                  className={`transition-transform ${
                    expandedCategory === mainCategory ? "rotate-90" : ""
                  }`}
                />
              </DropdownMenuItem>
              {expandedCategory === mainCategory && (
                <>
                  {subcategories.map((subcategory) => (
                    <DropdownMenuItem
                      key={subcategory}
                      className="pl-6 text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      {subcategory}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                </>
              )}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
