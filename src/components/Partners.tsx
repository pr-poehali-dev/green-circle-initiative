import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Partners = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const partners = [
    {
      name: "TechCorp",
      logo: "🏢",
      description: "Ведущая IT-компания",
      website: "techcorp.com"
    },
    {
      name: "InnovateLab", 
      logo: "🔬",
      description: "Инновационная лаборатория",
      website: "innovatelab.com"
    },
    {
      name: "DigitalFlow",
      logo: "💻", 
      description: "Цифровые решения",
      website: "digitalflow.com"
    },
    {
      name: "StartupHub",
      logo: "🚀",
      description: "Стартап-акселератор", 
      website: "startuphub.com"
    },
    {
      name: "CloudSys",
      logo: "☁️",
      description: "Облачные технологии",
      website: "cloudsys.com"
    },
    {
      name: "DataCore",
      logo: "📊",
      description: "Аналитика данных",
      website: "datacore.com"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы сотрудничаем с ведущими компаниями для создания инновационных решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{partner.logo}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                {hoveredPartner === index && (
                  <div className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Icon name="ExternalLink" size={16} />
                    <span className="text-sm font-medium">{partner.website}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;