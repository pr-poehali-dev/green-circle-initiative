
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactForm = () => {
  const carModels = ["911", "Taycan", "Cayenne", "Panamera", "Macan"];
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Получить консультацию</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Имя</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Введите ваше имя" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Телефон</label>
          <input type="tel" className="w-full p-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Модель</label>
          <select className="w-full p-2 border rounded-md">
            {carModels.map(model => (
              <option key={model}>{model}</option>
            ))}
          </select>
        </div>
        <Button className="w-full">Отправить</Button>
      </div>
    </Card>
  );
};

export default ContactForm;
