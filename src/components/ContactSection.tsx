
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="контакты" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Если у вас есть вопросы или предложения по сотрудничеству, 
            заполните форму или используйте контактные данные ниже
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="ваш@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Тема
                </label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea id="message" placeholder="Ваше сообщение..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto gap-2">
                <Send className="w-4 h-4" />
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:hello@example.com" className="text-foreground/80 hover:text-primary">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <a href="tel:+71234567890" className="text-foreground/80 hover:text-primary">
                      +7 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Локация</h4>
                    <p className="text-foreground/80">
                      Москва, Россия
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
