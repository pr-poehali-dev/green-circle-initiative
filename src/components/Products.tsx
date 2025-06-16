import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const Products = () => {
  const subscriptions = [
    {
      name: "Apple Music",
      description: "Музыка и подкасты",
      price: "169₽",
      period: "/месяц",
      popular: false,
      features: ["60+ млн песен", "Офлайн прослушивание", "Lossless качество"],
    },
    {
      name: "Netflix Premium",
      description: "Фильмы и сериалы 4K",
      price: "599₽",
      period: "/месяц",
      popular: true,
      features: ["4K Ultra HD", "4 экрана одновременно", "Загрузка контента"],
    },
    {
      name: "Spotify Premium",
      description: "Музыка без рекламы",
      price: "199₽",
      period: "/месяц",
      popular: false,
      features: ["Без рекламы", "Офлайн режим", "Высокое качество"],
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Популярные подписки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Экономьте до 70% на любимых сервисах
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 border-2 rounded-3xl bg-white ${
                sub.popular
                  ? "border-purple-500 shadow-2xl scale-105"
                  : "border-gray-200 hover:border-purple-300"
              } transition-all duration-300`}
            >
              {sub.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {sub.name}
                </h3>
                <p className="text-gray-600 mb-4">{sub.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-purple-600">
                    {sub.price}
                  </span>
                  <span className="text-gray-500 mb-1">{sub.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {sub.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                  sub.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                Купить
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
