
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Анимация появления элементов при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      heroRef.current,
      featuresRef.current,
      testimonialsRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5]/10 to-white opacity-0 transition-all duration-1000 ease-out transform translate-y-10"
      >
        <div className="max-w-6xl mx-auto px-6 z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-[#1A1F2C] leading-tight">
              Создавайте{" "}
              <span className="text-[#9b87f5] relative">
                невероятные
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3C50 0.5 150 0.5 200 3"
                    stroke="#9b87f5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              проекты вместе с нами
            </h1>
            <p className="text-lg md:text-xl text-[#8E9196] max-w-2xl mx-auto">
              Мы помогаем компаниям создавать цифровые продукты, которые
              привлекают клиентов и обеспечивают рост бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8875e0] text-white rounded-full px-8 transition-all transform hover:scale-105"
              >
                Начать проект
                <Icon name="ChevronRight" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[#9b87f5] text-[#9b87f5] px-8 hover:bg-[#9b87f5]/10"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        
        {/* Анимированные элементы на заднем плане */}
        <div className="absolute top-1/4 -left-16 w-64 h-64 bg-[#9b87f5]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-[#9b87f5]/10 rounded-full filter blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 px-6 bg-white opacity-0 transition-all duration-1000 ease-out transform translate-y-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-[#1A1F2C] mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-[#8E9196] max-w-2xl mx-auto">
              Создаем цифровые решения, которые впечатляют пользователей и
              достигают бизнес-целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-[#9b87f5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9b87f5]/20 transition-colors">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-[#9b87f5]"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#8E9196]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-20 px-6 bg-gray-50 opacity-0 transition-all duration-1000 ease-out transform translate-y-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-[#1A1F2C] mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-lg text-[#8E9196] max-w-2xl mx-auto">
              Отзывы от тех, кто уже работал с нами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        size={18}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-[#8E9196] mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-[#9b87f5]">
                        {testimonial.name.substring(0, 1)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1A1F2C]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#8E9196]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1F2C] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9b87f5] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#9b87f5] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
            Готовы создать что-то{" "}
            <span className="text-[#9b87f5]">удивительное</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, чтобы обсудить ваш проект и узнать, как мы
            можем помочь вам достичь ваших целей.
          </p>
          <Button
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#8875e0] text-white rounded-full px-10 py-6 text-lg transition-all transform hover:scale-105"
          >
            Связаться с нами
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold text-[#1A1F2C] font-playfair">
              <span className="text-[#9b87f5]">Поехали</span>.dev
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[#8E9196] hover:text-[#9b87f5]">
              О нас
            </a>
            <a href="#" className="text-[#8E9196] hover:text-[#9b87f5]">
              Услуги
            </a>
            <a href="#" className="text-[#8E9196] hover:text-[#9b87f5]">
              Проекты
            </a>
            <a href="#" className="text-[#8E9196] hover:text-[#9b87f5]">
              Контакты
            </a>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            {["Twitter", "Linkedin", "Github"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#8E9196] hover:bg-[#9b87f5]/10 hover:text-[#9b87f5] transition-colors"
              >
                <Icon name={social} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 text-center text-sm text-[#8E9196]">
          <p>© {new Date().getFullYear()} Поехали.dev. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

// Данные для секций
const features = [
  {
    icon: "Layout",
    title: "Современный дизайн",
    description: "Создаем красивые интерфейсы, которые выглядят современно и профессионально.",
  },
  {
    icon: "Zap",
    title: "Быстрая разработка",
    description: "Используем передовые технологии для быстрой и эффективной разработки.",
  },
  {
    icon: "LineChart",
    title: "Ориентация на результат",
    description: "Нацелены на достижение измеримых бизнес-результатов для наших клиентов.",
  },
  {
    icon: "Users",
    title: "Ориентация на пользователя",
    description: "Создаем интуитивно понятные интерфейсы для максимального удобства пользователей.",
  },
  {
    icon: "Code",
    title: "Чистый код",
    description: "Пишем масштабируемый и поддерживаемый код, который легко развивать.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Предоставляем постоянную техническую поддержку для всех проектов.",
  },
];

const testimonials = [
  {
    name: "Алексей Петров",
    position: "CEO, TechStars",
    text: "Команда Поехали.dev создала для нас потрясающий сайт, который полностью отражает наш бренд и ценности. Работа была выполнена в срок и в рамках бюджета.",
  },
  {
    name: "Мария Иванова",
    position: "Маркетинг-директор, Global Inc",
    text: "Благодаря новому сайту наши конверсии выросли на 35%. Профессиональный подход и внимание к деталям - именно то, что нам нужно было.",
  },
  {
    name: "Дмитрий Соколов",
    position: "Основатель, StartUp Hub",
    text: "Поехали.dev помогли нам не только с разработкой, но и с стратегией развития нашего цифрового присутствия. Результаты превзошли наши ожидания.",
  },
];

export default Index;
