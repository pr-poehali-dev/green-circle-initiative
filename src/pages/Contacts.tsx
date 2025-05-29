import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contacts = [
    {
      type: "Email",
      value: "ivan.petrov@example.com",
      icon: "Mail",
      action: "mailto:ivan.petrov@example.com",
    },
    {
      type: "Telegram",
      value: "@ivan_petrov",
      icon: "MessageCircle",
      action: "https://t.me/ivan_petrov",
    },
    {
      type: "GitHub",
      value: "github.com/ivanpetrov",
      icon: "Github",
      action: "https://github.com/ivanpetrov",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/ivanpetrov",
      icon: "Linkedin",
      action: "https://linkedin.com/in/ivanpetrov",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-thin text-gray-900 mb-4">
                Контакты
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Готов обсудить новые возможности сотрудничества
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon
                          name={contact.icon as any}
                          size={24}
                          className="text-blue-600"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {contact.type}
                        </h3>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(contact.action, "_blank")}
                      >
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-center">
                  Готов к новым проектам
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Ищу интересные задачи в области веб-разработки. Открыт для
                  фриланса и постоянного трудоустройства.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() =>
                    window.open("mailto:ivan.petrov@example.com", "_blank")
                  }
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
