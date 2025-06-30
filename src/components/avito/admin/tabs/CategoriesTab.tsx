import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function CategoriesTab() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: 1,
      name: "Транспорт",
      subcategories: 15,
      ads: 125000,
      icon: "Car",
      status: "active",
    },
    {
      id: 2,
      name: "Недвижимость",
      subcategories: 8,
      ads: 89000,
      icon: "Home",
      status: "active",
    },
    {
      id: 3,
      name: "Работа",
      subcategories: 25,
      ads: 67000,
      icon: "Briefcase",
      status: "active",
    },
    {
      id: 4,
      name: "Услуги",
      subcategories: 20,
      ads: 45000,
      icon: "Wrench",
      status: "active",
    },
    {
      id: 5,
      name: "Личные вещи",
      subcategories: 30,
      ads: 156000,
      icon: "Shirt",
      status: "active",
    },
    {
      id: 6,
      name: "Для дома и дачи",
      subcategories: 18,
      ads: 78000,
      icon: "TreePine",
      status: "active",
    },
    {
      id: 7,
      name: "Бытовая электроника",
      subcategories: 12,
      ads: 92000,
      icon: "Laptop",
      status: "active",
    },
    {
      id: 8,
      name: "Хобби и отдых",
      subcategories: 22,
      ads: 34000,
      icon: "GameController2",
      status: "inactive",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Управление категориями</CardTitle>
          <CardDescription>
            Управление категориями и подкategoriями объявлений
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск категорий..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить категорию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name={category.icon as any}
                          size={20}
                          className="text-blue-600"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          {category.name}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge
                      variant={
                        category.status === "active" ? "default" : "secondary"
                      }
                    >
                      {category.status === "active" ? "Активна" : "Неактивна"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Подкategorий:</span>
                      <span className="font-medium">
                        {category.subcategories}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Объявлений:</span>
                      <span className="font-medium">
                        {category.ads.toLocaleString("ru-RU")}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Edit" size={14} className="mr-1" />
                      Изменить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MoreHorizontal" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Статистика категорий</CardTitle>
          <CardDescription>
            Популярность категорий по количеству объявлений
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories
              .sort((a, b) => b.ads - a.ads)
              .slice(0, 5)
              .map((category, index) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon
                        name={category.icon as any}
                        size={16}
                        className="text-gray-600"
                      />
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{
                          width: `${(category.ads / Math.max(...categories.map((c) => c.ads))) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-16 text-right">
                      {category.ads.toLocaleString("ru-RU")}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
