
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TestDriveSection = () => {
  return (
    <section id="test-drive" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Декоративный элемент на фоне */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Porsche 911 Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Запишитесь на тест-драйв</h2>
            <p className="text-xl text-gray-400 mb-8">
              Ощутите непередаваемые эмоции от вождения Porsche 911. 
              Заполните форму, и мы свяжемся с вами для согласования даты и времени.
            </p>
            
            <div className="p-6 bg-neutral-800 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Что включает тест-драйв?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-500 mr-2 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подробная презентация модели от эксперта Porsche
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-500 mr-2 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Тест-драйв продолжительностью до 60 минут
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-500 mr-2 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Возможность тестирования различных режимов вождения
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-500 mr-2 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Консультация по вопросам приобретения и финансирования
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neutral-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Форма записи</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" placeholder="Введите ваше имя" className="bg-neutral-700 border-neutral-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" placeholder="Введите вашу фамилию" className="bg-neutral-700 border-neutral-600" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" className="bg-neutral-700 border-neutral-600" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" className="bg-neutral-700 border-neutral-600" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model">Модель для тест-драйва</Label>
                <select id="model" className="w-full h-10 px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md">
                  <option value="911-carrera">911 Carrera</option>
                  <option value="911-targa">911 Targa 4</option>
                  <option value="911-turbo">911 Turbo S</option>
                  <option value="911-gt3">911 GT3</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea 
                  id="message" 
                  placeholder="Укажите предпочитаемые дату и время тест-драйва, а также любую дополнительную информацию"
                  className="bg-neutral-700 border-neutral-600 min-h-[100px]"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="leading-tight text-sm font-normal cursor-pointer">
                  Я согласен с <a href="#" className="text-red-500 hover:underline">политикой конфиденциальности</a> и даю согласие на обработку персональных данных
                </Label>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 py-6">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;
