import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
};

const CategorySection = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: "Для детей",
      description: "Наборы для любого возраста",
      imageUrl: "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Sparkles"
    },
    {
      id: 2,
      title: "Техник",
      description: "Функциональные модели",
      imageUrl: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Settings"
    },
    {
      id: 3,
      title: "Коллекционные",
      description: "Эксклюзивные наборы",
      imageUrl: "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Trophy"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Категории</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
              <img 
                src={category.imageUrl} 
                alt={category.title} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary p-2 rounded-full">
                    <Icon name={category.icon} size={20} />
                  </span>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="mb-4 text-white/90">{category.description}</p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Смотреть коллекцию
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;