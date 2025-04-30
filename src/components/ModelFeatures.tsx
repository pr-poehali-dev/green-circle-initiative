
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ModelFeatures = () => {
  return (
    <section id="models" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Модельный ряд Porsche 911</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Выберите свой идеальный Porsche 911 из широкого модельного ряда — от классического Carrera до экстремального GT3 RS.
        </p>
        
        <Tabs defaultValue="carrera" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12 bg-neutral-800">
            <TabsTrigger value="carrera">Carrera</TabsTrigger>
            <TabsTrigger value="targa">Targa</TabsTrigger>
            <TabsTrigger value="turbo">Turbo S</TabsTrigger>
            <TabsTrigger value="gt3">GT3 RS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="carrera" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Porsche 911 Carrera" 
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
              <div>
                <Badge className="bg-red-600 mb-4">911 Carrera</Badge>
                <h3 className="text-3xl font-bold mb-4">Классический Porsche 911</h3>
                <p className="text-gray-400 mb-6">
                  Базовая модель 911, сочетающая в себе чистый драйв и повседневную практичность. 
                  Оснащается 3-литровым оппозитным двигателем с турбонаддувом.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">385 л.с.</h4>
                    <p className="text-sm text-gray-500">Мощность</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">4.2 сек</h4>
                    <p className="text-sm text-gray-500">0-100 км/ч</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">293 км/ч</h4>
                    <p className="text-sm text-gray-500">Макс. скорость</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">от 11 380 000 ₽</h4>
                    <p className="text-sm text-gray-500">Стоимость</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="targa" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580274418090-35119efc9ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Porsche 911 Targa" 
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
              <div>
                <Badge className="bg-blue-600 mb-4">911 Targa</Badge>
                <h3 className="text-3xl font-bold mb-4">Открытый верх и полный привод</h3>
                <p className="text-gray-400 mb-6">
                  Targa сочетает в себе открытый верх кабриолета и комфорт купе благодаря 
                  инновационной складной крыше с фирменной дугой.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">450 л.с.</h4>
                    <p className="text-sm text-gray-500">Мощность</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">3.8 сек</h4>
                    <p className="text-sm text-gray-500">0-100 км/ч</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">304 км/ч</h4>
                    <p className="text-sm text-gray-500">Макс. скорость</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">от 13 950 000 ₽</h4>
                    <p className="text-sm text-gray-500">Стоимость</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="turbo" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Porsche 911 Turbo S" 
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
              <div>
                <Badge className="bg-green-600 mb-4">911 Turbo S</Badge>
                <h3 className="text-3xl font-bold mb-4">Непревзойденная мощь и роскошь</h3>
                <p className="text-gray-400 mb-6">
                  Turbo S — флагманская модель, сочетающая в себе экстремальную производительность и
                  исключительный комфорт. Король среди спорткаров.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">650 л.с.</h4>
                    <p className="text-sm text-gray-500">Мощность</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">2.7 сек</h4>
                    <p className="text-sm text-gray-500">0-100 км/ч</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">330 км/ч</h4>
                    <p className="text-sm text-gray-500">Макс. скорость</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">от 19 200 000 ₽</h4>
                    <p className="text-sm text-gray-500">Стоимость</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gt3" className="border-none p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Porsche 911 GT3 RS" 
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
              <div>
                <Badge className="bg-purple-600 mb-4">911 GT3 RS</Badge>
                <h3 className="text-3xl font-bold mb-4">Спорткар для трека</h3>
                <p className="text-gray-400 mb-6">
                  Экстремальная модель для истинных ценителей. 
                  Бескомпромиссная машина, создававшаяся с оглядкой на гоночный опыт Porsche.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">525 л.с.</h4>
                    <p className="text-sm text-gray-500">Мощность</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">3.2 сек</h4>
                    <p className="text-sm text-gray-500">0-100 км/ч</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">296 км/ч</h4>
                    <p className="text-sm text-gray-500">Макс. скорость</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">от 21 390 000 ₽</h4>
                    <p className="text-sm text-gray-500">Стоимость</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ModelFeatures;
