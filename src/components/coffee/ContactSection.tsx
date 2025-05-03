
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#F5E6D3] py-16 px-4">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#4A3933]">
            Свяжитесь с нами
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 mr-4 text-[#D2A679]" />
              <span className="text-[#4A3933]">
                ул. Кофейная, д. 7, Москва
              </span>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-8 h-8 mr-4 text-[#D2A679]" />
              <span className="text-[#4A3933]">
                +7 (495) 123-45-67
              </span>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-8 h-8 mr-4 text-[#D2A679]" />
              <span className="text-[#4A3933]">
                info@utro-aroma.ru
              </span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button className="bg-[#D2A679] text-[#4A3933] hover:bg-[#B88B5D]">
              Написать нам
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0890398663!2d37.6073!3d55.7522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzA3LjkiTiAzN8KwMzYnMjYuMyJF!5e0!3m2!1sru!2sru!4v1625069360826!5m2!1sru!2sru"
            width="100%"
            height="450"
            style={{border: 0}}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
