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

export default function CitiesTab() {
  const [searchQuery, setSearchQuery] = useState("");

  const cities = [
    {
      id: 1,
      name: "Москва",
      region: "Московская область",
      ads: 245000,
      users: 1200000,
      status: "active",
    },
    {
      id: 2,
      name: "Санкт-Петербург",
      region: "Ленинградская область",
      ads: 180000,
      users: 850000,
      status: "active",
    },
    {
      id: 3,
      name: "Новосибирск",
      region: "Новосибирская область",
      ads: 45000,
      users: 180000,
      status: "active",
    },
    {
      id: 4,
      name: "Екатеринбург",
      region: "Свердловская область",
      ads: 38000,
      users: 145000,
      status: "active",
    },
    {
      id: 5,
      name: "Нижний Новгород",
      region: "Нижегородская область",
      ads: 32000,
      users: 120000,
      status: "active",
    },
    {
      id: 6,
      name: "Казань",
      region: "Республика Татарстан",
      ads: 28000,
      users: 98000,
      status: "active",
    },
    {
      id: 7,
      name: "Челябинск",
      region: "Челябинская область",
      ads: 25000,
      users: 85000,
      status: "active",
    },
    {
      id: 8,
      name: "Омск",
      region: "Омская область",
      ads: 18000,
      users: 65000,
      status: "inactive",
    },
  ];

  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.region.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Управление городами</CardTitle>
          <CardDescription>
            Управление доступными городами и регионами
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
                placeholder="Поиск городов или регионов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить город
            </Button>
          </div>

          <div className="space-y-4">
            {filteredCities.map((city) => (
              <div
                key={city.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.region}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold">
                      {city.ads.toLocaleString("ru-RU")}
                    </div>
                    <div className="text-xs text-gray-500">Объявлений</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">
                      {city.users.toLocaleString("ru-RU")}
                    </div>
                    <div className="text-xs text-gray-500">Пользователей</div>
                  </div>
                  <Badge
                    variant={city.status === "active" ? "default" : "secondary"}
                  >
                    {city.status === "active" ? "Активен" : "Неактивен"}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MoreHorizontal" size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Топ городов по объявлениям</CardTitle>
            <CardDescription>
              Самые активные города по количеству размещенных объявлений
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cities
                .sort((a, b) => b.ads - a.ads)
                .slice(0, 5)
                .map((city, index) => (
                  <div
                    key={city.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600">
                        {index + 1}
                      </div>
                      <span className="font-medium">{city.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{
                            width: `${(city.ads / Math.max(...cities.map((c) => c.ads))) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {Math.round(city.ads / 1000)}k
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Статистика по регионам</CardTitle>
            <CardDescription>
              Распределение активности по федеральным округам
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: "Центральный ФО", cities: 15, percentage: 35 },
                { region: "Северо-Западный ФО", cities: 8, percentage: 22 },
                { region: "Сибирский ФО", cities: 12, percentage: 18 },
                { region: "Уральский ФО", cities: 6, percentage: 12 },
                { region: "Приволжский ФО", cities: 10, percentage: 13 },
              ].map((region) => (
                <div
                  key={region.region}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{region.region}</div>
                    <div className="text-sm text-gray-500">
                      {region.cities} городов
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${region.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8 text-right">
                      {region.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
