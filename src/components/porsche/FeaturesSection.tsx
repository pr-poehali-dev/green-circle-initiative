
import FeatureCard, { Feature } from "./FeatureCard";

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      id: "performance",
      title: "Непревзойденная динамика",
      description: "Разгон до 100 км/ч за считанные секунды. Мощь, которая не оставит равнодушным.",
      icon: "Timer"
    },
    {
      id: "quality",
      title: "Немецкое качество",
      description: "Каждый автомобиль — результат безупречного инженерного искусства и внимания к деталям.",
      icon: "Shield"
    },
    {
      id: "prestige",
      title: "Престиж и статус",
      description: "Porsche — символ успеха и безупречного вкуса. Автомобиль, который говорит сам за себя.",
      icon: "Star"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Преимущества Porsche</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
