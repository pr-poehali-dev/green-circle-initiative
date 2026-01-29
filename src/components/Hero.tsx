import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-sand/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - USP */}
          <div>
            {/* Social Proof Stats */}
            <div
              className={`flex flex-wrap gap-6 mb-10 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <p className="font-serif text-2xl text-sage">140+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">клиентов</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-sage">12 лет</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">опыта</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-sage">8 наград</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">международных</p>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-6 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Интерьер, который увеличивает стоимость недвижимости на 30%
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Минималистичный дизайн в стиле japandi, который экономит ваше время, нервы и бюджет. Под ключ за 90 дней.
            </p>
            
            {/* Trust indicators */}
            <div
              className={`space-y-3 mb-10 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Договор с фиксированной ценой
              </p>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Гарантия 3 года на все работы
              </p>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Бесплатное проектирование при заказе реализации
              </p>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
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
              <p className="text-xs text-muted-foreground mt-4">
                ⏰ Всего 5 мест в феврале
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/12ec42d2-6541-49ca-82b2-e5e40ce01bff.jpg"
                alt="Минималистичный интерьер в стиле japandi с натуральными материалами"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Decorative accent */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-terracotta/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-light text-center leading-tight">
                  Топ-3<br/>дизайнеров<br/>2024
                </span>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-border">
              <p className="font-serif text-3xl text-sage mb-1">+30%</p>
              <p className="text-xs text-muted-foreground">к стоимости<br/>недвижимости</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}