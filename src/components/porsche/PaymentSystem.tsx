
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentSystem = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Tabs defaultValue="credit">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="credit">Кредит</TabsTrigger>
          <TabsTrigger value="lease">Лизинг</TabsTrigger>
          <TabsTrigger value="trade">Trade-in</TabsTrigger>
        </TabsList>
        
        <TabsContent value="credit" className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Специальные кредитные программы</h3>
            <p className="text-gray-600">
              Мы предлагаем выгодные условия кредитования при покупке вашего нового Porsche. 
              Наши финансовые консультанты всегда помогут подобрать оптимальную программу.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Стандарт</CardTitle>
                  <CardDescription>Базовая кредитная программа</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ставка от 7.9% годовых</li>
                    <li>• Первый взнос от 20%</li>
                    <li>• Срок до 5 лет</li>
                    <li>• Быстрое одобрение</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Премиум</CardTitle>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded">Популярно</span>
                  </div>
                  <CardDescription>Для постоянных клиентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ставка от 5.9% годовых</li>
                    <li>• Первый взнос от 15%</li>
                    <li>• Срок до 7 лет</li>
                    <li>• Страхование включено</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Рассчитать платеж</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Бизнес</CardTitle>
                  <CardDescription>Для корпоративных клиентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ставка от 6.5% годовых</li>
                    <li>• Первый взнос от 10%</li>
                    <li>• Срок до 6 лет</li>
                    <li>• Налоговые преимущества</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="lease" className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Лизинговые программы</h3>
            <p className="text-gray-600">
              Porsche Financial Services предлагает гибкие условия лизинга для частных и корпоративных клиентов.
              Приобретайте автомобиль вашей мечты с минимальными затратами.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Преимущества лизинга с Porsche:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Экономия на налогах
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Минимальный первоначальный взнос
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Включение всех расходов в платежи
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Возможность обновления автомобиля
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Фиксированные ежемесячные платежи
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Гибкие условия договора
                  </li>
                </ul>
              </div>
              
              <Button className="mt-4">Получить индивидуальное предложение</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="trade" className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Программа Trade-in</h3>
            <p className="text-gray-600">
              Обменяйте ваш текущий автомобиль на новый Porsche с доплатой. 
              Мы предложим выгодные условия и позаботимся обо всех формальностях.
            </p>
            
            <div className="mt-6">
              <h4 className="font-medium mb-4">Как работает программа Trade-in:</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white mr-3">1</span>
                  <div>
                    <h5 className="font-medium">Оценка вашего автомобиля</h5>
                    <p className="text-sm text-gray-600">Наши специалисты проведут бесплатную оценку технического состояния вашего автомобиля</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white mr-3">2</span>
                  <div>
                    <h5 className="font-medium">Выбор нового Porsche</h5>
                    <p className="text-sm text-gray-600">Подберите новый автомобиль из нашего модельного ряда</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white mr-3">3</span>
                  <div>
                    <h5 className="font-medium">Оформление документов</h5>
                    <p className="text-sm text-gray-600">Мы поможем оформить все необходимые документы в кратчайшие сроки</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white mr-3">4</span>
                  <div>
                    <h5 className="font-medium">Получение нового автомобиля</h5>
                    <p className="text-sm text-gray-600">Заберите ваш новый Porsche в удобное для вас время</p>
                  </div>
                </li>
              </ol>
              
              <Button className="mt-6">Оценить ваш автомобиль</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentSystem;
