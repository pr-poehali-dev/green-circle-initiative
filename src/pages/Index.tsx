import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Activity,
  Clock,
  MessageSquare,
  ThumbsUp,
  Share2,
  UserPlus,
  Calendar,
} from "lucide-react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  // Моковые данные для метрик
  const metrics = {
    followers: 12548,
    engagement: 3.2,
    posts: 143,
    impressions: 45720,
  };

  // Моковые данные для запланированных постов
  const scheduledPosts = [
    {
      id: 1,
      title: "Новый продукт в нашей линейке",
      platform: "instagram",
      date: "15 мая, 14:30",
      status: "scheduled",
    },
    {
      id: 2,
      title: "Результаты квартального отчета",
      platform: "facebook",
      date: "17 мая, 10:00",
      status: "scheduled",
    },
    {
      id: 3,
      title: "Интервью с основателем",
      platform: "twitter",
      date: "18 мая, 16:45",
      status: "draft",
    },
  ];

  // Отображение иконок платформ
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return "Instagram";
      case "facebook":
        return "Facebook";
      case "twitter":
        return "Twitter";
      default:
        return "Share2";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Хедер */}
      <header className="bg-zinc-800 shadow-md py-4 border-b border-zinc-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Социальные сети</h1>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Icon name="Plus" className="mr-2" size={18} />
            Новый пост
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
              <TabsTrigger value="posts">Публикации</TabsTrigger>
              <TabsTrigger value="analytics">Аналитика</TabsTrigger>
              <TabsTrigger value="calendar">Календарь</TabsTrigger>
            </TabsList>

            {/* Фильтр платформ */}
            <div className="flex space-x-2">
              <Button
                variant={selectedPlatform === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform("all")}
              >
                <Icon name="Layers" className="mr-1" size={16} />
                Все
              </Button>
              <Button
                variant={
                  selectedPlatform === "instagram" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedPlatform("instagram")}
              >
                <Icon name="Instagram" className="mr-1" size={16} />
                Instagram
              </Button>
              <Button
                variant={
                  selectedPlatform === "facebook" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedPlatform("facebook")}
              >
                <Icon name="Facebook" className="mr-1" size={16} />
                Facebook
              </Button>
              <Button
                variant={selectedPlatform === "twitter" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform("twitter")}
              >
                <Icon name="Twitter" className="mr-1" size={16} />
                Twitter
              </Button>
            </div>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Карточки с основной статистикой */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Подписчики
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.followers}</div>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +2.5% за неделю
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Вовлеченность
                  </CardTitle>
                  <Activity className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {metrics.engagement}%
                  </div>
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <Icon name="TrendingDown" size={14} className="mr-1" />
                    -0.3% за неделю
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Публикации
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.posts}</div>
                  <p className="text-xs text-gray-500 mt-1">12 в этом месяце</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Охват
                  </CardTitle>
                  <Icon name="Eye" className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {metrics.impressions}
                  </div>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +5.7% за неделю
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* График активности */}
            <Card>
              <CardHeader>
                <CardTitle>Показатели активности</CardTitle>
                <CardDescription>
                  Взаимодействие аудитории за последние 30 дней
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="w-full flex flex-col space-y-8">
                  {/* Моковый график - в реальном проекте использовать recharts или другую библиотеку */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Комментарии</span>
                      <span className="text-sm font-medium">245</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Лайки</span>
                      <span className="text-sm font-medium">1,245</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Репосты</span>
                      <span className="text-sm font-medium">152</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Сохранения</span>
                      <span className="text-sm font-medium">87</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Запланированные посты */}
            <Card>
              <CardHeader>
                <CardTitle>Запланированные публикации</CardTitle>
                <CardDescription>
                  Ближайшие запланированные посты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-2 rounded-md shadow-sm">
                          <Icon
                            name={getPlatformIcon(post.platform)}
                            size={20}
                            className="text-gray-600"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{post.title}</h3>
                          <div className="flex items-center text-gray-500 text-xs mt-1">
                            <Clock size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={14} className="mr-1" />
                          Редактировать
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MoreVertical" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Просмотреть все
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Лучшие посты */}
            <Card>
              <CardHeader>
                <CardTitle>Лучшие публикации</CardTitle>
                <CardDescription>
                  Публикации с наивысшим уровнем вовлеченности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Пост 1 */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative">
                      <img
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500"
                        alt="Пост"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white p-1 rounded-md shadow-sm">
                        <Icon name="Instagram" size={18} />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm line-clamp-2">
                        Запускаем новую линейку продуктов в этом месяце! Не
                        пропустите!
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <ThumbsUp size={14} className="mr-1" />
                          542
                        </div>
                        <div className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          128
                        </div>
                        <div className="flex items-center">
                          <Share2 size={14} className="mr-1" />
                          65
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Пост 2 */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative">
                      <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500"
                        alt="Пост"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white p-1 rounded-md shadow-sm">
                        <Icon name="Facebook" size={18} />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm line-clamp-2">
                        Поделитесь своим мнением о нашем новом сервисе!
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <ThumbsUp size={14} className="mr-1" />
                          364
                        </div>
                        <div className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          89
                        </div>
                        <div className="flex items-center">
                          <Share2 size={14} className="mr-1" />
                          42
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Пост 3 */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500"
                        alt="Пост"
                        className="w-full h-full.object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white p-1 rounded-md shadow-sm">
                        <Icon name="Twitter" size={18} />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm line-clamp-2">
                        Присоединяйтесь к нам на конференции маркетологов 2025!
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <ThumbsUp size={14} className="mr-1" />
                          287
                        </div>
                        <div className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          67
                        </div>
                        <div className="flex items-center">
                          <Share2 size={14} className="mr-1" />
                          93
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts">
            <Card>
              <CardHeader>
                <CardTitle>Публикации</CardTitle>
                <CardDescription>
                  Управление всеми вашими публикациями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-10">
                  Здесь будет управление публикациями
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Расширенная аналитика</CardTitle>
                <CardDescription>
                  Детальные метрики и статистика
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-10">
                  Здесь будет расширенная аналитика
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Календарь публикаций</CardTitle>
                <CardDescription>
                  Планирование и расписание публикаций
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-10">
                  Здесь будет календарь публикаций
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
