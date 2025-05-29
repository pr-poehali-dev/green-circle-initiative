import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Experience = () => {
  const experiences = [
    {
      company: "ТехКомпания",
      position: "Senior Full-Stack Developer",
      period: "2022 - настоящее время",
      description:
        "Разработка высоконагруженных веб-приложений, руководство командой из 4 разработчиков",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      company: "Стартап АБВ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Создание пользовательских интерфейсов для SaaS платформы",
      technologies: ["Vue.js", "TypeScript", "TailwindCSS"],
    },
    {
      company: "Веб-студия",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Разработка корпоративных сайтов и интернет-магазинов",
      technologies: ["JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-thin text-gray-900 mb-4">
                Опыт работы
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Мой профессиональный путь в разработке
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Icon name="Building" size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
