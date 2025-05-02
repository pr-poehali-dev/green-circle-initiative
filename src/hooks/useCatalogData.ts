import { useState, useEffect } from "react";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/components/ui/use-toast";

// Ключ для хранения лайков в localStorage
const LIKED_PRODUCTS_KEY = 'lego-catalog-liked-products';

// Начальные данные каталога
const initialProducts: Product[] = [
  {
    id: 1,
    title: "Замок принцессы",
    price: 12990,
    oldPrice: 15990,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    icon: "Castle",
    isNew: true,
    productColor: "#ef4444" // красный
  },
  {
    id: 2,
    title: "Спорткар Техник",
    price: 8990,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    icon: "Car",
    productColor: "#3b82f6" // синий
  },
  {
    id: 3,
    title: "Космическая станция",
    price: 19990,
    oldPrice: 22990,
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    icon: "Rocket",
    isLimited: true,
    productColor: "#1c1917" // черный
  },
  {
    id: 4,
    title: "Городская площадь",
    price: 15990,
    color: "bg-gradient-to-br from-green-400 to-green-600",
    icon: "Building2",
    productColor: "#22c55e" // зеленый
  },
  {
    id: 5,
    title: "Подводный мир",
    price: 7990,
    oldPrice: 9990,
    color: "bg-gradient-to-br from-blue-300 to-blue-500",
    icon: "Ship",
    productColor: "#3b82f6" // синий
  },
  {
    id: 6,
    title: "Динозавры",
    price: 6990,
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    icon: "Footprints",
    productColor: "#eab308" // желтый
  },
  {
    id: 7,
    title: "Средневековый замок",
    price: 17990,
    color: "bg-gradient-to-br from-slate-500 to-slate-700",
    icon: "Castle",
    isLimited: true,
    productColor: "#71717a" // серый
  },
  {
    id: 8,
    title: "Гоночный болид",
    price: 9990,
    oldPrice: 12990,
    color: "bg-gradient-to-br from-red-500 to-red-700",
    icon: "Car",
    productColor: "#ef4444" // красный
  },
  {
    id: 9,
    title: "Джунгли",
    price: 5990,
    color: "bg-gradient-to-br from-green-500 to-green-700",
    icon: "Leaf",
    isNew: true,
    productColor: "#22c55e" // зеленый
  }
];

// Функция для загрузки лайков из localStorage
const loadLikedProducts = (): number[] => {
  try {
    const savedLikes = localStorage.getItem(LIKED_PRODUCTS_KEY);
    return savedLikes ? JSON.parse(savedLikes) : [];
  } catch (error) {
    console.error('Ошибка при загрузке избранных товаров:', error);
    return [];
  }
};

// Функция для сохранения лайков в localStorage
const saveLikedProducts = (likedIds: number[]): void => {
  try {
    localStorage.setItem(LIKED_PRODUCTS_KEY, JSON.stringify(likedIds));
  } catch (error) {
    console.error('Ошибка при сохранении избранных товаров:', error);
  }
};

export const useCatalogData = () => {
  const { toast } = useToast();
  // Загружаем начальное состояние из localStorage при инициализации
  const [likedProductIds, setLikedProductIds] = useState<number[]>(() => loadLikedProducts());
  const [products, setProducts] = useState<Product[]>(() => {
    const savedLikes = loadLikedProducts();
    return initialProducts.map(product => ({
      ...product,
      isLiked: savedLikes.includes(product.id)
    }));
  });

  // Обновляем localStorage при изменении лайков
  useEffect(() => {
    saveLikedProducts(likedProductIds);
    
    // Обновляем продукты с учетом новых лайков
    setProducts(prevProducts => 
      prevProducts.map(product => ({
        ...product,
        isLiked: likedProductIds.includes(product.id)
      }))
    );
  }, [likedProductIds]);

  const handleToggleLike = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productName = product.title || 'Товар';
    const isCurrentlyLiked = likedProductIds.includes(productId);
    
    if (isCurrentlyLiked) {
      // Убираем из избранного
      setLikedProductIds(prev => prev.filter(id => id !== productId));
      toast({
        title: "Товар удален из избранного",
        description: `${productName} больше не в избранном`,
        duration: 2000,
      });
    } else {
      // Добавляем в избранное
      setLikedProductIds(prev => [...prev, productId]);
      toast({
        title: "Товар добавлен в избранное",
        description: `${productName} добавлен в избранное`,
        duration: 2000,
      });
    }
  };

  return {
    products,
    likedProductIds,
    handleToggleLike
  };
};