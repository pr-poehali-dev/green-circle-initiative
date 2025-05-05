
import React from 'react';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-[#162238] font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Связаться с нами</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1D2B3F] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Декоративный элемент */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#2E8B57]/20"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[#DEB887]/10"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[#DEB887] mb-6">Утренний Аромат</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#2E8B57]/20 rounded-full flex items-center justify-center">
                          <Icon name="MapPin" size={24} className="text-[#DEB887]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">ул. Пушкина, 15</p>
                          <p className="text-[#A7C7E7]/70 text-sm">Москва, Россия</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#2E8B57]/20 rounded-full flex items-center justify-center">
                          <Icon name="Clock" size={24} className="text-[#DEB887]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Пн-Пт: 8:00 - 22:00</p>
                          <p className="text-[#A7C7E7]/70 text-sm">Сб-Вс: 9:00 - 23:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#2E8B57]/20 rounded-full flex items-center justify-center">
                          <Icon name="Phone" size={24} className="text-[#DEB887]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">+7 (999) 123-45-67</p>
                          <p className="text-[#A7C7E7]/70 text-sm">Ежедневно с 8:00 до 22:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#2E8B57]/20 rounded-full flex items-center justify-center">
                          <Icon name="Send" size={24} className="text-[#DEB887]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Telegram</p>
                          <a 
                            href="https://t.me/balck_coffee" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#DEB887] text-sm hover:underline"
                          >
                            t.me/balck_coffee
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="bg-[#2E8B57] hover:bg-[#3a9d67] text-white px-6 py-6 h-auto rounded-xl font-medium">
                        <Icon name="MessageCircle" className="mr-2" />
                        Написать нам
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 h-60 md:h-80">
                  <div className="h-full w-full bg-[#0F1A2A] rounded-xl overflow-hidden relative">
                    <iframe 
                      src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1234567890" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute inset-0 bg-[#0F1A2A]/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
