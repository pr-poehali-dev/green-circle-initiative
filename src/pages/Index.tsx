import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NumberCard from "@/components/NumberCard";

const Index = () => {
  const featuredNumbers = [
    {
      number: "999 888 77 66",
      operator: "МТС" as const,
      price: 150000,
      category: "VIP" as const,
      isNew: true,
    },
    {
      number: "777 777 77 77",
      operator: "Билайн" as const,
      price: 250000,
      category: "VIP" as const,
    },
    {
      number: "123 456 78 90",
      operator: "Мегафон" as const,
      price: 45000,
      category: "Красивый" as const,
    },
    {
      number: "800 555 55 55",
      operator: "Теле2" as const,
      price: 85000,
      category: "Золотой" as const,
    },
    {
      number: "911 911 91 19",
      operator: "МТС" as const,
      price: 120000,
      category: "VIP" as const,
    },
    {
      number: "333 22 11 00",
      operator: "Билайн" as const,
      price: 75000,
      category: "Золотой" as const,
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Топ красивых номеров
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые популярные и запоминающиеся номера от ведущих операторов
              России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredNumbers.map((number, index) => (
              <NumberCard key={index} {...number} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Посмотреть весь каталог
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded"></div>
            <h3 className="text-xl font-bold">VIP Номера</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Эксклюзивные номера телефонов для вас и вашего бизнеса
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary">
              Условия использования
            </a>
            <a href="#" className="hover:text-primary">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
