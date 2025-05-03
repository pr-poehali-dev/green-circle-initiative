
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formState);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          value={formState.phone}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Ваше сообщение или вопрос..."
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className="w-full"
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Отправить сообщение
      </Button>
      <p className="text-gray-500 text-sm text-center">
        Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности.
        Мы гарантируем защиту ваших персональных данных!
      </p>
    </form>
  );
};

export default ContactForm;
