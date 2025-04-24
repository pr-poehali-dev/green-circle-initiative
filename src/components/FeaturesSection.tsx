import { Lightbulb, Zap, Shield, RefreshCw, Clock, Award } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Креативный дизайн",
    description: "Инновационные решения, которые выделяют ваш бренд среди конкурентов."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Высокая производительность",
    description: "Оптимизированный код обеспечивает молниеносную загрузку страниц."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Надежная защита",
    description: "Встроенные механизмы безопасности защищают ваши данные."
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Постоянное обновление",
    description: "Регулярные обновления функций и улучшения интерфейса."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Экономия времени",
    description: "Автоматизация процессов увеличивает эффективность работы."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Премиум качество",
    description: "Высокие стандарты исполнения каждого проекта."
  }
];

const FeaturesSection = () => {
  return (
    <section id="особенности" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-muted-foreground">
            Мы предлагаем комплексный подход к разработке и дизайну, который учитывает все потребности вашего бизнеса.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-main flex items-center justify-center mb-4">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
