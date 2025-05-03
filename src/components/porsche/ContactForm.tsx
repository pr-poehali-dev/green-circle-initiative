
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
    agreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleAgreementChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreement: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Здесь будет отправка формы
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Как к вам обращаться</Label>
        <Input 
          id="name" 
          name="name"
          placeholder="Ваше имя" 
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input 
            id="phone" 
            name="phone"
            placeholder="+7 (___) ___-__-__" 
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder="your@email.com" 
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="interest">Что вас интересует?</Label>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger id="interest" className="mt-1">
            <SelectValue placeholder="Выберите из списка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test-drive">Тест-драйв</SelectItem>
            <SelectItem value="purchase">Покупка автомобиля</SelectItem>
            <SelectItem value="service">Сервисное обслуживание</SelectItem>
            <SelectItem value="other">Другое</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message">Ваше сообщение</Label>
        <Textarea 
          id="message" 
          name="message"
          placeholder="Расскажите подробнее о вашем запросе" 
          value={formData.message}
          onChange={handleChange}
          className="mt-1 h-32"
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="agreement" 
          checked={formData.agreement}
          onCheckedChange={handleAgreementChange}
          required
        />
        <Label htmlFor="agreement" className="text-sm text-gray-600">
          Я согласен на обработку персональных данных и принимаю условия политики конфиденциальности
        </Label>
      </div>
      
      <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
        Отправить сообщение
      </Button>
    </form>
  );
};

export default ContactForm;
