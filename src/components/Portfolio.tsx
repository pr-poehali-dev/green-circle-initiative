import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Корпоративный сайт",
      description: "Современный сайт для IT-компании с адаптивным дизайном",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Аналитическая панель для управления подписками",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tech: ["Vue.js", "Chart.js", "Node.js"],
      link: "#",
    },
    {
      title: "Мобильное приложение",
      description: "Приложение для заказа еды с интеграцией платежей",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      tech: ["React Native", "Stripe", "Firebase"],
      link: "#",
    },
    {
      title: "Дизайн интерфейса",
      description: "UI/UX для стартапа в сфере финансовых технологий",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop",
      tech: ["Figma", "Principle", "Adobe XD"],
      link: "#",
    },
    {
      title: "API платформа",
      description: "RESTful API с документацией и системой авторизации",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      link: "#",
    },
    {
      title: "DevOps решение",
      description: "Автоматизация развертывания для микросервисов",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      tech: ["Docker", "Jenkins", "AWS"],
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Примеры моих работ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
