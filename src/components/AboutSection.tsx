
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="обо-мне" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-square bg-muted">
                <img 
                  src="/placeholder.svg" 
                  alt="Фото разработчика" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground text-4xl font-bold">5+</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              Я разработчик с более чем 5-летним опытом создания современных веб-приложений. 
              Специализируюсь на frontend-разработке, создавая стильные и функциональные интерфейсы, 
              которые решают бизнес-задачи и улучшают опыт пользователей.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              В своей работе я всегда стремлюсь использовать передовые технологии и подходы, 
              следуя лучшим практикам разработки. Я верю, что хороший код — это не только 
              функциональность, но и поддерживаемость, масштабируемость и чистота.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["React", "TypeScript", "JavaScript", "CSS/SCSS", "HTML5"].map((skill) => (
                <Card key={skill} className="border-none shadow-none bg-secondary">
                  <CardContent className="flex items-center justify-center p-2">
                    <span className="text-sm font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
