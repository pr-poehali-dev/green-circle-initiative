import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Subscriptions = () => {
  const books = [
    {
      title: "Война и мир",
      author: "Лев Толстой",
      price: "599₽",
      originalPrice: "799₽",
      rating: 4.8,
      reviews: 1247,
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      bestseller: true,
    },
    {
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      price: "459₽",
      originalPrice: null,
      rating: 4.7,
      reviews: 892,
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      bestseller: false,
    },
    {
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      price: "529₽",
      originalPrice: "649₽",
      rating: 4.9,
      reviews: 2156,
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      bestseller: true,
    },
    {
      title: "Анна Каренина",
      author: "Лев Толстой",
      price: "479₽",
      originalPrice: null,
      rating: 4.6,
      reviews: 756,
      cover:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      bestseller: false,
    },
    {
      title: "Евгений Онегин",
      author: "Александр Пушкин",
      price: "399₽",
      originalPrice: "499₽",
      rating: 4.5,
      reviews: 634,
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      bestseller: false,
    },
    {
      title: "Братья Карамазовы",
      author: "Фёдор Достоевский",
      price: "649₽",
      originalPrice: "799₽",
      rating: 4.8,
      reviews: 1089,
      cover:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
      bestseller: false,
    },
  ];

  const handleAddToCart = (title: string) => {
    console.log(`Добавлена в корзину: ${title}`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : i < rating
              ? "text-yellow-400 fill-current opacity-50"
              : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="subscriptions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Каталог книг
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Лучшие произведения русской классики
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Card
                key={index}
                className={`hover-scale relative transition-all duration-300 overflow-hidden ${
                  book.bestseller
                    ? "border-2 border-amber-300 shadow-lg"
                    : "border hover:shadow-md"
                }`}
              >
                {book.bestseller && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Бестселлер
                    </span>
                  </div>
                )}

                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                    {book.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600">{book.author}</div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {renderStars(book.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {book.rating} ({book.reviews})
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">
                        {book.price}
                      </span>
                      {book.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {book.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(book.title)}
                    className={`w-full ${
                      book.bestseller
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    size="lg"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
