import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Job = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

const experienceData: Job[] = [
  {
    title: "Технический Лидер",
    company: "AI Инновации",
    period: "2021 — настоящее время",
    description: "Руководство командой из 8 разработчиков, создающих AI-решения для бизнеса.",
    achievements: [
      "Запустил продукт для автоматизации документооборота, сократив время обработки на 70%",
      "Разработал стратегию миграции монолитного приложения в микросервисную архитектуру",
      "Внедрил CI/CD конвейер, ускоривший развертывание на 50%"
    ]
  },
  {
    title: "Senior Full Stack Developer",
    company: "ТехСтарт",
    period: "2019 — 2021",
    description: "Разработка веб-приложений полного цикла с фокусом на высоконагруженные системы.",
    achievements: [
      "Оптимизировал производительность фронтенда, сократив время загрузки на 40%",
      "Разработал RESTful API, обслуживающий более 1 млн запросов в день",
      "Создал библиотеку компонентов, ускорившую разработку новых проектов"
    ]
  },
  {
    title: "ML Engineer",
    company: "DataDriven",
    period: "2018 — 2019",
    description: "Разработка и внедрение моделей машинного обучения для задач бизнес-аналитики.",
    achievements: [
      "Создал модель прогнозирования с точностью 92%, повысившую продажи на 15%",
      "Оптимизировал алгоритмы обработки данных, ускорив анализ в 3 раза",
      "Разработал интерфейс визуализации для аналитических панелей"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Опыт работы</h2>
        
        <div className="space-y-6">
          {experienceData.map((job, index) => (
            <Card key={job.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <div className="text-lg font-medium text-primary">{job.company}</div>
                  </div>
                  <Badge variant="outline" className="text-sm font-normal">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <h4 className="font-medium mb-2">Ключевые достижения:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
