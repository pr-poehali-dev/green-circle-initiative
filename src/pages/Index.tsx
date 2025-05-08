
import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#0f0f0f] border-b border-[#272727] flex items-center p-2 px-4 justify-between">
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-[#272727] rounded-full">
            <Icon name="Menu" className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon name="Play" className="h-6 w-6 text-red-600 fill-current" />
            <span className="font-semibold text-lg">ВидеоТуб</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex">
            <Input 
              placeholder="Введите запрос" 
              className="bg-[#121212] border-[#303030] rounded-l-full rounded-r-none py-2 px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button variant="secondary" className="rounded-l-none rounded-r-full bg-[#272727] hover:bg-[#323232] border-[#303030] border-l-0">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-[#272727]">
            <Icon name="Upload" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-[#272727]">
            <Icon name="Bell" className="h-5 w-5" />
          </Button>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0f0f0f] flex-shrink-0 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto pt-2">
          <nav className="px-3 pb-3">
            <div className="space-y-1 mb-6">
              <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg bg-[#272727] text-white">
                <Icon name="Home" className="h-5 w-5" />
                <span>Главная</span>
              </a>
              <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                <Icon name="Flame" className="h-5 w-5" />
                <span>Shorts</span>
              </a>
              <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                <Icon name="PanelRight" className="h-5 w-5" />
                <span>Подписки</span>
              </a>
              <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                <Icon name="Music" className="h-5 w-5" />
                <span>Музыка</span>
              </a>
            </div>
            
            <div className="border-t border-[#272727] pt-3 mb-6">
              <h3 className="px-3 text-sm font-medium mb-1">Вы</h3>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Icon name="User" className="h-5 w-5" />
                  <span>Ваш канал</span>
                </a>
                <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Icon name="History" className="h-5 w-5" />
                  <span>История</span>
                </a>
                <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Icon name="Film" className="h-5 w-5" />
                  <span>Ваши видео</span>
                </a>
                <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Icon name="Clock" className="h-5 w-5" />
                  <span>Смотреть позже</span>
                </a>
                <a href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Icon name="ThumbsUp" className="h-5 w-5" />
                  <span>Понравившиеся</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-[#272727] pt-3">
              <h3 className="px-3 text-sm font-medium mb-1">Подписки</h3>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Channel" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <span>Канал 1</span>
                </a>
                <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://i.pravatar.cc/150?img=7" alt="Channel" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <span>Канал 2</span>
                </a>
                <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#272727] text-white">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://i.pravatar.cc/150?img=23" alt="Channel" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                  <span>Канал 3</span>
                </a>
              </div>
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Categories */}
          <div className="flex items-center gap-3 p-3 overflow-x-auto hide-scrollbar sticky top-[57px] bg-[#0f0f0f] z-5 border-b border-[#272727]">
            <Badge variant="secondary" className="bg-white text-black hover:bg-gray-200 rounded-lg px-3 py-1">
              Все
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Музыка
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Видеоигры
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Сейчас в эфире
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Джемы
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Экшен и приключения
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Недавно опубликованные
            </Badge>
            <Badge variant="outline" className="bg-[#272727] hover:bg-[#323232] text-white border-none rounded-lg px-3 py-1">
              Новое для вас
            </Badge>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {/* Video Card 1 */}
            <div className="flex flex-col">
              <div className="relative rounded-xl overflow-hidden cursor-pointer group">
                <img 
                  src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 px-1 rounded text-xs">
                  10:30
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" className="h-12 w-12 opacity-80" />
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Avatar className="h-9 w-9 rounded-full flex-shrink-0">
                  <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Channel" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium line-clamp-2">Название видео и еще много слов потому что название длинное</h3>
                  <p className="text-sm text-gray-400 mt-1">Имя Канала</p>
                  <p className="text-sm text-gray-400">1.2 млн просмотров • 2 года назад</p>
                </div>
              </div>
            </div>
            
            {/* Video Card 2 */}
            <div className="flex flex-col">
              <div className="relative rounded-xl overflow-hidden cursor-pointer group">
                <img 
                  src="https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 px-1 rounded text-xs">
                  4:15
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" className="h-12 w-12 opacity-80" />
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Avatar className="h-9 w-9 rounded-full flex-shrink-0">
                  <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Channel" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium line-clamp-2">Популярный клип с миллиардами просмотров</h3>
                  <p className="text-sm text-gray-400 mt-1">Музыкальный Канал</p>
                  <p className="text-sm text-gray-400">7.3 млрд просмотров • 5 лет назад</p>
                </div>
              </div>
            </div>
            
            {/* Video Card 3 */}
            <div className="flex flex-col">
              <div className="relative rounded-xl overflow-hidden cursor-pointer group">
                <img 
                  src="https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 px-1 rounded text-xs">
                  3:31
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" className="h-12 w-12 opacity-80" />
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Avatar className="h-9 w-9 rounded-full flex-shrink-0">
                  <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Channel" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium line-clamp-2">Еще один хит для вашей коллекции</h3>
                  <p className="text-sm text-gray-400 mt-1">Солист</p>
                  <p className="text-sm text-gray-400">2.5 млрд просмотров • 6 лет назад</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shorts Section */}
          <div className="px-6 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flame" className="h-5 w-5 text-red-600" />
              <h2 className="text-xl font-bold">Shorts</h2>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
              {/* Short 1 */}
              <div className="flex-shrink-0 w-[180px]">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src="https://picsum.photos/id/237/400/700" 
                    alt="Short thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-medium line-clamp-2">Короткое видео №1</h4>
                    <p className="text-xs text-gray-300 mt-1">5.2M просмотров</p>
                  </div>
                </div>
              </div>
              
              {/* Short 2 */}
              <div className="flex-shrink-0 w-[180px]">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src="https://picsum.photos/id/238/400/700" 
                    alt="Short thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-medium line-clamp-2">Самое крутое короткое видео</h4>
                    <p className="text-xs text-gray-300 mt-1">1.7M просмотров</p>
                  </div>
                </div>
              </div>
              
              {/* Short 3 */}
              <div className="flex-shrink-0 w-[180px]">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src="https://picsum.photos/id/239/400/700" 
                    alt="Short thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-medium line-clamp-2">Ты не поверишь что случилось дальше!</h4>
                    <p className="text-xs text-gray-300 mt-1">8.9M просмотров</p>
                  </div>
                </div>
              </div>
              
              {/* Short 4 */}
              <div className="flex-shrink-0 w-[180px]">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src="https://picsum.photos/id/240/400/700" 
                    alt="Short thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-medium line-clamp-2">Смотри до конца!</h4>
                    <p className="text-xs text-gray-300 mt-1">3.4M просмотров</p>
                  </div>
                </div>
              </div>
              
              {/* Short 5 */}
              <div className="flex-shrink-0 w-[180px]">
                <div className="relative h-80 rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src="https://picsum.photos/id/242/400/700" 
                    alt="Short thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-medium line-clamp-2">Лайфхак за 20 секунд</h4>
                    <p className="text-xs text-gray-300 mt-1">2.1M просмотров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
