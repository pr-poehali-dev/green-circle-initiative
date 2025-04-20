
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  PanelLeft, 
  GanttChart, 
  GitBranch, 
  Smartphone 
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: <Code className="w-10 h-10 text-primary" />,
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <PanelLeft className="w-10 h-10 text-primary" />,
    skills: ["Node.js", "Express", "REST API", "GraphQL", "MongoDB"]
  },
  {
    title: "Инструменты",
    icon: <GanttChart className="w-10 h-10 text-primary" />,
    skills: ["Git", "Webpack", "Vite", "Docker", "Jest"]
  }
];

const SkillsSection = () => {
  return (
    <section id="навыки" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Мои навыки</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Технологии и инструменты, с которыми я работаю для создания современных 
            веб-приложений и сайтов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  
                  <ul className="space-y-2 w-full">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
