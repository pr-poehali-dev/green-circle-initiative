import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl">👨‍💻</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Привет, я{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Юра
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Фуллстек-разработчик, создающий цифровые решения
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Специализируюсь на веб-разработке, мобильных приложениях, UI/UX
              дизайне и DevOps. Превращаю идеи в готовые продукты.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transition-shadow"
            >
              <Icon name="Code" className="mr-2" size={20} />
              Посмотреть проекты
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("mailto:yura@dev.example")}
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
