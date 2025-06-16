import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const books = [
    {
      title: "Война и мир",
      author: "Лев Толстой",
      price: "899₽",
      originalPrice: "1299₽",
      rating: 4.8,
      reviews: 2547,
      genre: "Классика",
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      popular: true,
      discount: "-31%",
    },
    {
      title: "Атомные привычки",
      author: "Джеймс Клир",
      price: "649₽",
      originalPrice: "799₽",
      rating: 4.9,
      reviews: 1823,
      genre: "Психология",
      cover:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      popular: true,
      discount: "-19%",
    },
    {
      title: "Дюна",
      author: "Фрэнк Герберт",
      price: "599₽",
      originalPrice: null,
      rating: 4.7,
      reviews: 3241,
      genre: "Фантастика",
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
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
            Популярные книги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Лучшие предложения с доставкой по всей России
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                book.popular
                  ? "border-2 border-amber-300 scale-105"
                  : "border border-gray-200"
              }`}
            >
              {book.popular && (
                <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Хит продаж
                </div>
              )}

              {book.discount && (
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {book.discount}
                </div>
              )}

              <div className="aspect-[3/4] bg-gray-100">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                    {book.genre}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 mb-3">{book.author}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {book.rating} ({book.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {book.price}
                    </span>
                    {book.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {book.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    addToCart({
                      title: book.title,
                      author: book.author,
                      price: book.price,
                      cover: book.cover,
                    })
                  }
                  className={`w-full py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                    book.popular
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
