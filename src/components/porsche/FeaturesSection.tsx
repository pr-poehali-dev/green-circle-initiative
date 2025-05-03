
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Индивидуальный подход",
      description: "Мы понимаем, что каждый клиент уникален. Наши эксперты создадут конфигурацию автомобиля точно под ваши предпочтения и стиль жизни.",
      icon: "UserCheck"
    },
    {
      title: "Премиальный сервис",
      description: "Наша забота о вас не заканчивается после покупки. Мы гарантируем первоклассное обслуживание и персонального консультанта 24/7.",
      icon: "Star"
    },
    {
      title: "Гибкие финансовые решения",
      description: "Мы разработаем индивидуальное финансовое предложение, которое идеально впишется в ваши планы и бюджет.",
      icon: "Wallet"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ваше особое отношение к жизни заслуживает особого отношения к вам
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Выбирая Porsche, вы выбираете не просто автомобиль премиум-класса, но и исключительный уровень заботы о вас как о клиенте.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
