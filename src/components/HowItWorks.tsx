import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "UserPlus",
      title: "Регистрация",
      description: "Получите уникальную реферальную ссылку за 1 минуту",
    },
    {
      icon: "Share2",
      title: "Привлечение",
      description: "Делитесь ссылкой с аудиторией, размещайте в соцсетях",
    },
    {
      icon: "TrendingUp",
      title: "Заработок",
      description: "Получайте % с каждого пополнения энергии вашими клиентами",
    },
    {
      icon: "Banknote",
      title: "Выплаты",
      description: "Автоматические выплаты каждый месяц от 5000₽",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Простой процесс из 4 шагов для начала заработка
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center hover-scale">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
