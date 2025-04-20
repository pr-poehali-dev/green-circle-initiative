
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon, CreditCard, ShoppingCart, HelpCircle, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GiftCardGrid } from "@/components/GiftCardGrid";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-r from-[#f3f3f3] to-[#e5deff]">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#222]">
              Apple Gift Cards - идеальный подарок для всех
            </h1>
            <p className="text-xl mb-6 text-gray-700">
              Подарите близким возможность выбрать любимые приложения, игры, музыку, фильмы и многое другое в экосистеме Apple
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                <ShoppingCart className="mr-2 h-5 w-5" /> Купить сейчас
              </Button>
              <Link to="#cards">
                <Button size="lg" variant="outline">
                  Выбрать номинал
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://image.pollinations.ai/prompt/apple-gift-cards" 
              alt="Apple Gift Card" 
              className="rounded-lg shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#222]">
            Почему выбирают наши Apple Gift Cards?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-[#8B5CF6]" />
                </div>
                <CardTitle className="text-center">Официальная гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Все карты получены напрямую от Apple и имеют полную гарантию активации
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CreditCard className="h-12 w-12 text-[#8B5CF6]" />
                </div>
                <CardTitle className="text-center">Мгновенная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Получите код активации карты на email в течение нескольких минут после оплаты
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <HelpCircle className="h-12 w-12 text-[#8B5CF6]" />
                </div>
                <CardTitle className="text-center">Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Наша служба поддержки всегда готова помочь вам с любыми вопросами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift Cards Grid */}
      <GiftCardGrid />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
