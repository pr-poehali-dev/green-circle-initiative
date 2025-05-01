import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">О компании</h1>
          
          <div className="p-12 text-center bg-muted rounded-lg">
            <Icon name="BuildingStore" size={48} className="mx-auto mb-4 text-muted-foreground/70" />
            <h2 className="text-2xl font-semibold mb-2">Страница о компании</h2>
            <p className="text-muted-foreground mb-4">
              Скоро здесь появится подробная информация о нашей компании.
            </p>
            <Button onClick={() => window.history.back()}>Вернуться назад</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;