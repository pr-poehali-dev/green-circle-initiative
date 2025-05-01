import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Каталог товаров</h1>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Icon name="Filter" size={16} />
                Фильтры
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Icon name="SortDesc" size={16} />
                Сортировка
              </Button>
            </div>
          </div>
          
          <div className="p-12 text-center bg-muted rounded-lg">
            <Icon name="PackageOpen" size={48} className="mx-auto mb-4 text-muted-foreground/70" />
            <h2 className="text-2xl font-semibold mb-2">Каталог в разработке</h2>
            <p className="text-muted-foreground mb-4">
              Скоро здесь появится полный каталог наших товаров.
            </p>
            <Button onClick={() => window.history.back()}>Вернуться назад</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;