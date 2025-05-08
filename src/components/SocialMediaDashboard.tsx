
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';

// Демо-данные
const analyticsData = [
  { name: 'Янв', twitter: 400, instagram: 240, facebook: 240 },
  { name: 'Фев', twitter: 300, instagram: 430, facebook: 180 },
  { name: 'Мар', twitter: 520, instagram: 510, facebook: 230 },
  { name: 'Апр', twitter: 450, instagram: 470, facebook: 340 },
  { name: 'Май', twitter: 600, instagram: 520, facebook: 280 },
  { name: 'Июн', twitter: 580, instagram: 620, facebook: 390 },
  { name: 'Июл', twitter: 750, instagram: 540, facebook: 430 },
];

const engagementData = [
  { name: 'Пон', лайки: 400, комментарии: 140, репосты: 80 },
  { name: 'Вт', лайки: 380, комментарии: 120, репосты: 90 },
  { name: 'Ср', лайки: 420, комментарии: 160, репосты: 70 },
  { name: 'Чт', лайки: 450, комментарии: 180, репосты: 100 },
  { name: 'Пт', лайки: 500, комментарии: 210, репосты: 120 },
  { name: 'Сб', лайки: 580, комментарии: 250, репосты: 110 },
  { name: 'Вск', лайки: 620, комментарии: 230, репосты: 140 },
];

const platformData = [
  { name: 'Twitter', value: 45, color: '#1DA1F2' },
  { name: 'Instagram', value: 30, color: '#E1306C' },
  { name: 'Facebook', value: 25, color: '#4267B2' },
];

