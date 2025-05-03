
import FeatureCard from "./FeatureCard";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Sparkles",
    title: "Инновационные технологии",
    description: "Наслаждайтесь передовыми технологиями, которые делают каждую поездку комфортнее и интереснее"
  },
  {
    icon: "Timer",
    title: "Невероятная динамика",
    description: "Почувствуйте мощь и скорость, которые буквально приковывают вас к сиденью при каждом ускорении"
  },
  {
    icon: "Settings",
    title: "Немецкое качество",
    description: "Оцените безупречное исполнение каждой детали — результат легендарной немецкой инженерной мысли"
  },
  {
    icon: "Heart",
    title: "Эмоциональный дизайн",
    description: "Влюбитесь в каждую линию кузова, созданную с любовью к скорости и аэродинамике"
  },
  {
    icon: "Shield",
    title: "Максимальная безопасность",
    description: "Доверьтесь системам безопасности, которые заботятся о вас и ваших близких в любой ситуации"
  },
  {
    icon: "Crown",
    title: "Особый статус",
    description: "Станьте частью эксклюзивного сообщества владельцев Porsche — символа успеха и хорошего вкуса"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Почему Porsche — это особенный выбор</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Каждый Porsche создан с особой философией, которая делает его не просто автомобилем, а источником вдохновения и радости
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
