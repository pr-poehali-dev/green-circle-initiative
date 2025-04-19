import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Выберите номинал",
    description: "Выберите нужный номинал Apple Gift Card из доступных вариантов."
  },
  {
    number: "02",
    title: "Оплатите удобным способом",
    description: "Оплатите картой, электронным кошельком или через систему быстрых платежей."
  },
  {
    number: "03",
    title: "Получите код активации",
    description: "Сразу после оплаты вы получите код активации на ваш email."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="apple-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Как это работает
          </h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Покупка Apple Gift Cards — это просто и быстро
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-7xl font-bold text-black/5 absolute -top-6 left-0">
                {step.number}
              </div>
              <div className="pt-8 relative">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-apple-darkgray">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/how-it-works" className="text-apple-blue font-medium hover:underline">
            Подробнее о процессе активации →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;