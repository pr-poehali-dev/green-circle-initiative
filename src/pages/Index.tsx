import { Footer } from "@/components/Footer";
import { GiftCardGrid } from "@/components/GiftCardGrid";
import { FAQ } from "@/components/FAQ";
import { AppleDock } from "@/components/AppleDock";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pb-24">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Подарочные Карты Apple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мгновенная доставка. Гарантированная активация.
              Официальный партнер Apple в России.
            </p>
            <button className="bg-pink hover:bg-pink/90 text-pink-foreground px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition-all">
              Купить сейчас
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink/10 text-pink mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Мгновенная доставка</h3>
                <p className="text-muted-foreground">Получите код активации на email в течение минуты после оплаты</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink/10 text-pink mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% гарантия</h3>
                <p className="text-muted-foreground">Все карты официальные с подтвержденной активацией</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink/10 text-pink mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/><path d="M21 14h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/><path d="M12 2a7 7 0 0 0-7 7v5h14V9a7 7 0 0 0-7-7z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 поддержка</h3>
                <p className="text-muted-foreground">Наша команда всегда готова помочь с любыми вопросами</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Card Grid */}
        <GiftCardGrid />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
      <AppleDock />
    </div>
  );
};

export default Index;
