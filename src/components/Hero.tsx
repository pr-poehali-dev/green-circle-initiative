import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-800 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl">🍎</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Apple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                Gift Cards
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Официальные подарочные карты Apple
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Купите подарочные карты Apple с гарантией подлинности. Мгновенная
              доставка на email. Проверенные продавцы.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("products")}
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-gray-600 hover:shadow-lg transition-shadow"
            >
              <Icon name="CreditCard" className="mr-2" size={20} />
              Купить карту
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("verification")}
            >
              <Icon name="Shield" className="mr-2" size={20} />
              Проверить подлинность
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