const scheduledPosts = [
  { 
    id: 1, 
    platform: 'twitter', 
    date: '08 мая, 10:00', 
    content: 'Новые функции нашего приложения уже доступны! Обновляйтесь и делитесь впечатлениями! #новыефункции #обновление', 
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  { 
    id: 2, 
    platform: 'instagram', 
    date: '08 мая, 14:30', 
    content: 'Мы на конференции #TechExpo2025! Заходите на наш стенд для демонстрации продукта и подарков!', 
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  { 
    id: 3, 
    platform: 'facebook', 
    date: '09 мая, 09:15', 
    content: 'Отвечаем на самые популярные вопросы от пользователей в нашем новом видео. Переходите по ссылке!', 
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
];

export const SocialMediaDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6 animate-fadeIn">
      {/* Хедер */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-poppins text-white">Социальный Медиа Дашборд</h1>
          <p className="text-gray-400">Статистика и аналитика ваших социальных сетей</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="border-purple hover:bg-purple/10">
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Новый пост
          </Button>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
            <AvatarFallback>АК</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Основные показатели */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard 
          title="Подписчики" 
          value="12,384" 
          change="+8.2%" 
          icon="Users" 
          bgClass="from-purple-light to-purple"
        />
        <KPICard 
          title="Вовлеченность" 
          value="24.7%" 
          change="+2.1%" 
          icon="Heart" 
          bgClass="from-purple to-purple-dark"
        />
        <KPICard 
          title="Охват" 
          value="48,291" 
          change="+14.3%" 
          icon="Eye" 
          bgClass="from-aqua/80 to-aqua"
        />
        <KPICard 
          title="Публикации" 
          value="217" 
          change="+3 сегодня" 
          icon="MessageSquare" 
          bgClass="from-purple-dark to-navy"
        />
      </div>

      {/* Основные Табы */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 animate-slideUp">
        <TabsList className="bg-navy/50 border border-gray-800 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple">
            <Icon name="PieChart" className="mr-2 h-4 w-4" />
            Обзор
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="data-[state=active]:bg-purple">
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            Запланированные
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple">
            <Icon name="BarChart2" className="mr-2 h-4 w-4" />
            Аналитика
          </TabsTrigger>
          <TabsTrigger value="engagement" className="data-[state=active]:bg-purple">
            <Icon name="Share2" className="mr-2 h-4 w-4" />
            Вовлеченность
          </TabsTrigger>
        </TabsList>

        {/* Таб "Обзор" */}
        <TabsContent value="overview" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2 bg-navy border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Рост подписчиков по платформам</CardTitle>
                <CardDescription>Ежемесячный рост за последние 7 месяцев</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData}>
                      <defs>
                        <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1DA1F2" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1DA1F2" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E1306C" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#E1306C" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4267B2" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4267B2" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" />
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d3142" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#2d3142' }} />
                      <Area type="monotone" dataKey="twitter" stroke="#1DA1F2" fillOpacity={1} fill="url(#colorTwitter)" />
                      <Area type="monotone" dataKey="instagram" stroke="#E1306C" fillOpacity={1} fill="url(#colorInstagram)" />
                      <Area type="monotone" dataKey="facebook" stroke="#4267B2" fillOpacity={1} fill="url(#colorFacebook)" />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Распределение аудитории</CardTitle>
                <CardDescription>По социальным платформам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#2d3142' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Таб "Запланированные" */}
        <TabsContent value="scheduled" className="pt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-navy border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Запланированные публикации</CardTitle>
                  <CardDescription>Ваши предстоящие посты в социальных сетях</CardDescription>
                </div>
                <Button className="bg-purple hover:bg-purple-dark">
                  <Icon name="CalendarPlus" className="mr-2 h-4 w-4" />
                  Запланировать
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map(post => (
                    <div key={post.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 hover:border-purple/60 transition-colors">
                      <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <img src={post.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <PlatformIcon platform={post.platform} />
                          <span className="text-sm text-gray-400 ml-2">{post.date}</span>
                        </div>
                        <p className="text-white text-sm">{post.content}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800">
                          <Icon name="Edit" className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800">
                          <Icon name="Trash2" className="h-4 w-4 text-red-400" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Таб "Аналитика" */}
        <TabsContent value="analytics" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <PlatformCard 
              platform="twitter"
              followers="6,842"
              growth="+215"
              engagement="3.7%"
            />
            <PlatformCard 
              platform="instagram"
              followers="3,517"
              growth="+124"
              engagement="5.2%"
            />
            <PlatformCard 
              platform="facebook"
              followers="2,025"
              growth="+87"
              engagement="2.9%"
            />
          </div>
          
          <Card className="bg-navy border border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Сравнительная аналитика</CardTitle>
              <CardDescription>Эффективность платформ по ключевым показателям</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d3142" />
                    <XAxis dataKey="name" stroke="#6c7293" />
                    <YAxis stroke="#6c7293" />
                    <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#2d3142' }} />
                    <Legend />
                    <Bar dataKey="twitter" name="Twitter" fill="#1DA1F2" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="instagram" name="Instagram" fill="#E1306C" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="facebook" name="Facebook" fill="#4267B2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Таб "Вовлеченность" */}
        <TabsContent value="engagement" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-navy border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Метрики взаимодействия</CardTitle>
                <CardDescription>Лайки, комментарии и репосты за последнюю неделю</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={engagementData}>
                      <defs>
                        <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#33C3F0" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6E59A5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" />
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d3142" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#2d3142' }} />
                      <Area type="monotone" dataKey="лайки" stroke="#9b87f5" fillOpacity={1} fill="url(#colorLikes)" />
                      <Area type="monotone" dataKey="комментарии" stroke="#33C3F0" fillOpacity={1} fill="url(#colorComments)" />
                      <Area type="monotone" dataKey="репосты" stroke="#6E59A5" fillOpacity={1} fill="url(#colorShares)" />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Топ посты по вовлеченности</CardTitle>
                <CardDescription>Наиболее популярные публикации за последний месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TopPostCard 
                    platform="instagram"
                    content="Анонс нового продукта вызвал огромный интерес! Спасибо всем за поддержку!"
                    engagement="4.2K лайков • 832 комментария"
                    progress={92}
                  />
                  <TopPostCard 
                    platform="twitter"
                    content="Наша команда на конференции #TechWeek2025. Интересные встречи и новые идеи!"
                    engagement="2.8K лайков • 347 ретвитов"
                    progress={78}
                  />
                  <TopPostCard 
                    platform="facebook"
                    content="Как наш продукт помогает компаниям экономить до 30% ресурсов. Подробный разбор:"
                    engagement="1.5K лайков • 215 репостов"
                    progress={65}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Компонент карточки с ключевым показателем
const KPICard = ({ title, value, change, icon, bgClass }) => (
  <Card className={`relative overflow-hidden border-none shadow-lg animate-slideUp`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-90`}></div>
    <CardContent className="relative z-10 p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-white/70 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className="text-sm mt-2 text-white/90">{change}</p>
        </div>
        <div className="p-3 rounded-full bg-white/10">
          <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
);

// Компонент для отображения иконки платформы
const PlatformIcon = ({ platform }) => {
  const icons = {
    twitter: <Icon name="Twitter" className="h-4 w-4 text-[#1DA1F2]" />,
    instagram: <Icon name="Instagram" className="h-4 w-4 text-[#E1306C]" />,
    facebook: <Icon name="Facebook" className="h-4 w-4 text-[#4267B2]" />
  };
  
  return icons[platform] || null;
};

// Компонент карточки социальной платформы
const PlatformCard = ({ platform, followers, growth, engagement }) => {
  const platformConfig = {
    twitter: {
      name: 'Twitter',
      color: '#1DA1F2',
      icon: 'Twitter'
    },
    instagram: {
      name: 'Instagram',
      color: '#E1306C',
      icon: 'Instagram'
    },
    facebook: {
      name: 'Facebook',
      color: '#4267B2',
      icon: 'Facebook'
    }
  };
  
  const config = platformConfig[platform];
  
  return (
    <Card className="bg-navy border border-gray-800 hover:border-[#3a3f51] transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full" style={{ backgroundColor: `${config.color}20` }}>
            <Icon name={config.icon} className="h-5 w-5" style={{ color: config.color }} />
          </div>
          <h3 className="text-lg font-semibold text-white">{config.name}</h3>
        </div>
        
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-sm text-gray-400">Подписчики</p>
            <p className="text-2xl font-bold text-white">{followers}</p>
          </div>
          <div className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs font-medium">
            +{growth} за месяц
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-400">Вовлеченность</p>
            <p className="text-sm font-medium text-white">{engagement}</p>
          </div>
          <Progress value={parseFloat(engagement) * 20} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-light to-purple" />
        </div>
      </CardContent>
    </Card>
  );
};

// Компонент карточки топового поста
const TopPostCard = ({ platform, content, engagement, progress }) => {
  return (
    <div className="p-4 rounded-lg border border-gray-800 hover:border-purple/20 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <PlatformIcon platform={platform} />
        <span className="text-xs text-gray-400">4 дня назад</span>
      </div>
      <p className="text-white text-sm mb-3">{content}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-400">{engagement}</span>
        <span className="text-xs font-medium text-purple-light">{progress}% вовлеченности</span>
      </div>
      <Progress value={progress} className="h-1.5 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-light to-purple" />
    </div>
  );
};
