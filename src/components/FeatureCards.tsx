interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Быстрая разработка",
    description:
      "Создавайте сайты в 30 раз быстрее обычного с помощью ИИ-ассистента",
    icon: "🚀",
  },
  {
    title: "Без программирования",
    description:
      "Описывайте задачи на русском языке — код генерируется автоматически",
    icon: "💬",
  },
  {
    title: "Публикация в один клик",
    description:
      "Мгновенная публикация проекта в интернет с интеграцией GitHub",
    icon: "🌐",
  },
];

const FeatureCards = () => {
  return (
    <section className="relative z-20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
