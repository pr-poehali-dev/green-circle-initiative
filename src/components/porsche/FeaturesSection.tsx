
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Передовые технологии",
      description: "Инновационные решения, объединяющие цифровые технологии и безупречную механику для исключительного контроля на дороге.",
      icon: "Zap"
    },
    {
      title: "Безупречный дизайн",
      description: "Узнаваемые аэродинамические линии, созданные с вниманием к каждой детали — воплощение элегантности и спортивного характера.",
      icon: "Paintbrush"
    },
    {
      title: "Высочайшие стандарты безопасности",
      description: "Комплексная система активной и пассивной безопасности, обеспечивающая защиту даже в экстремальных условиях.",
      icon: "Shield"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Преимущества Porsche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждый автомобиль Porsche — это произведение искусства, 
            в котором сочетаются инновации, совершенство и страсть к вождению.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
