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

export default function UsersTab() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    {
      id: 1,
      name: "Алексей Иванов",
      email: "alexey@example.com",
      status: "active",
      ads: 25,
      joined: "2023-01-15",
    },
    {
      id: 2,
      name: "Мария Петрова",
      email: "maria@example.com",
      status: "active",
      ads: 42,
      joined: "2023-02-20",
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      email: "dmitry@example.com",
      status: "blocked",
      ads: 8,
      joined: "2023-03-10",
    },
    {
      id: 4,
      name: "Елена Козлова",
      email: "elena@example.com",
      status: "inactive",
      ads: 15,
      joined: "2023-04-05",
    },
    {
      id: 5,
      name: "Андрей Волков",
      email: "andrey@example.com",
      status: "active",
      ads: 67,
      joined: "2023-05-12",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Активен";
      case "inactive":
        return "Неактивен";
      case "blocked":
        return "Заблокирован";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Управление пользователями</CardTitle>
          <CardDescription>
            Просмотр и управление аккаунтами пользователей
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
                placeholder="Поиск пользователей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить пользователя
            </Button>
          </div>

          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Badge className={getStatusColor(user.status)}>
                    {getStatusText(user.status)}
                  </Badge>
                  <div className="text-sm text-gray-500">
                    {user.ads} объявлений
                  </div>
                  <div className="text-sm text-gray-500">
                    С {new Date(user.joined).toLocaleDateString("ru-RU")}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Ban" size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
