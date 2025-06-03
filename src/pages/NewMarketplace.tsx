import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const NewMarketplace = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  const toggleCategoriesMenu = () => {
    setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
  };

  const productCategories = {
    Электроника: ["Смартфоны", "Ноутбуки", "Планшеты", "Наушники", "Камеры"],
    Одежда: ["Мужская", "Женская", "Детская", "Обувь", "Аксессуары"],
    "Дом и сад": ["Мебель", "Декор", "Кухня", "Инструменты", "Растения"],
    Автотовары: ["Запчасти", "Аксессуары", "Шины", "Масла", "Электроника"],
    Спорт: ["Фитнес", "Футбол", "Теннис", "Плавание", "Велосипеды"],
  };

  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1416&h=400&fit=crop",
      title: "Летняя распродажа",
      subtitle: "Скидки до 70% на все товары",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1416&h=400&fit=crop",
      title: "Новая коллекция",
      subtitle: "Технологии будущего уже здесь",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1416&h=400&fit=crop",
      title: "Товары для дома",
      subtitle: "Создайте уют в вашем доме",
    },
  ];

  const categories = [
    { name: "Электроника", icon: "📱", products: "12K+" },
    { name: "Одежда", icon: "👔", products: "8K+" },
    { name: "Дом и сад", icon: "🏠", products: "6K+" },
    { name: "Автотовары", icon: "🚗", products: "4K+" },
    { name: "Спорт", icon: "⚽", products: "3K+" },
  ];

  const topSellers = [
    {
      name: "ElectroShop",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      rating: 4.9,
    },
    {
      name: "FashionHub",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c1e4?w=64&h=64&fit=crop&crop=face",
      rating: 4.8,
    },
    {
      name: "HomeDecor",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      rating: 4.7,
    },
    {
      name: "TechWorld",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      rating: 4.9,
    },
    {
      name: "SportZone",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      rating: 4.6,
    },
    {
      name: "BeautyStore",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
      rating: 4.8,
    },
    {
      name: "AutoParts",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face",
      rating: 4.5,
    },
    {
      name: "BookWorld",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=64&h=64&fit=crop&crop=face",
      rating: 4.7,
    },
    {
      name: "KitchenPro",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
      rating: 4.9,
    },
    {
      name: "PetStore",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face",
      rating: 4.6,
    },
  ];

  const saleProducts = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 89999,
      oldPrice: 119999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      discount: 25,
    },
    {
      id: 2,
      title: "MacBook Air M2",
      price: 129999,
      oldPrice: 149999,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      discount: 13,
    },
    {
      id: 3,
      title: "Nike Air Max",
      price: 7999,
      oldPrice: 12999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      discount: 38,
    },
    {
      id: 4,
      title: 'Samsung TV 55"',
      price: 45999,
      oldPrice: 65999,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      discount: 30,
    },
    {
      id: 5,
      title: "Sony WH-1000XM5",
      price: 24999,
      oldPrice: 32999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      discount: 24,
    },
    {
      id: 6,
      title: "Adidas Ultraboost",
      price: 8999,
      oldPrice: 14999,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop",
      discount: 40,
    },
    {
      id: 7,
      title: "Canon EOS R6",
      price: 159999,
      oldPrice: 189999,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
      discount: 16,
    },
    {
      id: 8,
      title: "Dyson V15",
      price: 39999,
      oldPrice: 54999,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      discount: 27,
    },
    {
      id: 9,
      title: "iPad Pro 12.9",
      price: 89999,
      oldPrice: 109999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
      discount: 18,
    },
    {
      id: 10,
      title: "AirPods Pro",
      price: 19999,
      oldPrice: 24999,
      image:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop",
      discount: 20,
    },
    {
      id: 11,
      title: "Tesla Model Y",
      price: 4599999,
      oldPrice: 5199999,
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=300&h=300&fit=crop",
      discount: 12,
    },
    {
      id: 12,
      title: "Gaming Chair",
      price: 25999,
      oldPrice: 35999,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      discount: 28,
    },
    {
      id: 13,
      title: "Smart Watch",
      price: 15999,
      oldPrice: 22999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      discount: 30,
    },
    {
      id: 14,
      title: "Coffee Machine",
      price: 29999,
      oldPrice: 39999,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      discount: 25,
    },
    {
      id: 15,
      title: "Leather Jacket",
      price: 12999,
      oldPrice: 19999,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      discount: 35,
    },
    {
      id: 16,
      title: "Wireless Speaker",
      price: 8999,
      oldPrice: 12999,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      discount: 31,
    },
    {
      id: 17,
      title: "Gaming Laptop",
      price: 89999,
      oldPrice: 119999,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
      discount: 25,
    },
    {
      id: 18,
      title: "Drone 4K",
      price: 34999,
      oldPrice: 49999,
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=300&fit=crop",
      discount: 30,
    },
    {
      id: 19,
      title: "Electric Scooter",
      price: 45999,
      oldPrice: 65999,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      discount: 30,
    },
    {
      id: 20,
      title: "Smart Home Kit",
      price: 19999,
      oldPrice: 29999,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=300&h=300&fit=crop",
      discount: 33,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCategoriesToggle={toggleCategoriesMenu}
        isCategoriesOpen={isCategoriesMenuOpen}
      />

      {/* Categories section - показывается при клике на лого */}
      {isCategoriesMenuOpen && (
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(productCategories).map(
                ([category, subcategories]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-semibold text-gray-900">{category}</h3>
                    <div className="space-y-2">
                      {subcategories.slice(0, 4).map((subcategory) => (
                        <a
                          key={subcategory}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Categories Button Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
              >
                <Icon name="Menu" size={20} />
                <span className="text-sm font-medium">Категории</span>
                <Icon name="ChevronDown" size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="start">
              {Object.entries(productCategories).map(
                ([mainCategory, subcategories]) => (
                  <div key={mainCategory}>
                    <DropdownMenuItem
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        setExpandedCategory(
                          expandedCategory === mainCategory
                            ? null
                            : mainCategory,
                        );
                      }}
                    >
                      <span>{mainCategory}</span>
                      <Icon
                        name="ChevronRight"
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
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-sm text-gray-500">Найдено товаров: 25,000+</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Banner Slider */}
        <div className="relative mb-8">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={banners[currentSlide].image}
              alt={banners[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-2">
                  {banners[currentSlide].title}
                </h2>
                <p className="text-xl">{banners[currentSlide].subtitle}</p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={prevSlide}
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={nextSlide}
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Категории товаров
          </h2>
          <div className="grid grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">
                  {category.products} товаров
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Sellers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Топ 10 продавцов
          </h2>
          <div className="grid grid-cols-10 gap-4">
            {topSellers.map((seller, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2"
                />
                <h4 className="font-medium text-sm mb-1">{seller.name}</h4>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Icon
                    name="Star"
                    size={12}
                    className="text-yellow-500 mr-1"
                  />
                  <span>{seller.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sale Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Распродажа</h2>
          <div className="grid grid-cols-4 gap-8">
            {saleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                  </div>
                  {/* Quality Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg flex items-center">
                      <Icon name="Check" size={12} className="mr-1" />
                      Проверено
                    </div>
                  </div>
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <Icon
                          name="Heart"
                          size={16}
                          className="text-gray-600"
                        />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <Icon name="Eye" size={16} className="text-gray-600" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-3 line-clamp-2 min-h-[3.5rem] text-gray-900">
                    {product.title}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-baseline space-x-3">
                      <span className="font-bold text-2xl text-gray-900">
                        {product.price.toLocaleString()}₽
                      </span>
                      <span className="text-gray-400 line-through text-lg">
                        {product.oldPrice.toLocaleString()}₽
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-500 mr-1 fill-current"
                        />
                        <span className="font-medium">
                          {(4.0 + Math.random() * 1).toFixed(1)}
                        </span>
                        <span className="text-gray-400 ml-2">
                          ({Math.floor(Math.random() * 500 + 100)})
                        </span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">
                        Продано: {Math.floor(Math.random() * 1000)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-gray-500">
                        Быстрая доставка
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Truck" size={14} className="mr-1" />
                        <span>2-3 дня</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewMarketplace;
