import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь был бы код для отправки формы
    console.log("Form submitted:", formData);
    alert("Сообщение отправлено! (Демо-режим)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь со мной</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@example.com" className="text-muted-foreground hover:text-primary">
                    info@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Локация</p>
                  <p className="text-muted-foreground">Москва, Россия</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Присоединяйтесь ко мне</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🔗</span>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ваш email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ваше сообщение"
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Отправить <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
