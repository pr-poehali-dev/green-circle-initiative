import MarkdownList from "./MarkdownList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarkdownDemo = () => {
  const skills = [
    "React и TypeScript для фронтенда",
    "Node.js и Python для бэкенда",
    "PostgreSQL и MongoDB для баз данных",
    "Docker и Kubernetes для DevOps",
  ];

  const achievements = [
    "Запустил 15+ проектов в продакшн",
    "Работал с командами до 10 человек",
    "Оптимизировал производительность на 40%",
  ];

  const services = [
    "Разработка веб-приложений",
    "Мобильная разработка",
    "UI/UX дизайн",
    "DevOps и автоматизация",
  ];

  const goals = [
    "Создавать качественные продукты",
    "Изучать новые технологии",
    "Помогать бизнесу расти",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Мои навыки</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🛠️</span>
                  <span>Технологии</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownList items={skills} variant="bullet" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🏆</span>
                  <span>Достижения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownList items={achievements} variant="check" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>💼</span>
                  <span>Услуги</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownList items={services} variant="arrow" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Цели</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownList items={goals} variant="star" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkdownDemo;
