
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Секция призыва к действию на главной странице
 */
const CallToAction = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Испытайте настоящее вождение с Porsche
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Запишитесь на тест-драйв сегодня и ощутите уникальные впечатления
            от вождения легендарного автомобиля
          </p>
          
          <Link to="/test-drive">
            <Button 
              size="lg" 
              className="bg-[#D5001C] hover:bg-[#B0001A] text-white font-medium px-6"
            >
              Записаться на тест-драйв
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
