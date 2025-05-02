
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  const categories = [
    { id: "all", name: "Все категории", icon: "LayoutGrid" },
    { id: "city", name: "Город", icon: "Building2" },
    { id: "technic", name: "Техника", icon: "Wrench" },
    { id: "castle", name: "Замки", icon: "Castle" },
    { id: "space", name: "Космос", icon: "Rocket" },
    { id: "nature", name: "Природа", icon: "Leaf" }
  ];

  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <Tabs value={activeCategory} className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="w-full justify-start px-0 h-auto">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex items-center gap-2 py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon name={category.icon} size={18} />
              <span>{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoryFilter;
