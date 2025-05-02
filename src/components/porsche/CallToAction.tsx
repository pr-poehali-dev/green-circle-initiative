
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.3]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&h=1300&q=80')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Запишитесь на тест-драйв сегодня</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Ощутите непередаваемые эмоции за рулем Porsche. Наши специалисты помогут подобрать идеальную модель для вас.</p>
        <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">Записаться на тест-драйв</Button>
      </div>
    </section>
  );
};

export default CallToAction;
