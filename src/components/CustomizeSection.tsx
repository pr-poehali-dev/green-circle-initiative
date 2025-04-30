
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const CustomizeSection = () => {
  const colors = [
    { id: 1, name: "Guards Red", hex: "#A62831", price: 0 },
    { id: 2, name: "GT Silver", hex: "#BFBFBF", price: 120000 },
    { id: 3, name: "Racing Yellow", hex: "#FFE14D", price: 120000 },
    { id: 4, name: "Gentian Blue", hex: "#193156", price: 120000 },
    { id: 5, name: "Jet Black", hex: "#131313", price: 0 },
    { id: 6, name: "Chalk", hex: "#B9B6B0", price: 230000 },
  ];

  const wheels = [
    { id: 1, name: "Carrera S Wheels", size: "20/21 inch", price: 0, image: "https://images.unsplash.com/photo-1626668893628-6f3e4455d648?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "RS Spyder Design", size: "20/21 inch", price: 150000, image: "https://images.unsplash.com/photo-1626668893667-cf507bf95faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "911 Turbo S Wheels", size: "20/21 inch", price: 230000, image: "https://images.unsplash.com/photo-1626668893661-a8ee397fe6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  ];

  const interiors = [
    { id: 1, name: "Black Leather", price: 0, image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Bordeaux Red Leather", price: 190000, image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Slate Grey Leather", price: 190000, image: "https://images.unsplash.com/photo-1563939055-83bf23574203?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <section id="customize" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Создайте свой Porsche 911</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Сконфигурируйте автомобиль вашей мечты. Выберите цвет кузова, колесные диски и внутреннюю отделку.
        </p>
        
        <div className="bg-neutral-900 rounded-xl p-8 mb-12">
          <Tabs defaultValue="exterior" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="exterior">Кузов</TabsTrigger>
              <TabsTrigger value="wheels">Диски</TabsTrigger>
              <TabsTrigger value="interior">Интерьер</TabsTrigger>
            </TabsList>
            
            <TabsContent value="exterior" className="border-none p-0 space-y-8">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Porsche 911 Exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div key={color.id} className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 cursor-pointer transition-colors">
                    <div 
                      className="w-full h-12 rounded mb-3"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{color.name}</h4>
                      <p className="text-sm text-gray-400">
                        {color.price === 0 ? "Бесплатно" : `${color.price.toLocaleString()} ₽`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wheels" className="border-none p-0 space-y-8">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1626668893628-6f3e4455d648?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Porsche 911 Wheels" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wheels.map((wheel) => (
                  <div key={wheel.id} className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 cursor-pointer transition-colors">
                    <div className="h-32 rounded mb-3 overflow-hidden">
                      <img 
                        src={wheel.image} 
                        alt={wheel.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium">{wheel.name}</h4>
                    <p className="text-sm text-gray-400 mb-2">{wheel.size}</p>
                    <p className="text-sm font-medium">
                      {wheel.price === 0 ? "Базовая комплектация" : `${wheel.price.toLocaleString()} ₽`}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="interior" className="border-none p-0 space-y-8">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Porsche 911 Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interiors.map((interior) => (
                  <div key={interior.id} className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 cursor-pointer transition-colors">
                    <div className="h-32 rounded mb-3 overflow-hidden">
                      <img 
                        src={interior.image} 
                        alt={interior.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium">{interior.name}</h4>
                    <p className="text-sm font-medium mt-2">
                      {interior.price === 0 ? "Базовая комплектация" : `${interior.price.toLocaleString()} ₽`}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg">
            Сохранить конфигурацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
