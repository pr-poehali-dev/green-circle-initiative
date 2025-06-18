import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const pishki = [
    {
      title: "Классические пышки",
      author: "Бабушкин рецепт",
      price: "250₽",
      originalPrice: "300₽",
      rating: 4.9,
      reviews: 2547,
      genre: "Классика",
      cover:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=400&fit=crop",
      popular: true,
      discount: "-17%",
    },
    {
      title: "Пышки с джемом",
      author: "Фирменный рецепт",
      price: "320₽",
      originalPrice: "380₽",
      rating: 4.8,
      reviews: 1823,
      genre: "С начинкой",
      cover:
        "https://images.unsplash.com/photo-1586191544314-f4324e7bfa0e?w=300&h=400&fit=crop",
      popular: true,
      discount: "-16%",
    },
    {
      title: "Медовые пышки",
      author: "Авторская серия",
      price: "380₽",
      originalPrice: null,
      rating: 4.9,
      reviews: 3241,
      genre: "Премиум",
      cover:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=400&fit=crop",
      popular: false,
      discount: null,
    },
  ];

  return (
    <section id="catalog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Популярные пышки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Лучшие пышки с доставкой по всей России
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pishki.map((pishka, index) => (
            <motion.div
              key={pishka.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pishka.popular
                  ? "border-2 border-amber-300 scale-105"
                  : "border border-gray-200"
              }`}
            >
              {pishka.popular && (
                <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Хит продаж
                </div>
              )}

              {pishka.discount && (
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pishka.discount}
                </div>
              )}

              <div className="aspect-[3/4] bg-gray-100">
                <img
                  src={pishka.cover}
                  alt={pishka.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                    {pishka.genre}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                  {pishka.title}
                </h3>

                <p className="text-gray-600 mb-3">{pishka.author}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(pishka.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {pishka.rating} ({pishka.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {pishka.price}
                    </span>
                    {pishka.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {pishka.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    addToCart({
                      title: pishka.title,
                      author: pishka.author,
                      price: pishka.price,
                      cover: pishka.cover,
                    })
                  }
                  className={`w-full py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                    pishka.popular
                      ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-amber-100 hover:text-amber-700"
                  }`}
                >
                  В корзину
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
