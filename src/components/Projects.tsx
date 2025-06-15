import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      icon: "Globe",
      title: "E-commerce платформа",
      description:
        "Полнофункциональный интернет-магазин с админ-панелью и системой платежей",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Запущен",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description:
        "Кроссплатформенное приложение для управления задачами и командной работы",
      tech: ["React Native", "Firebase", "Redux"],
      status: "В разработке",
    },
    {
      icon: "Palette",
      title: "Дизайн-система",
      description:
        "Компонентная библиотека и руководство по стилю для стартапа",
      tech: ["Figma", "Storybook", "TypeScript"],
      status: "Готов",
    },
    {
      icon: "Server",
      title: "DevOps автоматизация",
      description:
        "CI/CD пайплайн и инфраструктура для микросервисной архитектуры",
      tech: ["Docker", "Kubernetes", "GitHub Actions"],
      status: "Запущен",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Последние проекты
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Над чем работаю сейчас
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-scale border-l-4 border-l-purple-600"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Icon
                          name={project.icon}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${
                            project.status === "Запущен"
                              ? "bg-green-100 text-green-800"
                              : project.status === "В разработке"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
