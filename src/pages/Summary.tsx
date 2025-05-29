import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Summary = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Python", level: 65 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-thin text-gray-900 mb-4">Сводка</h1>
              <p className="text-xl text-gray-600 font-light">
                Краткая информация о моих навыках и достижениях
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Trophy" className="text-yellow-500" />
                    <span>Ключевые достижения</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Повысил производительность приложения на 40%</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Руководил командой из 4 разработчиков</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Успешно запустил 10+ проектов</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="GraduationCap" className="text-blue-500" />
                    <span>Образование</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium">Бакалавр информатики</h4>
                    <p className="text-gray-600">МГУ, 2019</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Сертификат AWS</h4>
                    <p className="text-gray-600">Solutions Architect, 2022</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="BarChart" className="text-purple-500" />
                  <span>Технические навыки</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
