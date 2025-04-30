
import { Progress } from "@/components/ui/progress";

const PerformanceSpecs = () => {
  const specs = [
    { name: "Мощность", value: 450, max: 650, unit: "л.с." },
    { name: "Крутящий момент", value: 530, max: 800, unit: "Нм" },
    { name: "Разгон 0-100 км/ч", value: 3.4, max: 5, unit: "сек", inverted: true },
    { name: "Максимальная скорость", value: 310, max: 350, unit: "км/ч" },
  ];

  return (
    <section id="specs" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Впечатляющие характеристики</h2>
            <p className="text-xl text-gray-400 mb-8">
              Инженеры Porsche постоянно раздвигают границы возможного, чтобы создать 
              самый совершенный спортивный автомобиль. Каждая деталь 911 разработана 
              для достижения максимальной производительности.
            </p>
            
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{spec.name}</span>
                    <span className="font-semibold text-white">
                      {spec.inverted 
                        ? `${spec.value} ${spec.unit} (быстрее - лучше)`
                        : `${spec.value} ${spec.unit}`
                      }
                    </span>
                  </div>
                  <Progress 
                    value={spec.inverted 
                      ? ((spec.max - spec.value) / spec.max) * 100
                      : (spec.value / spec.max) * 100
                    } 
                    className="h-2 bg-neutral-800"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-neutral-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Инновации в каждой детали</h3>
              <p className="text-gray-400">
                911 оснащен системой Porsche Active Suspension Management (PASM), 
                электронно-регулируемой системой амортизации, которая активно и непрерывно 
                регулирует силу демпфирования на каждом колесе в соответствии с текущим стилем 
                вождения и дорожными условиями.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Porsche 911 Engine" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 py-4 px-6 rounded-lg">
              <p className="text-2xl font-bold">3.0L</p>
              <p className="text-sm">Twin-Turbo Boxer Engine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSpecs;
