
import { CheckCircle, Timer, Truck, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Timer className="h-8 w-8 text-blue-400" />,
      title: "Быстрая доставка",
      description: "Оперативная доставка бетона на ваш объект 24/7 в любую точку города"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-400" />,
      title: "Высокое качество",
      description: "Строгий контроль на всех этапах производства гарантирует качество бетона"
    },
    {
      icon: <Truck className="h-8 w-8 text-purple-400" />,
      title: "Собственный автопарк",
      description: "Автопарк специализированной техники для доставки и укладки бетона"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Сертификация",
      description: "Вся продукция сертифицирована и соответствует ГОСТ"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Наши преимущества</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="backdrop-blur-lg bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 hover:bg-zinc-700/30 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-zinc-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
