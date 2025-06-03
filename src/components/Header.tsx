import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({
  onCategoriesToggle,
  isCategoriesOpen,
}: {
  onCategoriesToggle: () => void;
  isCategoriesOpen: boolean;
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = {
    Электроника: [
      "Смартфоны",
      "Ноутбуки",
      "Телевизоры",
      "Наушники",
      "Аксессуары",
    ],
    Одежда: ["Мужская", "Женская", "Детская", "Обувь", "Аксессуары"],
    "Дом и сад": [
      "Мебель",
      "Декор",
      "Освещение",
      "Садовый инвентарь",
      "Текстиль",
    ],
    Автотовары: ["Шины", "Масла", "Автохимия", "Запчасти", "Аксессуары"],
    Спорт: ["Фитнес", "Туризм", "Командные виды", "Водные виды", "Зимние виды"],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const toggleCategories = () => {
    onCategoriesToggle();
    setSelectedCategory(null);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top navigation bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <Icon name="MapPin" size={14} className="mr-1" />
                Россия
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <a href="#" className="hover:text-blue-600">
                Создать магазин
              </a>
              <a href="#" className="hover:text-blue-600">
                Управление магазином
              </a>
              <a href="#" className="hover:text-blue-600">
                Новинки
              </a>
              <a href="#" className="hover:text-blue-600">
                Для поставщиков
              </a>
              <a href="#" className="hover:text-blue-600">
                Помощь
              </a>
              <a href="#" className="hover:text-blue-600">
                Поддержка
              </a>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></span>
                <span>Светлая</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and breadcrumb */}
          <div className="flex items-center space-x-6">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleCategories}
            >
              <Icon name="Grid3X3" size={24} className="text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-blue-600">POTIONSHOP</h1>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Icon name="Globe" size={16} className="text-yellow-500 mr-1" />
              <span>Везде</span>
              <Icon name="ChevronRight" size={16} className="mx-1" />
              <span>Искать на PotionMarket...</span>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Package" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </Button>
            <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              <span>АП</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories dropdown menu */}
      {isCategoriesOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              {/* Main categories */}
              <div className="w-1/4 border-r border-gray-200 py-4">
                {Object.keys(categories).map((category) => (
                  <div
                    key={category}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                      selectedCategory === category
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span className="font-medium">{category}</span>
                    <Icon name="ChevronRight" size={16} />
                  </div>
                ))}
              </div>

              {/* Subcategories */}
              <div className="flex-1 py-4">
                {selectedCategory && (
                  <div className="px-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {selectedCategory}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories[
                        selectedCategory as keyof typeof categories
                      ].map((subcategory) => (
                        <a
                          key={subcategory}
                          href="#"
                          className="text-gray-600 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50"
                        >
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {!selectedCategory && (
                  <div className="px-6 text-gray-500 text-center py-8">
                    Выберите категорию для просмотра подкатегорий
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
