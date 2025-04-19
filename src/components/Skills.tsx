import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
};

const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: "🔷" },
  { name: "Vue.js", level: 80, category: "Frontend", icon: "🟢" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend", icon: "🟩" },
  { name: "Python", level: 90, category: "Backend", icon: "🐍" },
  { name: "Django", level: 75, category: "Backend", icon: "🌐" },
  
  // ML/DL
  { name: "TensorFlow", level: 85, category: "ML/DL", icon: "🧠" },
  { name: "PyTorch", level: 80, category: "ML/DL", icon: "🔥" },
  { name: "Computer Vision", level: 75, category: "ML/DL", icon: "👁️" },
  
  // DevOps
  { name: "Docker", level: 85, category: "DevOps", icon: "🐳" },
  { name: "Kubernetes", level: 70, category: "DevOps", icon: "☸️" },
  { name: "CI/CD", level: 80, category: "DevOps", icon: "🔄" },
];

const Skills = () => {
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Мои навыки</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="space-y-4">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="group">
                            <div className="flex items-center mb-1">
                              <span className="mr-2">{skill.icon}</span>
                              <span className="font-medium">{skill.name}</span>
                              <span className="ml-auto text-sm text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2 group-hover:bg-primary/20 transition-colors" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Уровень владения: {skill.level}%</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
