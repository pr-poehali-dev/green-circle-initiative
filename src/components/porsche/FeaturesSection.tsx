
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают Porsche?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждый Porsche создан с любовью к деталям и стремлением к совершенству. 
            Узнайте, что делает Porsche особенным автомобилем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<span>⚡</span>}
            title="Невероятная динамика"
            description="Почувствуйте захватывающий разгон и управляемость, которые подарят вам незабываемые эмоции от каждой поездки"
          />
          <FeatureCard
            icon={<span>🛠️</span>}
            title="Инженерное совершенство"
            description="Более 70 лет опыта в создании спортивных автомобилей с немецкой точностью и вниманием к каждой детали"
          />
          <FeatureCard
            icon={<span>🏆</span>}
            title="Богатое наследие"
            description="Присоединитесь к легендарной истории марки с богатыми спортивными традициями и уникальным наследием"
          />
          <FeatureCard
            icon={<span>🌿</span>}
            title="Экологичность"
            description="Современные технологии и экологичные решения для ответственного вождения и заботы о нашей планете"
          />
          <FeatureCard
            icon={<span>💎</span>}
            title="Эксклюзивность"
            description="Станьте частью избранного сообщества владельцев, где каждый автомобиль отражает индивидуальность своего хозяина"
          />
          <FeatureCard
            icon={<span>🔧</span>}
            title="Надёжная поддержка"
            description="Наша дружелюбная команда профессионалов всегда готова помочь с обслуживанием и любыми вопросами о вашем Porsche"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
