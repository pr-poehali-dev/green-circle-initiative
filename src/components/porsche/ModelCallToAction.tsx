
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { ru } from "date-fns/locale";

interface ModelCallToActionProps {
  model: string;
}

/**
 * Компонент призыва к действию для страницы модели
 * Позволяет записаться на тест-драйв
 */
const ModelCallToAction = ({ model }: ModelCallToActionProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь была бы логика отправки формы
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-8 text-white">
      <div className="max-w-3xl mx-auto">
        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold mb-4">Запишитесь на тест-драйв {model}</h2>
            <p className="text-gray-300 mb-6">
              Ощутите непревзойденную динамику и управляемость легендарного Porsche. 
              Заполните форму, и наш менеджер свяжется с вами для подтверждения даты и времени.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Ваше имя" 
                  required 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  required 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-gray-800 border-gray-700 text-white w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ru }) : "Выберите дату"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <Input 
                  type="email" 
                  placeholder="Email" 
                  required 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
              </div>
              
              <Button type="submit" className="w-full bg-[#D5001C] hover:bg-[#B0001A] text-white">
                Записаться на тест-драйв
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4">Спасибо за заявку!</h2>
            <p className="text-gray-300 mb-6">
              Наш менеджер свяжется с вами в ближайшее время для подтверждения 
              тест-драйва {model}.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-white text-gray-900 hover:bg-gray-200"
            >
              Отправить еще заявку
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelCallToAction;
