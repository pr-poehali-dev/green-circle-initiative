import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Background effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="bg-gradient-main rounded-2xl p-1 shadow-xl">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left content */}
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Готовы создать что-то <span className="text-gradient">потрясающее</span>?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Свяжитесь с нами сегодня и превратите свои идеи в реальность. Мы поможем вам на каждом этапе процесса.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <Button size="lg" className="bg-gradient-main hover:opacity-90 transition-opacity w-full sm:w-auto px-8">
                    Начать проект
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                    Узнать больше
                  </Button>
                </div>
              </div>
              
              {/* Right content - image */}
              <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 lg:p-12 text-white flex items-center">
                <div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-yellow-300"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl font-medium italic mb-6">
                    "Работа с этой командой превзошла все наши ожидания. Результат просто потрясающий!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Testimonial" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Анна Смирнова</p>
                      <p className="text-sm text-white/80">CEO, Компания</p>
                    </div>
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

export default CTASection;
