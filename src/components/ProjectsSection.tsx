
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce платформа",
    description: "Современный интернет-магазин с каталогом товаров, корзиной и оформлением заказа",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Redux", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Корпоративный портал",
    description: "Внутренний портал для компании с управлением задачами, документами и коммуникацией",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "GraphQL", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Лендинг для стартапа",
    description: "Продающая страница для технологического стартапа с анимациями и формой подписки",
    image: "/placeholder.svg",
    tags: ["React", "GSAP", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="проекты" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Мои проекты</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Некоторые из моих недавних работ, демонстрирующие мои навыки и подход к разработке
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Демо
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Код
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
