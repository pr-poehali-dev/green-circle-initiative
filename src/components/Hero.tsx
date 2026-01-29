import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Social Proof Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <p className="font-serif text-3xl text-sage">140+</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">довольных клиентов</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl text-sage">12 лет</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">создаём интерьеры</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl text-sage">8 наград</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">международных</p>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Интерьер, который увеличивает стоимость недвижимости на 30%
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Минималистичный дизайн в стиле japandi, который экономит ваше время, нервы и бюджет. Под ключ за 90 дней.
        </p>
        
        {/* Trust indicators */}
        <p
          className={`text-sm text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ✓ Договор с фиксированной ценой  ✓ Гарантия 3 года  ✓ Бесплатное проектирование при заказе реализации
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 rounded-full shadow-lg hover:shadow-xl"
          >
            Получить бесплатный проект
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-xs text-muted-foreground">
            Всего 5 мест в феврале
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}