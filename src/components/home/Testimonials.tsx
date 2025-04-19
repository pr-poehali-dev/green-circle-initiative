import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Алексей М.",
    text: "Очень удобный сервис! Купил подарочную карту Apple для брата на день рождения, доставка на почту была мгновенной.",
    rating: 5,
  },
  {
    id: 2,
    name: "Елена С.",
    text: "Уже второй раз пользуюсь этим сервисом. Быстро, удобно и надежно. Теперь могу пополнять свой Apple ID без проблем.",
    rating: 5,
  },
  {
    id: 3,
    name: "Дмитрий К.",
    text: "Отличный сервис! Купил карту на 5000 рублей, активировал сразу же. Всё работает, никаких проблем.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="apple-container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Отзывы наших клиентов
        </h2>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-apple-gray rounded-3xl p-8 md:p-10 h-full">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 space-x-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;