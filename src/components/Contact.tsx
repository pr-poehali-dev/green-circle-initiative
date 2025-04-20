
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Связаться с нами</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="backdrop-blur-lg bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-white">Отправить заявку</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-zinc-300">Ваше имя</Label>
                <Input id="name" className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200" placeholder="Иван Иванов" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-zinc-300">Номер телефона</Label>
                <Input id="phone" className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-zinc-300">Электронная почта</Label>
              <Input id="email" type="email" className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200" placeholder="mail@example.com" />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-zinc-300">Сообщение</Label>
              <Textarea 
                id="message" 
                className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200 min-h-[120px]" 
                placeholder="Опишите ваш запрос или укажите объем и марку необходимого бетона"
              />
            </div>
            
            <Button className="w-full backdrop-blur-sm bg-blue-500/80 hover:bg-blue-600/80 text-white border border-blue-400/50">
              Отправить заявку
            </Button>
          </form>
        </div>
        
        <div className="backdrop-blur-lg bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-white">Контактная информация</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-white">Адрес производства</p>
                <p className="text-zinc-300">г. Москва, ул. Промышленная, д. 23</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-white">Телефон</p>
                <p className="text-zinc-300">+7 (999) 123-45-67</p>
                <p className="text-zinc-300">+7 (999) 765-43-21</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-white">Электронная почта</p>
                <p className="text-zinc-300">info@betonmaster.ru</p>
                <p className="text-zinc-300">sales@betonmaster.ru</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="font-medium text-white">Режим работы</p>
                <p className="text-zinc-300">Пн-Пт: 8:00 - 20:00</p>
                <p className="text-zinc-300">Сб-Вс: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-lg overflow-hidden h-48 bg-zinc-700/50 flex items-center justify-center">
            <div className="text-zinc-400">Здесь будет карта</div>
          </div>
        </div>
      </div>
    </section>
  );
};
