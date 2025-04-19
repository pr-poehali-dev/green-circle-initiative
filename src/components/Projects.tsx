import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
};

const projectsData: Project[] = [
  {
    title: "AI-Powered Аналитика",
    description: "Платформа для анализа данных с применением алгоритмов машинного обучения. Позволяет визуализировать большие объемы информации и выявлять скрытые паттерны.",
    technologies: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Система управления проектами",
    description: "Комплексное решение для организации рабочих процессов команды. Включает трекинг задач, диаграммы Ганта и интеграцию с популярными инструментами разработки.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg",
    github: "https://github.com"
  },
  {
    title: "Нейронная сеть для распознавания объектов",
    description: "Модель компьютерного зрения, способная идентифицировать и классифицировать объекты в реальном времени. Оптимизирована для работы на мобильных устройствах.",
    technologies: ["PyTorch", "OpenCV", "React Native", "TensorRT"],
    image: "/placeholder.svg",
    demo: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Мои проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card key={project.title} className="animate-fade-in hover-scale overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Демо
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
