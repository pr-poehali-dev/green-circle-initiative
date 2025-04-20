import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Майнкрафт мод: ТехноМагия",
    description: "Комплексный мод, объединяющий технологии и магию в мире Minecraft. Добавляет новые блоки, предметы и механики.",
    image: "/placeholder.svg",
    tags: ["Java", "Forge API", "Minecraft", "ModLoader"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Minecraft карта: Выживание на острове",
    description: "Приключенческая карта с уникальными квестами и испытаниями на ограниченной территории.",
    image: "/placeholder.svg",
    tags: ["Minecraft", "WorldEdit", "CommandBlocks"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Ресурспак: Пиксельная реальность",
    description: "HD текстуры, сохраняющие пиксельную эстетику оригинальной игры, но добавляющие детализацию.",
    image: "/placeholder.svg",
    tags: ["Pixel Art", "Texturing", "Minecraft", "ResourcePack"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="проекты" className="py-20 dirt-bg">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-minecraft mb-4 text-white">Мои проекты</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-minecraft">
            Мои лучшие работы, показывающие опыт в разработке для Minecraft
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="minecraft-card hover-scale">
              <div className="aspect-video bg-black overflow-hidden mb-4 pixel-corners">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-2">
                <h3 className="text-xl font-minecraft mb-2 text-white">{project.title}</h3>
                <p className="text-foreground/80 mb-4 font-minecraft">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-minecraft-stone text-white font-minecraft pixel-corners">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="minecraft-btn text-sm">
                    <ExternalLink className="w-4 h-4 mr-1 inline" />
                    Демо
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="minecraft-btn text-sm" style={{backgroundColor: "#8B6914"}}>
                    <Github className="w-4 h-4 mr-1 inline" />
                    Код
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;