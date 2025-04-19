import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Обо мне</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fade-in hover-scale">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4 text-primary">👨‍💻</div>
              <h3 className="text-xl font-bold mb-2">FullStack Разработка</h3>
              <p className="text-muted-foreground">
                Создаю масштабируемые приложения с использованием современных технологий. 
                От фронтенда до бэкенда — всегда ориентирован на качество кода и пользовательский опыт.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in hover-scale [animation-delay:100ms]">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4 text-primary">🧠</div>
              <h3 className="text-xl font-bold mb-2">Deep Learning</h3>
              <p className="text-muted-foreground">
                Разрабатываю и внедряю модели машинного обучения для решения бизнес-задач. 
                Специализируюсь на компьютерном зрении и обработке естественного языка.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in hover-scale [animation-delay:200ms]">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4 text-primary">👥</div>
              <h3 className="text-xl font-bold mb-2">Техническое Лидерство</h3>
              <p className="text-muted-foreground">
                Направляю команды разработчиков, создаю технические стратегии и архитектурные решения.
                Строю эффективные рабочие процессы и помогаю команде расти.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-12" />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Я — увлеченный технический лидер с опытом в разработке сложных программных систем. 
            Моя карьера началась с веб-разработки, где я быстро освоил полный цикл создания 
            приложений от фронтенда до бэкенда. По мере развития технологий, я погрузился 
            в мир искусственного интеллекта и машинного обучения.
          </p>
          <p className="text-lg">
            Моя сильная сторона — способность объединять передовые технологии с бизнес-целями, 
            создавая инновационные решения, которые действительно работают. Я верю в постоянное 
            обучение и всегда ищу новые способы улучшить свои навыки и знания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
