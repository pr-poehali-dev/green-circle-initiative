
import { useParams } from "react-router-dom";
import Header from "@/components/porsche/Header";
import Footer from "@/components/porsche/Footer";
import ModelDetailGallery from "@/components/porsche/ModelDetailGallery";
import ModelSpecifications from "@/components/porsche/ModelSpecifications";
import ModelCallToAction from "@/components/porsche/ModelCallToAction";

/**
 * Страница детального просмотра модели Porsche
 * Отображает подробную информацию о выбранной модели
 */
const ModelDetail = () => {
  const { modelId } = useParams();

  // Демо-данные для модели (в реальном приложении данные будут загружаться по ID)
  const modelData = {
    id: modelId || "911",
    name: "Porsche 911",
    description: "Легендарный спортивный автомобиль с непревзойденной управляемостью и производительностью.",
    price: "от 8 790 000 ₽",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
      "https://images.unsplash.com/photo-1611651338412-8403fa6e3c79?q=80&w=1000",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000"
    ],
    specs: {
      engine: "Twin-turbo 3.0-литровый шестицилиндровый",
      power: "385 л.с.",
      acceleration: "4.2 секунды до 100 км/ч",
      topSpeed: "293 км/ч",
      transmission: "8-ступенчатая PDK"
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{modelData.name}</h1>
          <p className="text-xl text-gray-600">{modelData.price}</p>
        </div>
        
        <ModelDetailGallery images={modelData.images} />
        
        <div className="my-12">
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {modelData.description}
          </p>
          
          <ModelSpecifications specs={modelData.specs} />
        </div>
        
        <ModelCallToAction model={modelData.name} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ModelDetail;
