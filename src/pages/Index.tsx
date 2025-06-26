import StarWars from "react-star-wars-crawl";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarWars
        title="КОСМИЧЕСКОЕ ПРИКЛЮЧЕНИЕ"
        subTitle="Эпизод I"
        text="Далеко-далеко, в далёкой галактике... 
        
        Началось великое приключение разработки веб-приложения. Юра, личный программист-космонавт, готов помочь создать удивительные проекты прямо в браузере.

        С помощью современных технологий React, TypeScript и Vite мы отправляемся в путешествие по безграничным возможностям веб-разработки.

        Пусть код будет с вами..."
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 opacity-80">🚀 ПОЕХАЛИ!</h1>
          <p className="text-2xl opacity-60">Создаём будущее вместе</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
