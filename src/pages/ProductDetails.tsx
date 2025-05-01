import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="bg-muted p-12 text-center rounded-lg">
            <Icon name="Package" size={48} className="mx-auto mb-4 text-muted-foreground/70" />
            <h2 className="text-2xl font-semibold mb-2">Товар #{id}</h2>
            <p className="text-muted-foreground mb-4">
              Страница товара находится в разработке.
            </p>
            <Button onClick={() => window.history.back()}>Вернуться назад</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;